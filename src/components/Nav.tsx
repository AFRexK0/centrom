import { useLocale, LOCALE_LABELS, LOCALES } from '../i18n/LocaleProvider'

export function Nav() {
  const { t, locale, setLocale } = useLocale()

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          CENTROM
        </a>
        <nav aria-label={t.nav.aria}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <label className="lang-switch">
            <span className="sr-only">{t.nav.langSelect}</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as typeof locale)}
              aria-label={t.nav.langSelect}
            >
              {LOCALES.map((code) => (
                <option key={code} value={code}>
                  {LOCALE_LABELS[code]}
                </option>
              ))}
            </select>
          </label>
          <span className="nav-status">{t.nav.status}</span>
        </div>
      </div>
    </header>
  )
}
