// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// Mirrors LOCALES / LANG_TAG in src/i18n/config.ts (English has no prefix).
const LOCALES = { en: 'en', es: 'es', fr: 'fr', de: 'de', ru: 'ru', nl: 'nl', ja: 'ja', zh: 'zh-CN', pt: 'pt' }

// The site's own public origin. Mirrors `SITE_URL` in `src/lib/site.ts`; Astro
// needs it here too, or it refuses to emit a sitemap.
const SITE = (process.env.PUBLIC_SITE_URL ?? 'https://zeesgames.com').replace(/\/+$/, '')

export default defineConfig({
  site: SITE,
  // Astro's compressor drops the space between text and a following inline
  // element on a new line, gluing words together.
  compressHTML: false,
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ['x-tmc-dev01', 'tmcdev.net'] },
  },
  integrations: [react(), sitemap({ i18n: { defaultLocale: 'en', locales: LOCALES } })],
})
