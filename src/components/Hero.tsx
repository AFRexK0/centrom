export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
      </div>
      <div className="hero-inner">
        <p className="mono-label">// digital products studio</p>
        <div className="hero-brand" aria-label="Centrom">
          CENTROM
        </div>
        <div className="hero-copy">
          <h1>Software, storefronts, and hosting — finished or brokered.</h1>
          <p>
            We build and ship for businesses that need something real online:
            custom software, WordPress, Shopify, and dependable hosting in the
            mid range — no theater, just working systems.
          </p>
          <div className="cta-row">
            <a className="btn" href="#contact">
              Start a brief
            </a>
            <a className="btn btn-ghost" href="#pricing">
              See pricing
            </a>
          </div>
        </div>
        <aside className="hero-terminal crt-frame" aria-hidden="true">
          <div>
            <span className="prompt">root@centrom:~$</span> uptime
          </div>
          <div>studio load: low · queue: open</div>
          <div>
            <span className="prompt">root@centrom:~$</span> whoami
          </div>
          <div>centrom · multi-desk · eu</div>
          <div>
            <span className="prompt">root@centrom:~$</span>{' '}
            <span className="cursor" />
          </div>
        </aside>
      </div>
    </section>
  )
}
