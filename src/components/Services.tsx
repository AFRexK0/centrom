const SERVICES = [
  {
    index: '01',
    title: 'Custom software',
    copy: 'Internal tools, customer portals, APIs, and product shells — scoped for mid-market teams that need clarity over ceremony.',
    tag: 'build',
  },
  {
    index: '02',
    title: 'WordPress sites',
    copy: 'Editorial sites, brochure systems, and CMS setups that editors can actually run without calling us every Tuesday.',
    tag: 'wp',
  },
  {
    index: '03',
    title: 'Shopify storefronts',
    copy: 'Theme work, checkout flow polish, and catalog structure for shops that need to sell — not just look busy.',
    tag: 'shopify',
  },
  {
    index: '04',
    title: 'Finished products',
    copy: 'Ready-to-run packages when you want speed: sites, scripts, and kits we have already proven on other desks.',
    tag: 'ready',
  },
  {
    index: '05',
    title: 'Hosting & brokerage',
    copy: 'We host what we ship, and we sit in the middle when you need domains, servers, or vendors lined up cleanly.',
    tag: 'host',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">02 / catalog</p>
          <h2>What leaves the desk.</h2>
          <p>
            Five lanes. Same standard: clear scope, mid-range pricing, and
            something you can put in front of customers.
          </p>
        </div>
        <div className="service-rail">
          {SERVICES.map((service) => (
            <article className="service-row" key={service.index}>
              <span className="service-index">{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-tag">{service.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
