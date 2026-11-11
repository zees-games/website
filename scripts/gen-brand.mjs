/**
 * Renders the site's icons and Open Graph banners from the code below.
 *
 *   npm run brand        (= node scripts/gen-brand.mjs; needs Playwright's Chromium:
 *                         `npx playwright install chromium` once)
 *   npm run brand -- <slug>...   only those games' banners (no icons, no site.jpg)
 *
 * Writes, all committed:
 *   public/favicon.svg, public/favicon.ico (16/32/48), public/apple-touch-icon.png,
 *   public/icon-192.png, public/icon-512.png, public/icon-maskable-512.png,
 *   public/og/site.jpg, public/og/<slug>.jpg (1200x630, one per game)
 *
 * The banners are drawn in a real browser so they use the site's own fonts
 * (Space Grotesk from @fontsource-variable) and the same neon look as the
 * pages. Their text is only proper nouns and the address, so one image serves
 * all nine locales; a game with its own site (HOTSPOT_ART) also carries that
 * site's English tagline, as its own banners do.
 */
import { chromium } from 'playwright'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { GAMES } from '../src/data/games.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PUBLIC = join(ROOT, 'public')
const C = { ink: '#05060f', night: '#0a0d1f', panel: '#10142b', line: '#232a52', text: '#e7ecff', muted: '#9aa3c7', cyan: '#2ee6ff', amber: '#ffad33', violet: '#9b6bff' }

/**
 * The mark: a neon-tube Z over a wireframe floor, with the amber apostrophe of
 * "Zee's" as the spark. `full` fills the square edge to edge (iOS and maskable
 * icons are cut to shape by the OS); `scale` shrinks the symbol into a safe zone.
 */
