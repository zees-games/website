/**
 * The games. One entry per game; the order here is the order on the home page.
 *
 * `slug` is the game's app `url` on The Modding Community, and also this site's
 * address for it (`/<slug>`, `/<slug>/maps`), so both sites name a game the
 * same way. Everything a player reads about a game (tagline, summary, how to
 * play, modes) is translated, so it lives in `src/i18n/games/<locale>.ts`.
 */

export type GameKind = 'game' | 'minigame'

export interface Game {
  slug: GameSlug
  /** The game's name. A proper noun: never translated. */
  title: string
  kind: GameKind
  /** GitHub repository name under zees-games. */
  repo: string
  /** The external map pack's repository, when the game has one. Only these get a /maps page. */
  mapsRepo?: string
  /** Zee's own server's id on TMC (`/<slug>/s/<id>`), when one is running. */
  server?: string
  accent: 'cyan' | 'amber' | 'violet'
}

export const GAME_SLUGS = ['arena', 'g2gfast', 'playground', 'hungario', 'buses-from-hell', 'smash-copter', 'zombie-zone', 'hide-n-seek', 'prop-hunt', 'murder-mystery', 'deathrun', 'wipeout', 'dangerous-delivery', 'look-at-me'] as const
export type GameSlug = (typeof GAME_SLUGS)[number]

export const GAMES: Game[] = [
  { slug: 'arena', title: "Arena", kind: 'game', repo: 'game-arena', mapsRepo: 'arena-surf-dm-maps', server: 'arena01', accent: 'amber' },
  { slug: 'g2gfast', title: "G2g Fast", kind: 'game', repo: 'game-g2gfast', mapsRepo: 'g2gfast-maps', server: 'g2gfast01', accent: 'cyan' },
  { slug: 'playground', title: "Playground", kind: 'game', repo: 'game-playground', mapsRepo: 'game-playground-maps', server: 'pg01', accent: 'violet' },
  { slug: 'hungario', title: "Hungario", kind: 'game', repo: 'game-hungario', server: 'hungario01', accent: 'cyan' },
  { slug: 'buses-from-hell', title: "Buses From Hell", kind: 'minigame', repo: 'mg-buses-from-hell', server: 'bfh01', accent: 'amber' },
  { slug: 'smash-copter', title: "Smash Copter", kind: 'minigame', repo: 'mg-smash-copter', server: 'smash01', accent: 'violet' },
  { slug: 'zombie-zone', title: "Zombie Zone", kind: 'game', repo: 'game-zombie-zone', mapsRepo: 'zombie-zone-maps', accent: 'amber' },
  { slug: 'hide-n-seek', title: "Hide n Seek", kind: 'game', repo: 'game-hide-n-seek', mapsRepo: 'hide-n-seek-maps', accent: 'cyan' },
  { slug: 'prop-hunt', title: "Prop Hunt", kind: 'minigame', repo: 'game-prop-hunt', mapsRepo: 'mg-prop-hunt-maps', accent: 'violet' },
  { slug: 'murder-mystery', title: "Murder Mystery", kind: 'game', repo: 'game-murder-mystery', mapsRepo: 'murder-mystery-maps', accent: 'amber' },
  { slug: 'deathrun', title: "Deathrun", kind: 'minigame', repo: 'game-deathrun', mapsRepo: 'mg-deathrun-maps', accent: 'cyan' },
  { slug: 'wipeout', title: "Wipeout", kind: 'minigame', repo: 'mg-wipeout', mapsRepo: 'mg-wipeout-maps', accent: 'amber' },
  { slug: 'dangerous-delivery', title: "Dangerous Delivery", kind: 'minigame', repo: 'mg-dangerous-delivery', accent: 'violet' },
  { slug: 'look-at-me', title: "Look At Me", kind: 'minigame', repo: 'mg-look-at-me', accent: 'cyan' },
]

export const GameBySlug = (slug: string) => GAMES.find((g) => g.slug === slug)
