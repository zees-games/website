import { LocalizePath, type Locale } from '../i18n/config'

/**
 * Every origin the site links to. All are `PUBLIC_*` with a production
 * default: they ship to the browser, so none may ever be a secret.
 */
const trim = (u: string) => u.replace(/\/+$/, '')

export const SITE_URL = trim(import.meta.env.PUBLIC_SITE_URL ?? 'https://zeesgames.com')

/** The Modding Community, which hosts, lists and runs every game here. */
export const TMC_URL = trim(import.meta.env.PUBLIC_TMC_URL ?? 'https://moddingcommunity.com')

export const GITHUB_ORG = 'https://github.com/zees-games'
export const SITE_REPO = `${GITHUB_ORG}/website`

/** A path on TMC in the reader's language: TMC prefixes locales the same way this site does. */
export const TmcHref = (path: string, locale: Locale) => `${TMC_URL}${LocalizePath(path, locale)}`

/** A game's page on The Modding Community. */
export const TmcGameHref = (slug: string, locale: Locale) => TmcHref(`/${slug}`, locale)

/**
 * Quick play for a game: TMC resolves the slug and opens its Play flow, which
 * picks a server (or launches directly when the game allows it). Every Play,
 * Play Now and play-solo button on this site goes here, never to a launcher of
 * our own.
 */
export const TmcPlayHref = (slug: string, locale: Locale) => TmcHref(`/${slug}/play`, locale)

/** A game's servers on TMC. */
export const TmcServersHref = (slug: string, locale: Locale) => TmcHref(`/${slug}/servers/browse`, locale)

/** Zee's own server for a game: its page on TMC, launching on arrival. */
export const TmcServerPlayHref = (slug: string, server: string, locale: Locale) =>
  TmcHref(`/${slug}/s/${server}/play`, locale)

export const RepoHref = (repo: string) => `${GITHUB_ORG}/${repo}`
