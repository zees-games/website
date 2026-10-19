import type { APIRoute } from 'astro'
import { UseI18n } from '../i18n'

/** The install manifest; the icons come from `npm run brand`. */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Zee's Games",
      short_name: "Zee's Games",
      description: UseI18n('en').t.meta.siteDescription,
      start_url: '/',
      display: 'browser',
      background_color: '#05060f',
      theme_color: '#05060f',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  )