function IconSvg({ full = false, scale = 1 } = {}) {
  const s = (64 - 64 * scale) / 2
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.panel}"/><stop offset="1" stop-color="${C.ink}"/></linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.violet}" stop-opacity="0"/><stop offset="1" stop-color="${C.violet}" stop-opacity=".55"/></linearGradient>
    <filter id="glow" filterUnits="userSpaceOnUse" x="0" y="0" width="64" height="64"><feGaussianBlur stdDeviation="2.2"/></filter>
    <clipPath id="sq"><rect width="64" height="64" rx="${full ? 0 : 14}"/></clipPath>
  </defs>
  <g clip-path="url(#sq)">
    <rect width="64" height="64" fill="url(#bg)"/>
    <g stroke="url(#floor)" stroke-width=".8" fill="none">
      <path d="M0 50H64M0 55.5H64M0 62H64"/>
      <path d="M32 44L-8 64M32 44L12 64M32 44L32 64M32 44L52 64M32 44L72 64"/>
    </g>
  </g>
  ${full ? '' : `<rect x=".5" y=".5" width="63" height="63" rx="13.5" fill="none" stroke="${C.line}"/>`}
  <g transform="translate(${s} ${s}) scale(${scale})" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 18H43L17 46H44" stroke="${C.cyan}" stroke-width="9" opacity=".75" filter="url(#glow)"/>
    <path d="M16 18H43L17 46H44" stroke="${C.cyan}" stroke-width="5.5"/>
    <path d="M16 18H43L17 46H44" stroke="#d6fcff" stroke-width="1.6"/>
    <path d="M52.5 10L50 17.5" stroke="${C.amber}" stroke-width="6" opacity=".75" filter="url(#glow)"/>
    <path d="M52.5 10L50 17.5" stroke="${C.amber}" stroke-width="4"/>
  </g>
</svg>`
}

/**
 * The games that have their own site (a TMC hotspot) use that site's mark and
 * banner look, so a link shared from here previews the same as one shared from
 * the site. Copied from website-hs-games (src/lib/marks.ts: tile, scene, grid,
 * motif, extras; src/lib/games.ts: theme accent, bgHue, tagline; the domain);
 * keep in step with it by hand.
 *
 * - Prop Hunt: an armchair with googly eyes (the props are the furniture).
 * - Playlot: toy blocks with a ball on top (a sandbox to build and break).
 * - Fatal Contact: a crosshair around a muzzle flash (a fast arena shooter).
 * - Airdrift: a paper dart gliding over a surf ramp (surf the ramps).
 */
const INK_PH = '#3b0a40'
const INK_PL = '#1a2e05'
const HOTSPOT_ART = {
  'prop-hunt': {
    // Its accent (#c026d3) is too dark for the tagline on this backdrop: the tagline uses the grid colour.
    domain: 'prophunt.net', accent: '#c026d3', accentText: '#e879f9', bgHue: 292, tagline: 'Hide as anything. Hunt everything.',
    tile: ['#e879f9', '#86198f'], scene: ['#14041a', '#4a0d52'], grid: '#e879f9',
    motif: [
      `<g stroke="${INK_PH}" stroke-width="2.5" stroke-linejoin="round">`,
      '<rect x="15" y="11" width="34" height="31" rx="9" fill="#fbcfe8"/>',
      '<rect x="15" y="36" width="34" height="11" rx="3" fill="#f9a8d4"/>',
      '<rect x="7" y="27" width="13" height="22" rx="5.5" fill="#fbcfe8"/>',
      '<rect x="44" y="27" width="13" height="22" rx="5.5" fill="#fbcfe8"/>',
      '<path d="M13 49.5v5M51 49.5v5" stroke-width="3.5" stroke-linecap="round"/>',
      '</g>',
      `<circle cx="24.5" cy="22.5" r="7.2" fill="#fff" stroke="${INK_PH}" stroke-width="2"/>`,
      `<circle cx="39.5" cy="22.5" r="7.2" fill="#fff" stroke="${INK_PH}" stroke-width="2"/>`,
      '<circle cx="26.4" cy="24.6" r="3.6" fill="#1a0620"/>',
      '<circle cx="37.4" cy="20.6" r="3.6" fill="#1a0620"/>',
      `<path d="M27.5 32.5q4.5 3.5 9 0" fill="none" stroke="${INK_PH}" stroke-width="2.2" stroke-linecap="round"/>`,
    ].join(''),
    // The hunter's torch sweeping the room.
    extras: '<path d="M1200 0L1200 120L760 600L620 600Z" fill="#fff" opacity="0.07"/><ellipse cx="912" cy="424" rx="230" ry="26" fill="#000" opacity="0.35"/>',
  },
  playlot: {
    domain: 'playlot.app', accent: '#84cc16', bgHue: 150, tagline: 'Build, break and play together.',
    tile: ['#bef264', '#4d7c0f'], scene: ['#050f07', '#143a1c'], grid: '#a3e635',
    motif: [
      `<g stroke="${INK_PL}" stroke-width="2.5" stroke-linejoin="round">`,
      '<rect x="10" y="35" width="21" height="20" rx="2.5" fill="#ef4444"/>',
      '<rect x="33" y="35" width="21" height="20" rx="2.5" fill="#3b82f6"/>',
      '<circle cx="32" cy="22.5" r="11" fill="#facc15"/>',
      '</g>',
      '<path d="M25.5 18.5a7.5 7.5 0 0 1 5-4.2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity="0.8"/>',
      '<path d="M14 39h6M37 39h6" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.55"/>',
    ].join(''),
    // A traffic cone on the lot.
    extras: [
      `<g transform="translate(1110 440)" stroke="${INK_PL}" stroke-width="4" stroke-linejoin="round">`,
      '<path d="M-40 120h80l-4-14h-72z" fill="#f97316"/>',
      '<path d="M-30 106l22-106h16l22 106z" fill="#f97316"/>',
      '<path d="M-19 60h38l-4-20h-30z" fill="#fff" stroke="none"/>',
      '</g>',
    ].join(''),
  },
  'fatal-contact': {
    domain: 'fatalcontact.net', accent: '#f97316', bgHue: 18, tagline: 'Fast frags. No second chances.',
    tile: ['#2b1208', '#080504'], scene: ['#0a0503', '#2e1207'], grid: '#f97316',
    motif: [
      '<circle cx="32" cy="32" r="17" fill="none" stroke="#f97316" stroke-width="4.5"/>',
      '<path d="M32 6v13M32 45v13M6 32h13M45 32h13" stroke="#f97316" stroke-width="4.5" stroke-linecap="round"/>',
      '<path d="M32 22.5l2.6 6.9 6.9 2.6-6.9 2.6L32 41.5l-2.6-6.9L22.5 32l6.9-2.6z" fill="#fde68a"/>',
    ].join(''),
    // Tracers crossing the arena and a crate.
    extras: [
      '<path d="M620 610L790 420" stroke="#fdba74" stroke-width="4" stroke-linecap="round" opacity="0.5"/>',
      '<path d="M1200 300L1110 230" stroke="#fdba74" stroke-width="4" stroke-linecap="round" opacity="0.45"/>',
      '<path d="M1060 480h120v120h-120z" fill="#431407" stroke="#f97316" stroke-width="4"/>',
      '<path d="M1060 480l120 120M1180 480l-120 120" stroke="#f97316" stroke-width="3" opacity="0.6"/>',
    ].join(''),
  },
  airdrift: {
    domain: 'airdrift.net', accent: '#06b6d4', bgHue: 195, tagline: 'Surf the ramps. Beat the clock.',
    tile: ['#38bdf8', '#082f49'], scene: ['#020b14', '#0b3a52'], grid: '#22d3ee',
    motif: [
      '<path d="M5 58L37 37L41 58Z" fill="#a5f3fc"/>',
      '<path d="M37 37L60 58L41 58Z" fill="#0891b2"/>',
      '<path d="M5 41Q13 31 24 29.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity="0.8"/>',
      '<path d="M55 9L13 22L28 27Z" fill="#fff"/>',
      '<path d="M55 9L28 27L33 37Z" fill="#cffafe"/>',
      '<path d="M55 9L28 27" stroke="#0c4a6e" stroke-width="1.4" stroke-linecap="round"/>',
    ].join(''),
    // Speed lines behind the dart.
    extras: '<path d="M640 200H760M610 250H720M660 300H780" stroke="#a5f3fc" stroke-width="5" stroke-linecap="round" opacity="0.3"/>',
  },
}

/** A hotspot game's mark on its rounded 64-unit tile (website-hs-games MarkSvg). */
function MarkSvg(art) {
  const [a, b] = art.tile
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><defs><linearGradient id="t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#t)"/>${art.motif}</svg>`
}

