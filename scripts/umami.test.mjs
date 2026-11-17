// Run with: npm run test:umami (node strips the types of src/lib/umami.ts).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { Ev, EvHtml, LengthBucket, LocaleFromPath, track, UMAMI_EVENTS } from '../src/lib/umami.ts'

test('track is a no-op without window or umami and never throws', () => {
  assert.doesNotThrow(() => track('play_now', { game: 'x' }))
  globalThis.window = { location: { pathname: '/fr/x' }, umami: undefined, addEventListener() {} }
  globalThis.document = { readyState: 'complete' }
  assert.doesNotThrow(() => track('play_now'))
  window.umami = { track() { throw new Error('boom') } }
  assert.doesNotThrow(() => track('play_now'))
  const seen = []
  window.umami = { track: (n, d) => seen.push([n, d]) }
  track('discord', { place: 'home' })
  assert.deepEqual(seen, [['discord', { path: '/fr/x', locale: 'fr', place: 'home' }]])
  delete globalThis.window
  delete globalThis.document
})

test('event names are snake_case and unique', () => {
  for (const n of UMAMI_EVENTS) assert.match(n, /^[a-z]+(_[a-z]+)*$/)
  assert.equal(new Set(UMAMI_EVENTS).size, UMAMI_EVENTS.length)
})

test('Ev and EvHtml carry data attributes, skip undefined, escape', () => {
  assert.deepEqual(Ev('nav_link', { place: 'home', to: undefined }), { 'data-umami-event': 'nav_link', 'data-umami-event-place': 'home' })
  assert.equal(EvHtml('nav_link', { place: 'a"b<' }), ' data-umami-event="nav_link" data-umami-event-place="a&quot;b&lt;"')
})

test('a typed query only ever becomes a length bucket', () => {
  assert.equal(LengthBucket('  '), '0')
  assert.equal(LengthBucket('de_'), '1-3')
  assert.equal(LengthBucket('surf_utop'), '9+')
  assert.doesNotMatch(LengthBucket('someone@example.com'), /@/)
})

test('LocaleFromPath', () => {
  assert.equal(LocaleFromPath('/de/servers'), 'de')
  assert.equal(LocaleFromPath('/servers'), 'en')
})
