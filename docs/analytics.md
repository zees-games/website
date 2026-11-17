# Analytics (Umami custom events)

Umami is configured when the container starts, not at build time. `docker/40-umami.sh` swaps the `<!--umami-->` marker for the script tag. With either variable unset or malformed there is no analytics at all, and `npm run dev` never has any.

## Env vars (set in `.env`, placeholders only here)
- `UMAMI_SRC` - https URL of the Umami `script.js`
- `UMAMI_WEBSITE_ID` - the website UUID

## Code
- `src/lib/umami.ts` - the one registry (`UMAMI_EVENTS`) and helpers: `track()` for scripts (never throws, waits for page load, no-op without Umami), `Ev()` for link and button attributes, `EvHtml()` for links built as HTML strings, `GameSiteEv()`, `LengthBucket()`.
- `src/components/UmamiAnalytics.astro` - also tags any other external link `outbound-link-click` with its URL.
- `scripts/check-events.mjs` - coverage guard, run first by `npm run check`.
- `scripts/umami.test.mjs` - helper tests, `npm run test:umami`.

No event carries a translated label, an address, an email or typed text. A search sends a length bucket only.

## Events
| Event | Fires on | Props |
| --- | --- | --- |
| play_now, play_server | Play buttons on a game or maps page | game, place |
| tmc_game, tmc_servers, tmc_surface | Links to a game's TMC page, server browser, roadmap/changelog/bugs | game, place, surface |
| game_site | Links to a game's own site, including the moved-page fallbacks | game, host, place, page |
| standout | Standout Servers rankings | place, game |
| tmc_play | Generic "Play on TMC" and TMC text links | place |
| repo_link | GitHub links (game, maps, pack, site, org, deploy, engine) | kind, repo, place |
| discord, social, contact | Discord invite, social accounts, contact button (address never sent) | place, network |
| game_card, map_preview, server_card | Cards that lead into a game, map or server | place, game, server |
| copy_address | Copy button beside a server address | server |
| maps_search, maps_filter | Debounced search and family chips on the maps page | game, len bucket, family, results |
| locale_change | Language picker | from, to |
| nav_link | Internal navigation: header, menu, footer, home, game, maps, server, servers, inspirations, 404 | place, to |
| menu_toggle | Language or mobile menu opened | menu |
| inspiration_link | Inspiration source links | place |
| map_source | Original screenshot source of a map | game |
| not_found | 404 page | path |

Every event also gets `path` and `locale` from `track()`.

## Guard rules
`npm run check` runs `scripts/check-events.mjs` first. It fails when an `<a>`, `<button>`, `<summary>`, `<form>` or `<select>` in `src` has no `Ev()`, `EvHtml()`, `GameSiteEv()` or `data-umami-event`, unless the line above holds `umami-ignore: <reason>` (used where a script fires the event). A file with a click, submit, change or input listener must call `track()` or hold `umami-ignore-file: <reason>`. Every name in `UMAMI_EVENTS` must be fired and every name fired must be registered.
