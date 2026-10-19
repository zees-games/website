import mapsData from '../data/maps.json'
import originalsData from '../data/originals.json'
import { GameBySlug } from '../data/games'

/**
 * External map packs, keyed by game slug. Only a game with its own map pack
 * repository (`mapsRepo`) gets a maps page: maps that ship inside the game are
 * not listed. `src/data/maps.json` is generated from the
 * map repositories (ids, names, authors, the in-game screenshot);
 * `src/data/originals.json` holds the screenshot of each ported map in the game
 * it came from, with the page it was found on, keyed by the original map name.
 */

interface RawMap {
  id: string
  name: string
  image: string | null
  /** How well `image` reads as a thumbnail, 0-100 (brightness + contrast; `scripts/gen-maps.py`). */
  score: number | null
  author: string | null
  originalGame: string | null
  originalMap: string | null
}

interface Original {
  image: string
  source: string | null
  sourceName: string | null
  /** Set when the image is of a near match (another version), not the exact map. */
  matched?: string | null
}

export interface MapEntry extends RawMap {
  original: Original | null
}

const packs = mapsData as Record<string, { repo: string; maps: RawMap[] }>
const originals = originalsData as Record<string, Original>

export function MapsFor(slug: string): { repo: string; maps: MapEntry[] } | null {
  const pack = packs[slug]
  const repo = GameBySlug(slug)?.mapsRepo
  if (!repo || !pack || pack.maps.length === 0) return null
  return {
    repo,
    maps: pack.maps.map((m) => ({ ...m, original: m.originalMap ? originals[m.originalMap] ?? null : null })),
  }
}

export const HasMaps = (slug: string) => MapsFor(slug) !== null
