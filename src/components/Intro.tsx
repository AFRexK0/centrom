export function Intro() {
  return (
    <section className="section" id="about">
      <div className="section-inner intro-grid">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="mono-label">01 / signal</p>
          <h2>A quiet studio with a loud stack.</h2>
          <p>
            Centrom sits between craft and commerce. We design, build, and host
            — and when the right piece already exists, we source it. Buyers are
            usually businesses; the budget is mid-market; the tone is practical.
          </p>
        </div>
        <div className="intro-stat-row" role="list">
          <div className="intro-stat crt-frame" role="listitem">
            <strong>WP+</strong>
            <span>WordPress builds</span>
          </div>
          <div className="intro-stat crt-frame" role="listitem">
            <strong>SHOP</strong>
            <span>Shopify themes</span>
          </div>
          <div className="intro-stat crt-frame" role="listitem">
            <strong>HOST</strong>
            <span>uptime & care</span>
          </div>
        </div>
      </div>
    </section>
  )
}
