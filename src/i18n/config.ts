/**
 * The languages the site speaks: the same nine as The Modding Community
 * (website-city's `src/i18n/locales.ts`), with the same "as-needed" prefixing:
 * English on the bare path, every other locale under `/xx`. TMC uses the same
 * scheme, so a link into TMC keeps the reader's language.
 *
 * `astro.config.mjs` repeats this list (it cannot import TypeScript); keep the
 * two in step.
 */
export const LOCALES = ['en', 'es', 'fr', 'de', 'ru', 'nl', 'ja', 'zh', 'pt'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

/** Each language in its own name, for the picker. */
export const ENDONYMS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ru: 'Русский',
  nl: 'Nederlands',
  ja: '日本語',
  zh: '中文',
  pt: 'Português',
}

/** BCP 47 tags for `<html lang>`, hreflang and `Intl`. */
export const LANG_TAG: Record<Locale, string> = {
  en: 'en', es: 'es', fr: 'fr', de: 'de', ru: 'ru', nl: 'nl', ja: 'ja', zh: 'zh-CN', pt: 'pt',
}

/** Open Graph wants language_TERRITORY. */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', ru: 'ru_RU', nl: 'nl_NL', ja: 'ja_JP', zh: 'zh_CN', pt: 'pt_BR',
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/** The `[...lang]` route param for a locale: absent for English. */
export const LangParam = (locale: Locale) => (locale === DEFAULT_LOCALE ? undefined : locale)

/** `getStaticPaths` entries for every locale, for pages under `[...lang]`. */
export const LocalePaths = () => LOCALES.map((locale) => ({ params: { lang: LangParam(locale) }, props: { locale } }))

/** `/es/goals` → `/goals`, `/es` → `/`. */
export function StripLocale(path: string): string {
  const seg = path.split('/')[1]
  if (isLocale(seg) && seg !== DEFAULT_LOCALE) return path.slice(seg.length + 1) || '/'
  return path || '/'
}

/** A path on this site (or on TMC, which prefixes the same way) in `locale`. */
export function LocalizePath(path: string, locale: Locale): string {
  const base = StripLocale(path)
  if (locale === DEFAULT_LOCALE) return base
  return base === '/' ? `/${locale}/` : `/${locale}${base}`
}
