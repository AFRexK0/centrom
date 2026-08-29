import { useLocale } from '../i18n/LocaleProvider'

export function Intro() {
  const { t } = useLocale()

  return (
    <section className="section" id="about">
      <div className="section-inner intro-grid">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="mono-label">{t.intro.label}</p>
          <h2>{t.intro.h2}</h2>
          <p>{t.intro.p}</p>
        </div>
        <div className="intro-stat-row" role="list">
          <div className="intro-stat crt-frame" role="listitem">
            <strong>WP+</strong>
            <span>{t.intro.statWp}</span>
          </div>
          <div className="intro-stat crt-frame" role="listitem">
            <strong>SHOP</strong>
            <span>{t.intro.statShop}</span>
          </div>
          <div className="intro-stat crt-frame" role="listitem">
            <strong>HOST</strong>
            <span>{t.intro.statHost}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