/** The hotspot banner's art: backdrop, floor grid to a vanishing point, props, the big mark on the right (website-hs-games BannerSvg). */
function SceneSvg(art) {
  const [a, b] = art.scene
  const lines = []
  for (let i = -8; i <= 8; i++) lines.push(`M900 300L${900 + i * 140} 630`)
  for (const y of [330, 370, 425, 500, 600]) lines.push(`M560 ${y}H1200`)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630"><defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0.35" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
<linearGradient id="fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0.45" stop-color="${a}"/><stop offset="0.62" stop-color="${a}" stop-opacity="0"/></linearGradient>
</defs><rect width="1200" height="630" fill="url(#bg)"/>
<path d="${lines.join('')}" stroke="${art.grid}" stroke-width="2" opacity="0.22" fill="none"/>
${art.extras}<rect width="1200" height="630" fill="url(#fade)"/>
<g transform="translate(720 90) scale(6)">${art.motif}</g></svg>`
}

/** website-hs-games HslHex: the muted text colour of a game's theme. */
function HslHex(h, s, l) {
  const sat = s / 100, lig = l / 100
  const k = (n) => (n + h / 30) % 12
  const a = sat * Math.min(lig, 1 - lig)
  const f = (n) => lig - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
  const hex = (x) => Math.round(x * 255).toString(16).padStart(2, '0')
  return `#${hex(f(0))}${hex(f(8))}${hex(f(4))}`
}

