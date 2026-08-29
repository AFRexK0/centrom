import { useLocale } from '../i18n/LocaleProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

const FEATURED_TIER = 1

export function Pricing() {
  const { t } = useLocale()

  return (
    <section className="section" id="pricing">
      <div className="section-inner">
        <ScrollReveal className="section-head">
          <p className="mono-label">{t.pricing.label}</p>
          <h2>{t.pricing.h2}</h2>
          <p>{t.pricing.p}</p>
        </ScrollReveal>
        <div className="price-grid">
          {t.pricing.tiers.map((tier, index) => (
            <ScrollReveal
              as="article"
              className={`price-card crt-frame${index === FEATURED_TIER ? ' featured' : ''}`}
              key={tier.tier}
              delay={Math.min(index * 0.08, 0.16)}
            >
              <span className="tier">{tier.tier}</span>
              <h3>{tier.title}</h3>
              <p className="amount">
                {tier.amount}
                <span>
                  {' '}
                  {index === 2 ? t.pricing.perMonth : t.pricing.from}
                </span>
              </p>
              <ul>
                {tier.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
              <a
                className={`btn${index === FEATURED_TIER ? ' btn-cyan' : ''}`}
                href="#contact"
              >
                {t.pricing.requestQuote}
              </a>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="price-note" delay={0.12}>
          {t.pricing.note}
        </ScrollReveal>
      </div>
    </section>
  )
}
