const STEPS = [
  {
    title: 'Brief',
    copy: 'You tell us what has to exist. We translate it into scope, lane, and budget band.',
  },
  {
    title: 'Build',
    copy: 'Design and engineering share one timeline. You get checkpoints, not mystery weeks.',
  },
  {
    title: 'Ship',
    copy: 'Launch, hosting, and the boring ops that keep the thing alive after the applause.',
  },
  {
    title: 'Steady',
    copy: 'Retainers, updates, or a clean handoff — whichever keeps your business moving.',
  },
]

export function Process() {
  return (
    <section className="section" id="process">
      <div className="section-inner">
        <div className="section-head">
          <p className="mono-label">05 / protocol</p>
          <h2>How the desks move.</h2>
          <p>
            Four beats. Enough structure to trust, not enough ceremony to slow a
            mid-market launch.
          </p>
        </div>
        <ol className="process-steps">
          {STEPS.map((step) => (
            <li className="process-step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
