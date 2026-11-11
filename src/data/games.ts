/**
 * The games. One entry per game; the order here is the order on the home page.
 *
 * `slug` is the game's app `url` on The Modding Community, and also this site's
 * address for it (`/<slug>`, `/<slug>/maps`), so both sites name a game the
 * same way. Everything a player reads about a game (tagline, summary, how to
 * play, modes) is translated, so it lives in `src/i18n/games/<locale>.ts`.
 */

export type GameKind = 'game' | 'minigame'

/** Something a game takes after. Proper nouns, so never translated; the description is in `src/i18n/games/`. */
export interface Inspiration {
  title: string
  /** Only where the source has a page that is certain. */
  link?: string
}

export interface Game {
  slug: GameSlug
  /** The game's name. A proper noun: never translated. */
  title: string
  kind: GameKind
  /** GitHub repository name under zees-games. */
  repo: string
  /** The external map pack's repository, when the game has one. Only these get a /maps page. */
  mapsRepo?: string
  /** Other content packs under zees-games (more maps, weapons), linked from the game page only. */
  packs?: string[]
  /**
   * The game's own site (a TMC hotspot), when it has one. Its maps live there
   * (`<site>/maps`, `<site>/maps/<map id>`), so this site's maps page for the
   * game is a 301 to it (`src/lib/redirects.ts`) and the game page links out.
   */
  site?: string
  /** Slugs the game had before a rename. Their pages are rewritten in `docker/nginx.conf.template`; their maps pages go straight to the game's site. */
  formerSlugs?: string[]
  accent: 'cyan' | 'amber' | 'violet'
  /** What the game takes after; each entry's description is the same-index string of `inspirations` in the game's copy. A game with none is an original idea. */
  inspirations?: Inspiration[]
}

export const GAME_SLUGS = ['fatal-contact', 'airdrift', 'playlot', 'hungario', 'buses-from-hell', 'smash-copter', 'zombie-zone', 'hide-n-seek', 'prop-hunt', 'murder-mystery', 'deathrun', 'wipeout', 'dangerous-delivery', 'look-at-me'] as const
export type GameSlug = (typeof GAME_SLUGS)[number]

export const GAMES: Game[] = [
  { slug: 'fatal-contact', title: "Fatal Contact", kind: 'game', repo: 'game-fatal-contact', mapsRepo: 'fc-surf-dm-maps', packs: ['fc-dm-maps', 'fc-weapons'], site: 'https://fatalcontact.net', formerSlugs: ['arena', 'fatalcontact'], accent: 'amber', inspirations: [{ title: "Counter-Strike: Source", link: "https://store.steampowered.com/app/240/Counter-Strike_Source/" }] },
  { slug: 'airdrift', title: "Airdrift", kind: 'game', repo: 'game-airdrift', mapsRepo: 'airdrift-maps', site: 'https://airdrift.net', formerSlugs: ['g2gfast'], accent: 'cyan', inspirations: [{ title: "Counter-Strike: Source", link: "https://store.steampowered.com/app/240/Counter-Strike_Source/" }] },
  { slug: 'playlot', title: "Playlot", kind: 'game', repo: 'game-playlot', mapsRepo: 'playlot-maps', site: 'https://playlot.app', formerSlugs: ['playground'], accent: 'violet', inspirations: [{ title: "Garry's Mod", link: "https://store.steampowered.com/app/4000/Garrys_Mod/" }] },
  { slug: 'hungario', title: "Hungario", kind: 'game', repo: 'game-hungario', accent: 'cyan', inspirations: [{ title: "Agar.io", link: "https://agar.io/" }] },
  { slug: 'buses-from-hell', title: "Buses From Hell", kind: 'minigame', repo: 'mg-buses-from-hell', accent: 'amber', inspirations: [{ title: "buses_from_hell", link: "https://gamebanana.com/mods/127607" }] },
  { slug: 'smash-copter', title: "Smash Copter", kind: 'minigame', repo: 'mg-smash-copter', accent: 'violet', inspirations: [{ title: "mg_3k_smash_lego_copter", link: "https://gamebanana.com/mods/127650" }] },
  { slug: 'zombie-zone', title: "Zombie Zone", kind: 'game', repo: 'game-zombie-zone', mapsRepo: 'zombie-zone-maps', accent: 'amber', inspirations: [{ title: "L4D2 Core-SS Servers", link: "https://core-ss.org/" }, { title: "Killing Floor", link: "https://store.steampowered.com/app/1250/Killing_Floor/" }] },
  { slug: 'hide-n-seek', title: "Hide n Seek", kind: 'game', repo: 'game-hide-n-seek', mapsRepo: 'hide-n-seek-maps', accent: 'cyan', inspirations: [{ title: "Hide and Seek", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=1547633571" }] },
  { slug: 'prop-hunt', title: "Prop Hunt", kind: 'game', repo: 'game-prop-hunt', mapsRepo: 'mg-prop-hunt-maps', site: 'https://prophunt.net', accent: 'violet', inspirations: [{ title: "Prop Hunt", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=135509255" }] },
  { slug: 'murder-mystery', title: "Murder Mystery", kind: 'game', repo: 'game-murder-mystery', mapsRepo: 'murder-mystery-maps', accent: 'amber', inspirations: [{ title: "Murder", link: "https://steamcommunity.com/sharedfiles/filedetails/?id=187073946" }] },
  { slug: 'deathrun', title: "Deathrun", kind: 'game', repo: 'game-deathrun', mapsRepo: 'mg-deathrun-maps', accent: 'cyan', inspirations: [{ title: "DeathRun", link: "https://gamebanana.com/mods/cats/5572" }] },
  { slug: 'wipeout', title: "Wipeout", kind: 'minigame', repo: 'mg-wipeout', mapsRepo: 'mg-wipeout-maps', accent: 'amber', inspirations: [{ title: "Wipeout" }, { title: "Counter-Strike: Source", link: "https://store.steampowered.com/app/240/Counter-Strike_Source/" }] },
  { slug: 'dangerous-delivery', title: "Dangerous Delivery", kind: 'game', repo: 'mg-dangerous-delivery', accent: 'violet' },
  { slug: 'look-at-me', title: "Look At Me", kind: 'game', repo: 'mg-look-at-me', accent: 'cyan' },
]

export const GameBySlug = (slug: string) => GAMES.find((g) => g.slug === slug)
