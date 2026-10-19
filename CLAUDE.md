# CLAUDE.md — zees-games (website)

Zee's Games' public site (zeesgames.com): a static Astro + React + Tailwind 4 site for Christian's open source Godot games, which run on The Modding Community (TMC). A separate brand from TMC: it does **not** use `@modcommunity/shared` or TMC's theme. GitHub: `zees-games/website`.

## Layout

| Path | What |
| --- | --- |
| `src/pages/[...lang]/{index,goals/index,[game]/index,[game]/maps}.astro`, `404.astro` | Every route, built once per locale (`lang` is undefined for English, so English has no prefix) |
| `src/i18n/config.ts` | The locales (TMC's nine), their tags, `LocalePaths`, `LocalizePath` |
| `src/i18n/ui/<locale>.ts`, `src/i18n/games/<locale>.ts` | Every string on the site, and each game's copy, per locale; `index.ts` has `UseI18n`, `Fmt`, `Rich` |
| `src/layouts/Layout.astro`, `src/components/*` | The one layout, header, footer, game card, play buttons |
| `src/styles/global.css` | The theme (`@theme` tokens from the org banner: ink/panel, cyan, amber, violet) and the few custom utilities |
| `src/lib/site.ts` | Every origin and every link into TMC and GitHub |
| `src/lib/maps.ts` | Joins `maps.json` with `originals.json` |
| `src/data/games.ts` | The games' structural data (slug, repos, server, accent), by hand; their copy is in `src/i18n/games/` |
| `src/data/maps.json`, `originals.json` | Generated map data; see Data below |
| `public/images/{games,maps,originals}` | Covers, in-game map shots, original-map shots (WebP) |
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
- Every Play / Play Now / play-solo button goes to TMC (`TmcPlayHref` = `TMC_URL/<slug>/play`, quick play; `TmcServerPlayHref` for Zee's own server). This site never launches a game itself.
- Every origin is a `PUBLIC_*` var in `src/lib/site.ts` with a production default. It is inlined at build, so it can never be a secret, and changing it needs a rebuild.
- Summaries say what a game does today, taken from its README. The games are platform demos that are meant to be fun, and the copy keeps both.
- Original-map screenshots are third-party: always shown with their source link, never claimed as ours, and excluded from the MIT licence (`LICENSE`).
- Brand icons come from `react-icons/fa6` (lucide's are deprecated); everything else is `lucide-react`.

## Data

`python3 scripts/gen-maps.py <dir> <repo-root>` rebuilds `maps.json` and the map WebPs from an inventory of the map repos on x-tmc-dev02 (`~/godot/*-maps`; `PACK` in the script maps each pack to its game, and packs not in it are skipped): `<dir>` holds `inventory.json` and the screenshots under `shots/` copied from dev02. `originals.json` comes from hand-checked web research; every entry keeps its `source`.
