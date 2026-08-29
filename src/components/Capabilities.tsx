import { useLocale } from '../i18n/LocaleProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

export function Capabilities() {
  const { t } = useLocale()

  return (
    <section className="section" id="capabilities">
      <div className="section-inner">
        <ScrollReveal className="section-head">
          <p className="mono-label">{t.capabilities.label}</p>
          <h2>{t.capabilities.h2}</h2>
          <p>{t.capabilities.p}</p>
        </ScrollReveal>
        <ScrollReveal className="cap-grid">
          {t.capabilities.items.map((cap) => (
            <article className="cap-item" key={cap.chip}>
              <span className="code-chip">{cap.chip}</span>
              <h3>{cap.title}</h3>
              <p>{cap.copy}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
