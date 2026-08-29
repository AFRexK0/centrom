const CAPS = [
  {
    chip: 'SYS.01',
    title: 'Product shells',
    copy: 'Auth, dashboards, CRUD, and the boring glue that makes a business feel modern.',
  },
  {
    chip: 'SYS.02',
    title: 'Storefront UX',
    copy: 'Catalog clarity, mobile checkout paths, and theme work that respects conversion.',
  },
  {
    chip: 'SYS.03',
    title: 'CMS discipline',
    copy: 'WordPress structured so content teams stop inventing new chaos every quarter.',
  },
  {
    chip: 'SYS.04',
    title: 'Hosting care',
    copy: 'Backups, SSL, updates, and a human when something beeps at 2am.',
  },
  {
    chip: 'SYS.05',
    title: 'Vendor middle',
    copy: 'We broker domains, licenses, and infrastructure so you talk to one desk.',
  },
  {
    chip: 'SYS.06',
    title: 'Handoff kits',
    copy: 'Docs, admin access, and training notes — shipped like the product matters.',
  },
]

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">04 / modules</p>
          <h2>Things we keep on the rack.</h2>
          <p>
            Not every engagement is a blank page. These are the modules the
            studio runs again and again.
          </p>
        </div>
        <div className="cap-grid">
          {CAPS.map((cap) => (
            <article className="cap-item" key={cap.chip}>
              <span className="code-chip">{cap.chip}</span>
              <h3>{cap.title}</h3>
              <p>{cap.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
