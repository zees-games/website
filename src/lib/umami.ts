/**
 * Umami event tracking, the same shape as website-learn's `src/lib/umami.ts`:
 * a registry of names, a `track()` for scripts that can never throw, and
 * `Ev()` for the static links, which Umami's own script tracks from
 * `data-umami-event` attributes without any code of ours.
 *
 * A pageview here already says which game and which language a visitor read.
 * What it cannot say is the one thing this site is for: whether they left for
 * TMC to play, and from which button. Nearly every link that matters leaves the
 * site, so the events below are mostly those exits, named, with the game.
 *
 * Rules, borrowed from website-city and website-learn:
 * - Do not register a name nothing fires. Every name below has a call site.
 * - An event carries identifiers (game slug, map id, repo, place), never a
 *   translated label, so one button is one row in Umami, not nine.
 */
export const UMAMI_EVENTS = [
  /*
   * Leaving to play. `game` is the slug; `place` is where the button sits
   * (`game` page or `maps` page), which says whether the maps page sells the
   * game or only gets read.
   */
  'play_now',
  'play_server',
  /** A game's page on TMC (`place`: buttons on the game or maps page, or the game page's sidebar). */
  'tmc_game',
  /** A game's server browser on TMC. */
  'tmc_servers',
  /** A game's roadmap, changelog or bug tracker on TMC (`surface`: roadmap | changelog | bugs). */
  'tmc_surface',
  /** The generic "Play on TMC" / "all games on TMC" links (`place`: header, menu, home, goals, footer). */
  'tmc_play',

  /*
   * GitHub. `kind` is game | maps | site | org and `repo` the repository, so
   * "do map packs get looked at" is one filter.
   */
  'repo_link',

  /** The Discord invite (`place`: header, menu, home, game, goals, footer). */
  'discord',
  /** A social account (`network`: youtube | instagram | facebook; `place`: home, footer). */
  'social',
  /** The contact email button (`place`: home, footer); the address is never in the event. */
  'contact',

  /* Moving around: which entry into a game gets used. */
  /** A game card (`place`: games | minigames | more), carrying the game. */
  'game_card',
  /** A map thumbnail on a game page, which deep-links into its maps page. */
  'map_preview',
  /** A link to one of Zee's server pages (`place`: servers | game | server), carrying the server. */
  'server_card',
  /** The copy button beside a server's address, carrying the server. */
  'copy_address',

  /*
   * The maps page's search and family chips run in the page and never touch
   * the URL. `maps_search` fires debounced on a settled query, with the hit
   * count; `results: 0` is someone looking for a map the pack does not have.
   */
  'maps_search',
  'maps_filter',

  /** The language picker: `from` and `to` locales. */
  'locale_change',

  /*
   * nginx serves one 404.html for every missing path, so Umami files them all
   * as one pageview; this event keeps the path that missed.
   */
  'not_found',
] as const

export type UmamiEventName = (typeof UMAMI_EVENTS)[number]

export type UmamiEventData = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    umami?: { track: (name: string, data?: UmamiEventData) => void }
  }
}

/**
 * Fire an event from a script. Safe before the Umami script has loaded (or when
 * it is not configured at all), and it never throws: analytics must never be
 * able to break a page.
 */
export function track(name: UmamiEventName, data?: UmamiEventData): void {
  try {
    if (typeof window === 'undefined') return
    // An event fired while the page loads (the 404 one) can run before Umami's
    // deferred script has; send it once the page has finished loading instead.
    if (!window.umami && document.readyState !== 'complete') {
      window.addEventListener('load', () => track(name, data), { once: true })
      return
    }
    window.umami?.track(name, { path: window.location.pathname, locale: LocaleFromPath(window.location.pathname), ...data })
  } catch {
    // Swallowed on purpose.
  }
}

/** The locale a path is under; English has no prefix. */
export function LocaleFromPath(path: string): string {
  return /^\/(es|fr|de|ru|nl|ja|zh|pt)(\/|$)/.exec(path)?.[1] ?? 'en'
}

/**
 * The attributes that make Umami's script track a click on an element, for
 * spreading onto a static link: `<a {...Ev('play_now', { game, place })}>`.
 * Without the Umami script they are inert.
 */
export function Ev(name: UmamiEventName, data: Record<string, string | undefined> = {}): Record<string, string> {
  const attrs: Record<string, string> = { 'data-umami-event': name }
  for (const [k, v] of Object.entries(data)) if (v !== undefined) attrs[`data-umami-event-${k}`] = v
  return attrs
}

/** Cap free text a visitor typed before it becomes an event field. */
export function QueryField(query: string): string {
  const q = query.trim()
  return q.length > 80 ? `${q.slice(0, 80)}…` : q
}
