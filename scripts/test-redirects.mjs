#!/usr/bin/env node
/*
 * Checks the maps pages that moved to a game's own site (src/lib/redirects.ts)
 * against a build: `node scripts/test-redirects.mjs` after `npm run build`.
 *
 * - dist-nginx/moved.map: every entry is a maps path and an absolute https URL
 *   on another host, no path twice, no target that is itself a moved path;
 * - every moved page the build wrote is the fallback: noindex, its canonical
 *   and meta refresh both the map's target, the refresh only in `noscript`
 *   and the script forwarding `location.hash` (as a 301 does);
 * - the sitemap and every page's links leave the moved paths out;
 * - the maps pages of games without a site are still full pages;
 * - every internal link on every page names a file the build wrote, a moved
 *   path, or a renamed slug nginx rewrites (the 404 page's language menu
 *   once linked to nine `/<lang>/404` pages that do not exist).
 *
 * With a base URL (`node scripts/test-redirects.mjs http://127.0.0.1:8080`,
 * the image running) it also asks nginx for every moved path: one 301 to the
 * target, query string kept and no fragment in `Location` (so the browser
 * keeps the visitor's `#<map id>`), a 200 for a maps page that did not move,
 * and a 404 for a missing page whose language menu links to the home pages.
 * It works against the live host too (`https://zeesgames.com`), given a
 * `dist/` built from the deployed commit.
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
  if (!html.includes(`<noscript><meta http-equiv="refresh" content="0; url=${to}"></noscript>`)) fail(`${from}: meta refresh is not ${to} inside noscript`)
  if (!html.includes('location.hash')) fail(`${from}: script does not forward location.hash`)
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

// Renamed slugs answer through nginx's `rewrite` lines (docker/nginx.conf.template).
const rewritten = /^(\/(es|fr|de|ru|nl|ja|zh|pt))?\/(arena|fatalcontact|g2gfast|playground)(\/|$)/
let broken = 0
const exists = (p) => [p, join(p, 'index.html'), `${p}.html`].some((f) => existsSync(join(DIST, f)) && !f.endsWith('/'))
for (const file of pages) {
  const html = readFileSync(file, 'utf8')
  const seen = new Set()
  for (const m of html.matchAll(/href="([^"#?]*)[^"]*"/g)) {
    let path = m[1].replace('https://zeesgames.com', '')
    if (!path.startsWith('/') || path.startsWith('//') || seen.has(path)) continue
    seen.add(path)
    try { path = decodeURI(path) } catch {}
    if (moved.has(path) || rewritten.test(path) || exists(path)) continue
    broken++
    fail(`${file} links to missing ${path}`)
  }
}
if (broken) console.error(`${broken} broken internal links`)

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
  const missing = await fetch(`${base}/es/no-such-page-${Date.now()}`, { redirect: 'manual' })
  const body = await missing.text()
  if (missing.status !== 404) fail(`GET a missing page: ${missing.status}, want 404`)
  else if (/href="(\/[a-z]{2})?\/404/.test(body)) fail('the 404 page links to a /404 page')
  else ok++
  console.log(`nginx: ${ok} of ${moved.size + (keptPath ? 1 : 0) + 1} answers right`)
}

console.log(failures ? `${failures} failures` : 'ok')
process.exit(failures ? 1 : 0)
