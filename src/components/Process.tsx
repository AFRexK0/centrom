import { useLocale } from '../i18n/LocaleProvider'

export function Process() {
  const { t } = useLocale()

  return (
    <section className="section" id="process">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">{t.process.label}</p>
          <h2>{t.process.h2}</h2>
          <p>{t.process.p}</p>
        </div>
        <ol className="process-steps">
          {t.process.steps.map((step, index) => (
            <li className="process-step" key={index}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
