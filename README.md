# Zee's Games

The website for [Zee's Games](https://zeesgames.com): open source multiplayer games made with
[Godot](https://godotengine.org) and run on [The Modding Community](https://moddingcommunity.com)'s
gaming platform. The games themselves live in the [zees-games](https://github.com/zees-games) organisation.

A static [Astro](https://astro.build) site styled with Tailwind CSS. Every Play button links to The Modding Community, which hosts and runs the games.

## Pages

| Path | What |
| --- | --- |
| `/` | Every game, with Zee's running servers first |
| `/goals` | Why these games exist |
| `/<game>` | A game: summary, how to play, modes, Play Now |
| `/<game>/maps` | Every map in the game's map pack, with a link to the pack on GitHub; ported maps show the Godot version next to a screenshot of the original |

Every page also exists in Spanish, French, German, Russian, Dutch, Japanese, Chinese and Portuguese under `/es`, `/fr`, `/de`, `/ru`, `/nl`, `/ja`, `/zh` and `/pt` (English has no prefix), the same languages as The Modding Community.

`<game>` is the game's app address on The Modding Community, so `zeesgames.com/arena` and `moddingcommunity.com/arena` are the same game.

## Develop

```sh
npm install
cp .env.ex .env   # optional; every value has a production default
npm run dev
```

`npm run build` runs `astro check` and writes the static site to `dist/`.

## Deploy (Docker)

The image builds the site and serves `dist/` from nginx. `.env` is read at **build** time (it holds only `PUBLIC_*` origins, which are inlined into the pages) and gives compose its port settings.

```sh
cp .env.ex .env   # set PUBLIC_SITE_URL, PUBLIC_TMC_URL, INTERNAL_PORT, BIND_ADDR, BIND_PORT
docker compose up -d --build
```

Put a TLS-terminating reverse proxy in front of `BIND_ADDR:BIND_PORT`.

## Data

- `src/data/games.ts`: the games, written by hand.
- `src/i18n/ui/<locale>.ts`, `src/i18n/games/<locale>.ts`: the site's text and each game's description, per language.
- `src/data/maps.json`: maps per game, generated from the map repositories by `scripts/gen-maps.py`.
- `src/data/originals.json`: for each ported map, a screenshot of the original and where it came from.

## Licence

MIT, except the screenshots of original maps in `public/images/originals/`, which belong to their authors. See [LICENSE](LICENSE).
