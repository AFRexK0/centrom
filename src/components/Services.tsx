import { useLocale } from '../i18n/LocaleProvider'

export function Services() {
  const { t } = useLocale()

  return (
    <section className="section" id="services">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">{t.services.label}</p>
          <h2>{t.services.h2}</h2>
          <p>{t.services.p}</p>
        </div>
        <div className="service-rail">
          {t.services.items.map((service, index) => (
            <article className="service-row" key={service.tag}>
              <span className="service-index">
                {String(index + 1).padStart(2, '0')}
              </span>
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