const svgData = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`

/** An .ico holding PNG images (valid since Vista; every browser reads it). */
function Ico(pngs) {
  const head = Buffer.alloc(6 + 16 * pngs.length)
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4)
  let offset = head.length
  pngs.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i
    head.writeUInt8(size >= 256 ? 0 : size, e); head.writeUInt8(size >= 256 ? 0 : size, e + 1)
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6)
    head.writeUInt32LE(data.length, e + 8); head.writeUInt32LE(offset, e + 12)
    offset += data.length
  })
  return Buffer.concat([head, ...pngs.map((p) => p.data)])
}

const font = (pkg, file) => pathToFileURL(join(ROOT, 'node_modules/@fontsource-variable', pkg, 'files', file)).href
const asset = (p) => pathToFileURL(join(PUBLIC, p)).href

const BASE_CSS = `
@font-face { font-family: 'SG'; src: url('${font('space-grotesk', 'space-grotesk-latin-wght-normal.woff2')}') format('woff2'); font-weight: 300 700; }
@font-face { font-family: 'DM'; src: url('${font('dm-sans', 'dm-sans-latin-wght-normal.woff2')}') format('woff2'); font-weight: 100 1000; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; background: ${C.ink}; color: ${C.text}; font-family: 'DM', sans-serif; }
.neon-cyan { color: ${C.cyan}; text-shadow: 0 0 8px ${C.cyan}b0, 0 0 34px ${C.cyan}70; }
.neon-amber { color: ${C.amber}; text-shadow: 0 0 8px ${C.amber}b0, 0 0 34px ${C.amber}70; }
.display { font-family: 'SG', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
.floor { position: absolute; left: -50%; right: -50%; bottom: -40%; height: 95%; transform: perspective(420px) rotateX(62deg); transform-origin: 50% 0;
  background-image: linear-gradient(to right, ${C.violet}60 2px, transparent 2px), linear-gradient(to bottom, ${C.cyan}45 2px, transparent 2px);
  background-size: 64px 64px; -webkit-mask-image: linear-gradient(to bottom, transparent, #000 45%); }
.mark { width: 100%; height: 100%; display: block; }`

const ICON_DATA = `data:image/svg+xml;base64,${Buffer.from(IconSvg()).toString('base64')}`

function SiteBanner() {
  const fan = ['airdrift', 'deathrun', 'wipeout']
  const chips = GAMES.filter((g) => g.server).map((g) => g.title)
  return `<!doctype html><html><head><style>${BASE_CSS}
  .glow1 { position:absolute; width:720px; height:720px; left:-200px; top:-260px; border-radius:50%; background:${C.violet}38; filter:blur(120px); }
  .glow2 { position:absolute; width:560px; height:560px; right:-120px; top:40px; border-radius:50%; background:${C.cyan}26; filter:blur(120px); }
  .left { position:absolute; left:72px; top:96px; width:620px; }
  .card { position:absolute; width:420px; aspect-ratio:16/10; border-radius:20px; overflow:hidden; border:2px solid; background-size:cover; background-position:center; }
  .chip { display:inline-block; padding:8px 16px; margin:0 10px 12px 0; border:1.5px solid ${C.line}; border-radius:999px; background:${C.night}d0; font-size:21px; font-weight:600; color:${C.text}; }
  </style></head><body>
  <div class="glow1"></div><div class="glow2"></div><div class="floor"></div>
  <div class="left">
    <img src="${ICON_DATA}" style="width:112px;height:112px;filter:drop-shadow(0 0 24px ${C.cyan}60)">
    <h1 class="display" style="font-size:92px;line-height:1;margin-top:34px;white-space:nowrap"><span class="neon-cyan">Zee's</span> <span class="neon-amber">Games</span></h1>
    <div style="margin-top:38px">${chips.map((c) => `<span class="chip">${c}</span>`).join('')}<span class="chip" style="color:${C.muted}">+${GAMES.length - chips.length}</span></div>
    <p class="display" style="margin-top:22px;font-size:26px;font-weight:500;color:${C.muted};letter-spacing:.01em">zeesgames.com</p>
  </div>
  ${fan.map((slug, i) => {
    const color = [C.violet, C.amber, C.cyan][i]
    const [x, y, r] = [[748, 64, -8], [790, 200, 4], [730, 346, -3]][i]
    return `<div class="card" style="left:${x}px;top:${y}px;transform:rotate(${r}deg);border-color:${color};box-shadow:0 0 0 1px ${color}50, 0 0 46px -6px ${color}b0, 0 30px 60px -20px #000;background-image:url('${asset(`images/games/${slug}.webp`)}')"></div>`
  }).join('')}
  </body></html>`
}

function GameBanner(game) {
  const accent = C[game.accent]
  return `<!doctype html><html><head><style>${BASE_CSS}
  .cover { position:absolute; inset:0; background:url('${asset(`images/games/${game.slug}.webp`)}') center/cover; }
  /* Light on the left: a heavy shade hid Fatal Contact's opponent and Hungario's rival. */
  .shade { position:absolute; inset:0; background:linear-gradient(90deg, ${C.ink}cc 0%, ${C.ink}66 30%, ${C.ink}00 55%), linear-gradient(0deg, ${C.ink}d0 0%, transparent 40%); }
  </style></head><body>
  <div class="cover"></div><div class="shade"></div>
  <div style="position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:18px">
    <img src="${ICON_DATA}" style="width:64px;height:64px">
    <span class="display" style="font-size:38px"><span class="neon-cyan">Zee's</span> <span class="neon-amber">Games</span></span>
  </div>
  <div style="position:absolute;left:72px;bottom:150px;width:760px">
    <div style="width:96px;height:8px;border-radius:4px;background:${accent};box-shadow:0 0 22px ${accent}"></div>
    <h1 class="display" style="font-size:${game.title.length > 14 ? 92 : 116}px;line-height:1;margin-top:28px;text-shadow:0 2px 6px #000, 0 4px 34px #000">${game.title}</h1>
  </div>
  <p class="display" style="position:absolute;left:72px;bottom:72px;font-size:30px;font-weight:500;color:${accent};text-shadow:0 0 18px ${accent}80">zeesgames.com/${game.slug}</p>
  </body></html>`
}

/** A hotspot game's banner, laid out like its site's own (website-hs-games OgImage): scene and mark right; brand, name, tagline, domain left. */
function HotspotBanner(game, art) {
  const muted = HslHex(art.bgHue, 20, 78)
  return `<!doctype html><html><head><style>${BASE_CSS}
  .col { position:absolute; left:0; top:0; width:660px; height:100%; padding:64px 0 60px 72px; display:flex; flex-direction:column; justify-content:space-between; }
  </style></head><body>
  <img src="${svgData(SceneSvg(art))}" style="position:absolute;inset:0;width:1200px;height:630px">
  <div class="col">
    <div style="display:flex;align-items:center;gap:18px;font-size:30px;color:${muted}">
      <img src="${svgData(MarkSvg(art))}" style="width:64px;height:64px"><span class="display" style="font-weight:600;letter-spacing:0">Zee's Games</span>
    </div>
    <div>
      <h1 class="display" style="font-size:${game.title.length > 10 ? 84 : 100}px;line-height:1;white-space:nowrap">${game.title}</h1>
      <p style="margin-top:22px;font-size:40px;line-height:1.2;font-weight:500;text-wrap:balance;color:${art.accentText ?? art.accent}">${art.tagline}</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;font-size:26px;color:${muted}">
      <span style="color:#fff;font-size:30px">${art.domain}</span>
      <span>Free, open source, plays in your browser</span>
    </div>
  </div>
  </body></html>`
}

const only = process.argv.slice(2)
for (const slug of only) if (!GAMES.some((g) => g.slug === slug)) throw new Error(`unknown game ${slug}`)

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })

  async function Png(svg, size) {
    await page.setViewportSize({ width: size, height: size })
    await page.setContent(`<html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" style="width:${size}px;height:${size}px;display:block"></body></html>`)
    return page.screenshot({ omitBackground: true, type: 'png' })
  }

  if (!only.length) {
    await writeFile(join(PUBLIC, 'favicon.svg'), IconSvg() + '\n')
    const ico = []
    for (const size of [16, 32, 48]) ico.push({ size, data: await Png(IconSvg(), size) })
    await writeFile(join(PUBLIC, 'favicon.ico'), Ico(ico))
    await writeFile(join(PUBLIC, 'apple-touch-icon.png'), await Png(IconSvg({ full: true, scale: 0.86 }), 180))
    await writeFile(join(PUBLIC, 'icon-192.png'), await Png(IconSvg(), 192))
    await writeFile(join(PUBLIC, 'icon-512.png'), await Png(IconSvg(), 512))
    await writeFile(join(PUBLIC, 'icon-maskable-512.png'), await Png(IconSvg({ full: true, scale: 0.72 }), 512))
  }

  await mkdir(join(PUBLIC, 'og'), { recursive: true })
  await page.setViewportSize({ width: 1200, height: 630 })
  // Loaded from a file, not setContent: only a file:// page may load the
  // file:// covers and fonts.
  const tmp = await mkdtemp(join(tmpdir(), 'zees-brand-'))
  async function Banner(html, file) {
    const src = join(tmp, 'banner.html')
    await writeFile(src, html)
    await page.goto(pathToFileURL(src).href, { waitUntil: 'load' })
    await page.evaluate(() => document.fonts.ready)
    await writeFile(join(PUBLIC, 'og', file), await page.screenshot({ type: 'jpeg', quality: 86 }))
  }
  const games = only.length ? GAMES.filter((g) => only.includes(g.slug)) : GAMES
  if (!only.length) await Banner(SiteBanner(), 'site.jpg')
  for (const game of games) {
    const art = HOTSPOT_ART[game.slug]
    await Banner(art ? HotspotBanner(game, art) : GameBanner(game), `${game.slug}.jpg`)
  }
  await rm(tmp, { recursive: true })
  console.log(only.length ? `wrote ${games.length} banners` : `wrote icons and ${GAMES.length + 1} banners`)
} finally {
  await browser.close()
}

