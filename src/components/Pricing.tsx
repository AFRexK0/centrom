import { useLocale } from '../i18n/LocaleProvider'

const FEATURED_TIER = 1

export function Pricing() {
  const { t } = useLocale()

  return (
    <section className="section" id="pricing">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">{t.pricing.label}</p>
          <h2>{t.pricing.h2}</h2>
          <p>{t.pricing.p}</p>
        </div>
        <div className="price-grid">
          {t.pricing.tiers.map((tier, index) => (
            <article
              className={`price-card crt-frame${index === FEATURED_TIER ? ' featured' : ''}`}
              key={tier.tier}
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
            </article>
          ))}
        </div>
        <p className="price-note">{t.pricing.note}</p>
      </div>
    </section>
  )
}
