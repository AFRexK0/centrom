import { useLocale } from '../i18n/LocaleProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

export function Process() {
  const { t } = useLocale()

  return (
    <section className="section" id="process">
      <div className="section-inner">
        <ScrollReveal className="section-head">
          <p className="mono-label">{t.process.label}</p>
          <h2>{t.process.h2}</h2>
          <p>{t.process.p}</p>
        </ScrollReveal>
        <ol className="process-steps">
          {t.process.steps.map((step, index) => (
            <ScrollReveal
              as="li"
              className="process-step"
              key={index}
              delay={Math.min(index * 0.08, 0.24)}
            >
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
