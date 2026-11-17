#!/usr/bin/env node
// Coverage guard for Umami events. Every <a>, <button>, <summary>, <form> and
// <select> tag in src must carry an event (Ev(...), GameSiteEv(...),
// data-umami-event) or an explicit `umami-ignore: <reason>` comment on the line
// above. A file with a click/submit/change/input listener must call track() or
// hold `umami-ignore-file: <reason>`. Every name in UMAMI_EVENTS must be fired
// somewhere, and every name fired must be registered.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const files = []
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(astro|ts)$/.test(f)) files.push(p)
  }
}
walk(join(root, 'src'))

const TAGS = /<(a|button|summary|form|select)(?=[\s>])/g
const EVENT = /\bEv\(|\bEvHtml\(|GameSiteEv\(|data-umami-event|umami-ignore:/
const problems = []

// End of the opening tag starting at `i`: the first `>` outside quotes and braces.
function TagEnd(s, i) {
  let depth = 0
  let q = ''
  for (; i < s.length; i++) {
    const c = s[i]
    if (q) {
      if (c === q) q = ''
      continue
    }
    if (c === '{') depth++
    else if (c === '}') depth--
    else if ((c === '"' || c === "'") && depth === 0) q = c
    else if (c === '>' && depth === 0 && s[i - 1] !== '=') return i
  }
  return s.length
}

const fired = new Set()
let registered = []
for (const file of files) {
  const rel = relative(root, file)
  const src = readFileSync(file, 'utf8')
  if (rel === 'src/lib/umami.ts') {
    registered = [...src.matchAll(/^\s+'([a-z_]+)',$/gm)].map((m) => m[1])
    for (const m of src.matchAll(/\bEv\(\s*'([a-z_]+)'/g)) fired.add(m[1])
    continue
  }
  if (rel.startsWith('src/i18n/')) continue
  for (const m of src.matchAll(/(?:\bEv|\bEvHtml|\bGameSiteEv|\btrack)\(\s*'([a-z_]+)'/g)) fired.add(m[1])
  for (const m of src.matchAll(/data-umami-event="([a-z_]+)"/g)) fired.add(m[1])
  for (const m of src.matchAll(TAGS)) {
    const end = TagEnd(src, m.index)
    const tag = src.slice(m.index, end + 1)
    const lineStart = src.lastIndexOf('\n', m.index - 1)
    const prev = src.slice(src.lastIndexOf('\n', lineStart - 1) + 1, lineStart)
    if (EVENT.test(tag) || /umami-ignore:/.test(prev)) continue
    const line = src.slice(0, m.index).split('\n').length
    problems.push(`${rel}:${line}: <${m[1]}> has no event (Ev() / data-umami-event / umami-ignore: reason)`)
  }
  if (/addEventListener\(\s*'(click|submit|change|input)'/.test(src) && !/\btrack\(|umami-ignore-file:/.test(src)) {
    problems.push(`${rel}: event listener but no track() call (or umami-ignore-file: reason)`)
  }
}
for (const n of registered) if (!fired.has(n)) problems.push(`event '${n}' is registered but nothing fires it`)
for (const n of fired) if (!registered.includes(n)) problems.push(`event '${n}' is fired but not in UMAMI_EVENTS`)

if (problems.length) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log(`umami guard ok: ${registered.length} events`)
