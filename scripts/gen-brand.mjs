/**
 * Renders the site's icons and Open Graph banners from the code below.
 *
 *   npm run brand        (= node scripts/gen-brand.mjs; needs Playwright's Chromium:
 *                         `npx playwright install chromium` once)
 *
 * Writes, all committed:
 *   public/favicon.svg, public/favicon.ico (16/32/48), public/apple-touch-icon.png,
 *   public/icon-192.png, public/icon-512.png, public/icon-maskable-512.png,
 *   public/og/site.jpg, public/og/<slug>.jpg (1200x630, one per game)
 *
 * The banners are drawn in a real browser so they use the site's own fonts
 * (Space Grotesk from @fontsource-variable) and the same neon look as the
 * pages. Their text is only proper nouns and the address, so one image serves
 * all nine locales.
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
  const fan = ['g2gfast', 'deathrun', 'wipeout']
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
  .shade { position:absolute; inset:0; background:linear-gradient(90deg, ${C.ink} 0%, ${C.ink}e8 32%, ${C.ink}70 62%, ${C.ink}10 100%), linear-gradient(0deg, ${C.ink}e0 0%, transparent 45%); }
  </style></head><body>
  <div class="cover"></div><div class="shade"></div>
  <div style="position:absolute;left:72px;top:64px;display:flex;align-items:center;gap:18px">
    <img src="${ICON_DATA}" style="width:64px;height:64px">
    <span class="display" style="font-size:38px"><span class="neon-cyan">Zee's</span> <span class="neon-amber">Games</span></span>
  </div>
  <div style="position:absolute;left:72px;bottom:150px;width:760px">
    <div style="width:96px;height:8px;border-radius:4px;background:${accent};box-shadow:0 0 22px ${accent}"></div>
    <h1 class="display" style="font-size:${game.title.length > 14 ? 92 : 116}px;line-height:1;margin-top:28px;text-shadow:0 4px 30px #000c">${game.title}</h1>
  </div>
  <p class="display" style="position:absolute;left:72px;bottom:72px;font-size:30px;font-weight:500;color:${accent};text-shadow:0 0 18px ${accent}80">zeesgames.com/${game.slug}</p>
  </body></html>`
}

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })

  async function Png(svg, size) {
    await page.setViewportSize({ width: size, height: size })
    await page.setContent(`<html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" style="width:${size}px;height:${size}px;display:block"></body></html>`)
    return page.screenshot({ omitBackground: true, type: 'png' })
  }

  await writeFile(join(PUBLIC, 'favicon.svg'), IconSvg() + '\n')
  const ico = []
  for (const size of [16, 32, 48]) ico.push({ size, data: await Png(IconSvg(), size) })
  await writeFile(join(PUBLIC, 'favicon.ico'), Ico(ico))
  await writeFile(join(PUBLIC, 'apple-touch-icon.png'), await Png(IconSvg({ full: true, scale: 0.86 }), 180))
  await writeFile(join(PUBLIC, 'icon-192.png'), await Png(IconSvg(), 192))
  await writeFile(join(PUBLIC, 'icon-512.png'), await Png(IconSvg(), 512))
  await writeFile(join(PUBLIC, 'icon-maskable-512.png'), await Png(IconSvg({ full: true, scale: 0.72 }), 512))

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
  await Banner(SiteBanner(), 'site.jpg')
  for (const game of GAMES) await Banner(GameBanner(game), `${game.slug}.jpg`)
  await rm(tmp, { recursive: true })
  console.log(`wrote icons and ${GAMES.length + 1} banners`)
} finally {
  await browser.close()
}

