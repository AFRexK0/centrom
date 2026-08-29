import { useLocale } from '../i18n/LocaleProvider'
import { ScrollParallax } from '../scroll/ScrollReveal'

export function Hero() {
  const { t } = useLocale()

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <ScrollParallax as="div" className="hero-grid" speed={0.14} />
      </div>
      <div className="hero-inner">
        <p className="mono-label">{t.hero.label}</p>
        <div className="hero-brand" aria-label="Centrom">
          CENTROM
        </div>
        <ScrollParallax as="div" className="hero-copy" speed={0.05}>
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
        </ScrollParallax>
        <ScrollParallax as="aside" className="hero-terminal crt-frame" speed={0.08} aria-hidden={true}>
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
        </ScrollParallax>
      </div>
    </section>
  )
}
