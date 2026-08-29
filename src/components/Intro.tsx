import { useLocale } from '../i18n/LocaleProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

export function Intro() {
  const { t } = useLocale()

  return (
    <section className="section" id="about">
      <div className="section-inner intro-grid">
        <ScrollReveal className="section-head" style={{ marginBottom: 0 }}>
          <p className="mono-label">{t.intro.label}</p>
          <h2>{t.intro.h2}</h2>
          <p>{t.intro.p}</p>
        </ScrollReveal>
        <div className="intro-stat-row" role="list">
          <ScrollReveal as="div" className="intro-stat crt-frame" role="listitem" delay={0.05}>
            <strong>WP+</strong>
            <span>{t.intro.statWp}</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="intro-stat crt-frame" role="listitem" delay={0.12}>
            <strong>SHOP</strong>
            <span>{t.intro.statShop}</span>
          </ScrollReveal>
          <ScrollReveal as="div" className="intro-stat crt-frame" role="listitem" delay={0.19}>
            <strong>HOST</strong>
            <span>{t.intro.statHost}</span>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
