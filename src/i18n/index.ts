import { LANG_TAG, LocalizePath, type Locale } from './config'
import type { Messages, Plural } from './ui/en'
import type { GameText } from './games/en'
import type { ControlsText } from './controls/en'
import type { GameSlug } from '../data/games'
import { en } from './ui/en'
import { es } from './ui/es'
import { fr } from './ui/fr'
import { de } from './ui/de'
import { ru } from './ui/ru'
import { nl } from './ui/nl'
import { ja } from './ui/ja'
import { zh } from './ui/zh'
import { pt } from './ui/pt'
import { en as gEn } from './games/en'
import { es as gEs } from './games/es'
import { fr as gFr } from './games/fr'
import { de as gDe } from './games/de'
import { ru as gRu } from './games/ru'
import { nl as gNl } from './games/nl'
import { ja as gJa } from './games/ja'
import { zh as gZh } from './games/zh'
import { pt as gPt } from './games/pt'
import { en as cEn } from './controls/en'
import { es as cEs } from './controls/es'
import { fr as cFr } from './controls/fr'
import { de as cDe } from './controls/de'
import { ru as cRu } from './controls/ru'
import { nl as cNl } from './controls/nl'
import { ja as cJa } from './controls/ja'
import { zh as cZh } from './controls/zh'
import { pt as cPt } from './controls/pt'

const UI: Record<Locale, Messages> = { en, es, fr, de, ru, nl, ja, zh, pt }
const GAMES_TEXT: Record<Locale, Record<GameSlug, GameText>> = {
  en: gEn, es: gEs, fr: gFr, de: gDe, ru: gRu, nl: gNl, ja: gJa, zh: gZh, pt: gPt,
}
const CONTROLS_TEXT: Record<Locale, ControlsText> = {
  en: cEn, es: cEs, fr: cFr, de: cDe, ru: cRu, nl: cNl, ja: cJa, zh: cZh, pt: cPt,
}

type Params = Record<string, string | number>

/** Fill `{name}` slots with plain values. */
export function Fmt(msg: string, params: Params = {}): string {
  return msg.replace(/\{(\w+)\}/g, (m, k: string) => (k in params ? String(params[k]) : m))
}

export const Escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/**
 * Fill slots with markup, for `set:html`. The message text is escaped first,
 * so only the `html` values (built in code, never translated) are markup.
 */
export function Rich(msg: string, html: Record<string, string>, params: Params = {}): string {
  return Escape(Fmt(msg, params)).replace(/\{(\w+)\}/g, (m, k: string) => html[k] ?? m)
}

/** Everything a page needs to speak `locale`. */
export function UseI18n(locale: Locale) {
  const t = UI[locale]
  const rules = new Intl.PluralRules(LANG_TAG[locale])
  const num = new Intl.NumberFormat(LANG_TAG[locale])
  return {
    locale,
    t,
    /** A game's translated copy. */
    g: (slug: GameSlug) => GAMES_TEXT[locale][slug],
    /** The games' control labels and group titles. */
    c: CONTROLS_TEXT[locale],
    /** A path on this site in this locale. */
    p: (path: string) => LocalizePath(path, locale),
    /** Pick the plural form for `n` and fill `{n}` (locale-formatted) plus `params`. */
    plural: (msg: Plural, n: number, params: Params = {}) =>
      Fmt(msg[rules.select(n) as keyof Plural] ?? msg.other, { ...params, n: num.format(n) }),
    n: (n: number) => num.format(n),
  }
}

export type I18n = ReturnType<typeof UseI18n>
