# CLAUDE.md — zees-games (website)

Zee's Games' public site (zeesgames.com): a static Astro + React + Tailwind 4 site for Christian's open source Godot games, which run on The Modding Community (TMC). A separate brand from TMC: it does **not** use `@modcommunity/shared` or TMC's theme. GitHub: `zees-games/website`.

## Layout

| Path | What |
| --- | --- |
| `src/pages/[...lang]/{index,goals/index,inspirations/index,servers/index,[game]/index,[game]/maps,[app]/s/[server]}.astro`, `404.astro` | Every route, built once per locale (`lang` is undefined for English, so English has no prefix) |
| `src/i18n/config.ts` | The locales (TMC's nine), their tags, `LocalePaths`, `LocalizePath` |
| `src/i18n/ui/<locale>.ts`, `src/i18n/games/<locale>.ts`, `src/i18n/controls/<locale>.ts` | Every string on the site, each game's copy, and the control labels (shared by every game), per locale; `index.ts` has `UseI18n`, `Fmt`, `Rich` |
| `src/layouts/Layout.astro`, `src/components/*` | The one layout, header, footer, game card, play buttons, server card, copy-address button, `Controls` + `Key` (keycaps), `PlayerCommands` |
| `src/styles/global.css` | The theme (`@theme` tokens from the org banner: ink/panel, cyan, amber, violet) and the few custom utilities |
| `src/lib/site.ts` | Every origin and every link into TMC and GitHub |
| `src/lib/asset.ts` | `Asset()`: cache-busted URLs for files in `public/` |
| `src/lib/umami.ts`, `src/components/UmamiAnalytics.astro` | The Umami event registry (`Ev()` for links, `track()` for scripts) and the snippet |
| `src/lib/seo.ts`, `src/pages/{robots.txt,site.webmanifest}.ts` | JSON-LD builders (`SiteLd`, `GameLd`, `BreadcrumbLd`) that `Layout` renders from its `jsonLd` prop; robots and the install manifest |
| `scripts/gen-brand.mjs` (`npm run brand`) | Renders the icon set into `public/` and the 1200×630 share banners into `public/og/` (`site.jpg`, one per game) with Playwright's Chromium (`npx playwright install chromium` once) |
| `src/lib/maps.ts` | Joins `maps.json` with `originals.json` |
| `src/data/games.ts` | The games' structural data (slug, repos, accent), by hand; their copy is in `src/i18n/games/` |
| `src/data/servers.ts` | Zee's servers (subdomain id, app, TMC server id, name, port), by hand from TMC's server list |
| `src/data/controls.ts` | Each game's default keys, from its in-game help screen (`*_bindings.gd` on x-tmc-dev02) |
| `src/data/maps.json`, `originals.json` | Generated map data; see Data below |
| `public/images/{games,maps,originals}` | Covers (1920×1080, rendered by the banner kit on x-tmc-dev02), in-game map shots, original-map shots (WebP) |
| `scripts/map-views.json`, `scripts/map-shot/` | Per-map camera poses matching each original's screenshot, and the renderer that re-shoots them on x-tmc-dev02 |
| `Dockerfile`, `docker-compose.yml`, `docker/`, `.env.ex` | Deployment, at the repo root like website-learn |

## Run and test

- `npm run dev`; `heavy -- npm run build` (runs `astro check`, then the static build). There is no test suite: build, then look at the pages.
- `heavy -- docker compose build` checks the image.

## Rules

- Every page is static and translated into all nine locales TMC supports (en es fr de ru nl ja zh pt). A string goes into `src/i18n/ui/en.ts` and the eight other catalogues in the same change; `Messages` types each catalogue against English, so a missing key fails `astro check`. Game copy likewise goes into all nine `src/i18n/games/*.ts`.
- Links into TMC carry the page's locale (`TmcHref(path, locale)` → `TMC_URL/de/...`), matching TMC's own prefix-as-needed routing.
- Markup inside a translated sentence goes through `Rich(msg, {slot: html})`, which escapes the message first; never `set:html` a raw catalogue string, and `Escape` any translated label put into the slot's HTML.
- Plurals are objects of CLDR forms (`{one, few, many, other}`), picked by `plural()`; the maps page's live count ships its forms in `data-forms`.
- Only external map packs (a game's `mapsRepo`) get maps on the site. Maps that ship inside a game repo are not listed.
- A game's `slug` is its app `url` on TMC: `/<slug>` here and `TMC_URL/<slug>` there name the same game. Never invent one.
- Every Play / Play Now / play-solo button goes to TMC (`TmcPlayHref` = `TMC_URL/<slug>/play`, quick play; `TmcServerPlayHref` = `TMC_URL/<app>/s/<tmcId>/play` for one of Zee's servers). This site never launches a game itself.
- A server's page is `/<app>/s/<id>`, where `id` is its subdomain under `zeesgames.com` (its address is `<id>.zeesgames.com:<port>`) and `app` its TMC app url; multi-game servers sit under `godot`. A new server is a row in `SERVERS`, with its `tmcId` from TMC (`/api/app/v1/servers/lookup?host=&port=`).
- The Controls section mirrors each game's help screen: when a game's key table changes, update `src/data/controls.ts` and add any new label to all nine `src/i18n/controls/*.ts`. Keys render through `Key.astro`, never as bare text.
- Every image in `public/` is linked through `Asset(path)` (`src/lib/asset.ts`), which appends a content hash: images are cached for a week by Cloudflare and browsers, so a changed cover or map shot only shows up under a new URL.
- Every origin is a `PUBLIC_*` var in `src/lib/site.ts` with a production default. It is inlined at build, so it can never be a secret, and changing it needs a rebuild.
- Summaries say what a game does today, taken from its README. The games are platform demos that are made for fun, and the copy keeps both; it says they were made for fun, never claims they are fun.
- Original-map screenshots are third-party: always shown with their source link, never claimed as ours, and excluded from the MIT licence (`LICENSE`).
- Analytics is Umami, configured at container start, not at build: every page carries `<!--umami-->` and nginx swaps it for the snippet when `UMAMI_SRC` and `UMAMI_WEBSITE_ID` are in `.env` (`docker/40-umami.sh` validates them and writes the `sub_filter` include). A restart applies a change; `npm run dev` and a bare `dist/` have no analytics. A new event is a name in `UMAMI_EVENTS` plus its call site (never a name nothing fires); event data are identifiers (slug, map id, repo, `place`), never translated text. Links take `{...Ev(name, data)}`; in-page behaviour calls `track()`.
- Every page passes `Layout` a title, description and translated `imageAlt`; game and maps pages use `/og/<slug>.jpg`, the rest `/og/site.jpg`. A new game needs `npm run brand` re-run (it reads `GAMES` and the covers), and a new page needs its `jsonLd` (at least a `BreadcrumbLd`). Pages without an address of their own take `noAlternates noindex`.
- Discord links all use `DISCORD_URL` (`https://dis.zeesgames.com`, an invite redirect) and fire the `discord` event with their `place`; Discord styling uses the `discord` colour token, nowhere else.
- Social accounts (YouTube, X, Facebook; no TikTok or Instagram) and the contact button live in `Socials.astro`, used by the footer and the home page's Discord section. The contact address is assembled by script on click and must never appear whole in the HTML or the JS bundle (grep `dist/` for it).
- Brand icons come from `react-icons/fa6` (lucide's are deprecated); everything else is `lucide-react`.

## Data

`python3 scripts/gen-maps.py <dir> <repo-root>` rebuilds `maps.json` and the map WebPs from an inventory of the map repos on x-tmc-dev02 (`~/godot/*-maps`; `PACK` in the script maps each pack to its game, and packs not in it are skipped): `<dir>` holds `inventory.json` and the screenshots under `shots/` copied from dev02. Each map row carries a `score` (brightness + contrast of its shot), which picks the game page's six previews. `originals.json` comes from hand-checked web research; every entry keeps its `source`.

A map with a pose in `scripts/map-views.json` is re-shot with `scripts/map-shot/run.sh scripts/map-views.json <arena|g2gfast> <outdir>` (usage at its top), then resized to 960 px WebP over its file in `public/images/maps/` and its `score` in `maps.json` recomputed. `gen-maps.py` only writes WebPs that do not exist, so a re-shot one survives it. Each pose's `note` lists what the view still lacks next to the original; filling those gaps is game-side work (Kenney stand-ins, never source textures).

Game covers come from the Blender banner kit on x-tmc-dev02 (`~/banners/src`, README there): `build.sh <repo> cover` renders the scene text-free at 1920×1080 into `~/banners/covers/`; convert to WebP into `public/images/games/<slug>.webp`, then `npm run brand` for the share images. Never bake the title into a cover; the site prints it.
