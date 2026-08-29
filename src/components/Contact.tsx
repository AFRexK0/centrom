import { useState, type FormEvent } from 'react'
import { useLocale } from '../i18n/LocaleProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

const LANE_KEYS = [
  'software',
  'wordpress',
  'shopify',
  'hosting',
  'finished',
] as const

type LaneKey = (typeof LANE_KEYS)[number]

export function Contact() {
  const { t } = useLocale()
  const [status, setStatus] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const laneKey = String(data.get('lane') || '') as LaneKey
    const laneLabel = t.contact.lanes[laneKey] || t.contact.mailGeneral
    const message = String(data.get('message') || '').trim()

    const subject = encodeURIComponent(`${t.contact.mailSubject} ${laneLabel}`)
    const body = encodeURIComponent(
      `${t.contact.name}: ${name}\n${t.contact.email}: ${email}\n${t.contact.lane}: ${laneLabel}\n\n${message}`,
    )

    setStatus(t.contact.statusOpening)
    window.location.href = `mailto:hello@centrom.studio?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner contact-wrap">
        <ScrollReveal>
          <div className="section-head" style={{ marginBottom: '1.5rem' }}>
            <p className="mono-label">{t.contact.label}</p>
            <h2>{t.contact.h2}</h2>
            <p>{t.contact.p}</p>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">{t.contact.name}</label>
              <input id="name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="lane">{t.contact.lane}</label>
              <select id="lane" name="lane" defaultValue="software">
                {LANE_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {t.contact.lanes[key]}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">{t.contact.brief}</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder={t.contact.placeholder}
              />
            </div>
            <button className="btn" type="submit">
              {t.contact.transmit}
            </button>
            <p className="form-status" aria-live="polite">
              {status}
            </p>
          </form>
        </ScrollReveal>
        <ScrollReveal as="aside" className="contact-side crt-frame" delay={0.1}>
          <p className="mono-label">{t.contact.channel}</p>
          <h3>hello@centrom.studio</h3>
          <p>{t.contact.sideP}</p>
          <dl className="contact-meta">
            <dt>{t.contact.responseWindow}</dt>
            <dd>{t.contact.responseValue}</dd>
            <dt>{t.contact.timezone}</dt>
            <dd>{t.contact.timezoneValue}</dd>
            <dt>{t.contact.engagements}</dt>
            <dd>{t.contact.engagementsValue}</dd>
          </dl>
        </ScrollReveal>
      </div>
    </section>
  )
}
