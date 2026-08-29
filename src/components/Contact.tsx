import { useState, type FormEvent } from 'react'

export function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const lane = String(data.get('lane') || '')
    const message = String(data.get('message') || '').trim()

    const subject = encodeURIComponent(`Centrom brief — ${lane || 'general'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLane: ${lane}\n\n${message}`,
    )

    setStatus('opening mail client...')
    window.location.href = `mailto:hello@centrom.studio?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner contact-wrap">
        <div>
          <div className="section-head" style={{ marginBottom: '1.5rem' }}>
            <p className="mono-label">07 / ping</p>
            <h2>Send the brief.</h2>
            <p>
              Tell us what you sell, what needs to exist online, and the budget
              band. We reply from the same desk that ships the work.
            </p>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="lane">Lane</label>
              <select id="lane" name="lane" defaultValue="software">
                <option value="software">Custom software</option>
                <option value="wordpress">WordPress</option>
                <option value="shopify">Shopify</option>
                <option value="hosting">Hosting / brokerage</option>
                <option value="finished">Finished product</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Brief</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="What needs to exist, and by when?"
              />
            </div>
            <button className="btn" type="submit">
              Transmit
            </button>
            <p className="form-status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
        <aside className="contact-side crt-frame">
          <p className="mono-label">channel</p>
          <h3>hello@centrom.studio</h3>
          <p>
            Prefer a domain that ages well? We aim for centrom.studio /
            centrom.com — not another mid-2010s .io relic.
          </p>
          <dl className="contact-meta">
            <dt>Response window</dt>
            <dd>usually within 1 business day</dd>
            <dt>Timezone</dt>
            <dd>CET / CEST · remote-first desks</dd>
            <dt>Engagements</dt>
            <dd>project · retainer · brokered stack</dd>
          </dl>
        </aside>
      </div>
    </section>
  )
}
