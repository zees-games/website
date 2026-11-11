#!/usr/bin/env node
/*
 * Checks the maps pages that moved to a game's own site (src/lib/redirects.ts)
 * against a build: `node scripts/test-redirects.mjs` after `npm run build`.
 *
 * - dist-nginx/moved.map: every entry is a maps path and an absolute https URL
 *   on another host, no path twice, no target that is itself a moved path;
 * - every moved page the build wrote is the fallback: noindex, its canonical
 *   and meta refresh both the map's target;
 * - the sitemap and every page's links leave the moved paths out;
 * - the maps pages of games without a site are still full pages.
 *
 * With a base URL (`node scripts/test-redirects.mjs http://127.0.0.1:8080`,
 * the image running) it also asks nginx for every moved path: one 301 to the
 * target, query string kept, and a 200 for a maps page that did not move.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'dist'
const base = process.argv[2]?.replace(/\/+$/, '')
let failures = 0
const fail = (msg) => { failures++; console.error(`FAIL ${msg}`) }

const entries = readFileSync('dist-nginx/moved.map', 'utf8')
  .split('\n')
  .filter((l) => l && !l.startsWith('#'))
  .map((l) => {
    const m = l.match(/^"([^"]+)" "([^"]+)";$/)
    if (!m) fail(`moved.map line not understood: ${l}`)
    return m ? { from: m[1], to: m[2] } : null
  })
  .filter(Boolean)
const moved = new Map()
for (const { from, to } of entries) {
  if (moved.has(from)) fail(`${from} listed twice`)
  moved.set(from, to)
  if (!/\/maps(\/|\/index\.html)?$/.test(from)) fail(`${from} is not a maps path`)
  let url
  try { url = new URL(to) } catch { fail(`${from} -> ${to} is not a URL`); continue }
  if (url.protocol !== 'https:' || url.hostname.endsWith('zeesgames.com')) fail(`${from} -> ${to} does not leave the site over https`)
}
for (const to of moved.values()) if (moved.has(new URL(to).pathname)) fail(`${to} is itself moved (a chain)`)

const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
  const p = join(dir, d.name)
  return d.isDirectory() ? htmlFiles(p) : d.name.endsWith('.html') ? [p] : []
})
const pages = htmlFiles(DIST)

let stubs = 0
for (const [from, to] of moved) {
  if (!from.endsWith('/maps/')) continue
  const file = join(DIST, from, 'index.html')
  if (!existsSync(file)) continue // a former slug: only nginx answers it
  stubs++
  const html = readFileSync(file, 'utf8')
  if (!html.includes(`<link rel="canonical" href="${to}"`)) fail(`${from}: canonical is not ${to}`)
  if (!html.includes(`content="0; url=${to}"`)) fail(`${from}: meta refresh is not ${to}`)
  if (!/<meta name="robots" content="noindex, follow"/.test(html)) fail(`${from}: not noindex`)
}

const sitemap = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f)).map((f) => readFileSync(join(DIST, f), 'utf8')).join('')
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
for (const p of locs) if (moved.has(p)) fail(`sitemap lists ${p}`)

let links = 0
for (const file of pages) {
  const html = readFileSync(file, 'utf8')
  for (const m of html.matchAll(/href="([^"#?]*)[^"]*"/g)) {
    const href = m[1]
    if (!href.startsWith('/') && !href.startsWith('https://zeesgames.com/')) continue
    links++
    const path = href.replace('https://zeesgames.com', '')
    if (moved.has(path)) fail(`${file} links to moved ${path}`)
  }
}

const kept = pages.filter((f) => /\/maps\/index\.html$/.test(f) && !moved.has(f.slice(DIST.length).replace(/index\.html$/, '')))
for (const f of kept) if (!readFileSync(f, 'utf8').includes('data-forms')) fail(`${f} is not a full maps page`)

console.log(`moved.map: ${moved.size} paths; fallback pages: ${stubs}; kept maps pages: ${kept.length}; sitemap: ${locs.length} urls; internal links checked: ${links}`)

if (base) {
  let ok = 0
  for (const [from, to] of moved) {
    const res = await fetch(`${base}${from}?ref=test`, { redirect: 'manual' })
    const loc = res.headers.get('location')
    if (res.status !== 301 || loc !== `${to}?ref=test`) fail(`GET ${from}: ${res.status} ${loc}`)
    else ok++
  }
  const keptPath = kept[0]?.slice(DIST.length).replace(/index\.html$/, '')
  if (keptPath) {
    const res = await fetch(`${base}${keptPath}`, { redirect: 'manual' })
    if (res.status !== 200) fail(`GET ${keptPath}: ${res.status}, want 200`)
    else ok++
  }
  console.log(`nginx: ${ok} of ${moved.size + (keptPath ? 1 : 0)} answers right`)
}

console.log(failures ? `${failures} failures` : 'ok')
process.exit(failures ? 1 : 0)
