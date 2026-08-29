import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { de } from './locales/de'
import { en } from './locales/en'
import { fr } from './locales/fr'
import { it } from './locales/it'
import { LOCALES, type Locale, type Translations } from './types'

export { LOCALES, type Locale }

const STORAGE_KEY = 'centrom-locale'

const translations: Record<Locale, Translations> = { en, fr, it, de }

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  it: 'IT',
  de: 'DE',
}

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && LOCALES.includes(stored as Locale)) {
    return stored as Locale
  }

  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (LOCALES.includes(browser as Locale)) {
    return browser as Locale
  }

  return 'en'
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale())

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const t = translations[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', t.meta.description)
    }
  }, [locale, t])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, t],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
