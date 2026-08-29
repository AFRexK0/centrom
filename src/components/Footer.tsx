import { useLocale } from '../i18n/LocaleProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

export function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <ScrollReveal as="footer" className="footer">
      <div className="footer-inner">
        <div className="footer-brand">CENTROM</div>
        <div className="footer-domains">{t.footer.domains}</div>
        <div className="footer-meta">
          {t.footer.copyright.replace('{year}', String(year))}
        </div>
      </div>
    </ScrollReveal>
  )
}
