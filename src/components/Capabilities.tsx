import { useLocale } from '../i18n/LocaleProvider'

export function Capabilities() {
  const { t } = useLocale()

  return (
    <section className="section" id="capabilities">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">{t.capabilities.label}</p>
          <h2>{t.capabilities.h2}</h2>
          <p>{t.capabilities.p}</p>
        </div>
        <div className="cap-grid">
          {t.capabilities.items.map((cap) => (
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
