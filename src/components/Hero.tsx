import { useLocale } from '../i18n/LocaleProvider'

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
      </div>
      <div className="hero-inner">
        <p className="mono-label">{t.hero.label}</p>
        <div className="hero-brand" aria-label="Centrom">
          CENTROM
        </div>
        <div className="hero-copy">
          <h1>{t.hero.h1}</h1>
          <p>{t.hero.p}</p>
          <div className="cta-row">
            <a className="btn" href="#contact">
              {t.hero.ctaBrief}
            </a>
            <a className="btn btn-ghost" href="#pricing">
              {t.hero.ctaPricing}
            </a>
          </div>
        </div>
        <aside className="hero-terminal crt-frame" aria-hidden="true">
          <div>
            <span className="prompt">root@centrom:~$</span> uptime
          </div>
          <div>{t.hero.terminalUptime}</div>
          <div>
            <span className="prompt">root@centrom:~$</span> whoami
          </div>
          <div>{t.hero.terminalWhoami}</div>
          <div>
            <span className="prompt">root@centrom:~$</span>{' '}
            <span className="cursor" />
          </div>
        </aside>
      </div>
    </section>
  )
}
