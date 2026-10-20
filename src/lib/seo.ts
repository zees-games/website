import { Asset } from './asset'
import type { Game } from '../data/games'
import type { GameText } from '../i18n/games/en'
import { LANG_TAG, LocalizePath, type Locale } from '../i18n/config'
import { GITHUB_ORG, RepoHref, SITE_URL, TmcGameHref } from './site'

/**
 * schema.org JSON-LD for the pages, rendered by `Layout` as
 * `<script type="application/ld+json">`. Every URL is absolute and in the
 * page's locale, so each translation describes itself.
 */
export type JsonLd = Record<string, unknown>

const abs = (path: string) => new URL(path, SITE_URL).href
/** A page's address as its canonical link spells it, trailing slash included. */
const page = (path: string, locale: Locale) => abs(LocalizePath(path, locale).replace(/\/?$/, '/'))
const ORG_ID = `${SITE_URL}/#org`

const ORG: JsonLd = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: "Zee's Games",
  url: `${SITE_URL}/`,
  logo: abs('/icon-512.png'),
  sameAs: [GITHUB_ORG],
}

/** The home page: the site and who makes it. */
export function SiteLd(locale: Locale, description: string): JsonLd[] {
  return [
    ORG,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      name: "Zee's Games",
      url: page('/', locale),
      description,
      inLanguage: LANG_TAG[locale],
      publisher: { '@id': ORG_ID },
    },
  ]
}

/** Home › … crumbs, `[name, path]` pairs after the home crumb. */
export function BreadcrumbLd(locale: Locale, crumbs: [string, string][]): JsonLd {
  const all: [string, string][] = [["Zee's Games", '/'], ...crumbs]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: page(path, locale),
    })),
  }
}

/** A game page. */
export function GameLd(game: Game, text: GameText, locale: Locale): JsonLd {
  return {
    '@type': 'VideoGame',
    name: game.title,
    url: page(`/${game.slug}`, locale),
    description: `${text.tagline} ${text.summary[0] ?? ''}`.trim(),
    image: [abs(Asset(`/og/${game.slug}.jpg`)), abs(Asset(`/images/games/${game.slug}.webp`))],
    inLanguage: LANG_TAG[locale],
    genre: text.modes,
    playMode: 'MultiPlayer',
    applicationCategory: 'Game',
    isAccessibleForFree: true,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    sameAs: [TmcGameHref(game.slug, locale), RepoHref(game.repo)],
  }
}

/** Wraps a page's nodes in one graph, so `@id` references resolve. */
export const Graph = (nodes: JsonLd[]) => ({ '@context': 'https://schema.org', '@graph': nodes })
