// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { copyFile, mkdir, writeFile } from 'node:fs/promises'
import { MovedPagePaths, NginxMovedMap } from './src/lib/redirects'

// Mirrors LOCALES / LANG_TAG in src/i18n/config.ts (English has no prefix).
const LOCALES = { en: 'en', es: 'es', fr: 'fr', de: 'de', ru: 'ru', nl: 'nl', ja: 'ja', zh: 'zh-CN', pt: 'pt' }

// The site's own public origin. Mirrors `SITE_URL` in `src/lib/site.ts`; Astro
// needs it here too, or it refuses to emit a sitemap.
const SITE = (process.env.PUBLIC_SITE_URL ?? 'https://zeesgames.com').replace(/\/+$/, '')

// The game and maps pages that moved to a game's own site (src/lib/redirects.ts).
const MOVED = MovedPagePaths()

export default defineConfig({
  site: SITE,
  // Astro's compressor drops the space between text and a following inline
  // element on a new line, gluing words together.
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ['x-tmc-dev01', 'tmcdev.net'] },
  },
  integrations: [
    react(),
    // Pages that moved to a game's own site are 301s, not pages: keep them out.
    sitemap({ i18n: { defaultLocale: 'en', locales: LOCALES }, filter: (page) => !MOVED.has(new URL(page).pathname) }),
    // Crawlers and people look for /sitemap.xml; the integration only writes
    // sitemap-index.xml, so publish the same index under both names. Runs
    // after sitemap() because build hooks run in integration order.
    {
      name: 'sitemap-xml',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir))
        },
      },
    },
    // nginx's table of moved pages (old path -> the game's own site), from the
    // same content the pages are built from, so it cannot drift. Written beside
    // dist/, not into it: it is server config, not a file to serve. The image
    // copies it to /etc/nginx/moved.map (Dockerfile, nginx.conf.template).
    {
      name: 'nginx-moved-map',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const out = new URL('../dist-nginx/', dir)
          await mkdir(out, { recursive: true })
          await writeFile(new URL('moved.map', out), NginxMovedMap())
        },
      },
    },
  ],
})
