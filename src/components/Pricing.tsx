const TIERS = [
  {
    tier: 'Boot',
    title: 'Landing / brochure',
    amount: '€1.8k',
    unit: 'from',
    featured: false,
    points: [
      'Single-page or small WP site',
      'Mobile-first layout',
      'Basic SEO + analytics',
      '2 revision rounds',
    ],
  },
  {
    tier: 'Runtime',
    title: 'Store or software',
    amount: '€4.5k',
    unit: 'from',
    featured: true,
    points: [
      'Shopify theme or custom tool',
      'Integrations & content model',
      'Staging + launch support',
      '30 days post-ship care',
    ],
  },
  {
    tier: 'Uptime',
    title: 'Host & retain',
    amount: '€89',
    unit: '/ month',
    featured: false,
    points: [
      'Managed hosting & SSL',
      'Backups + updates',
      'Priority ticket lane',
      'Brokered add-ons as needed',
    ],
  },
]

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">06 / ledger</p>
          <h2>Mid-range, printed clearly.</h2>
          <p>
            Starting bands — not a menu of tricks. Exact quotes follow a short
            brief. Finished packages and brokerage sit in the same bands.
          </p>
        </div>
        <div className="price-grid">
          {TIERS.map((tier) => (
            <article
              className={`price-card crt-frame${tier.featured ? ' featured' : ''}`}
              key={tier.tier}
            >
              <span className="tier">{tier.tier}</span>
              <h3>{tier.title}</h3>
              <p className="amount">
                {tier.amount}
                <span> {tier.unit}</span>
              </p>
              <ul>
                {tier.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className={`btn${tier.featured ? ' btn-cyan' : ''}`} href="#contact">
                Request quote
              </a>
            </article>
          ))}
        </div>
        <p className="price-note">
          // larger systems and multi-property rollouts quoted separately · EU
          VAT where applicable
        </p>
      </div>
    </section>
  )
}
