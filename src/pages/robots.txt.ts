import type { APIRoute } from 'astro'
import { SITE_URL } from '../lib/site'

/** Everything is public; the sitemap index lists every page in every locale. */
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
