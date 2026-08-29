import { useEffect, useRef } from 'react'
import { useLocale } from '../i18n/LocaleProvider'
import { useScrollMotion } from '../scroll/ScrollProvider'
import { ScrollReveal } from '../scroll/ScrollReveal'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function Process() {
  const { t, locale } = useLocale()
  const { subscribeScroll } = useScrollMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const updateTimeline = () => {
      const track = trackRef.current
      const rail = railRef.current
      const fill = fillRef.current
      const markers = markerRefs.current.filter(Boolean) as HTMLSpanElement[]

      if (!track || !rail || !fill || markers.length < 2) return

      const mobile = window.matchMedia('(max-width: 859px)').matches
      if (!mobile) {
        fill.style.height = '0px'
        rail.style.height = '0px'
        track.querySelectorAll('.process-step').forEach((step) => {
          step.classList.remove('is-passed', 'is-active')
        })
        return
      }

      const trackRect = track.getBoundingClientRect()
      const firstRect = markers[0].getBoundingClientRect()
      const lastRect = markers[markers.length - 1].getBoundingClientRect()
      const firstCenter = firstRect.top + firstRect.height / 2
      const lastCenter = lastRect.top + lastRect.height / 2
      const railTop = firstCenter - trackRect.top
      const railHeight = Math.max(lastCenter - firstCenter, 1)

      rail.style.top = `${railTop}px`
      rail.style.height = `${railHeight}px`

      const viewportCenter = window.innerHeight / 2
      const progress = clamp(
        (viewportCenter - firstCenter) / (lastCenter - firstCenter),
        0,
        1,
      )

      fill.style.height = `${progress * railHeight}px`

      markers.forEach((marker) => {
        const step = marker.closest('.process-step')
        if (!step) return

        const center = marker.getBoundingClientRect().top + marker.offsetHeight / 2
        step.classList.toggle('is-passed', center <= viewportCenter + 2)
        step.classList.toggle('is-active', Math.abs(center - viewportCenter) < 56)
      })
    }

    updateTimeline()
    const unsubscribe = subscribeScroll(updateTimeline)
    window.addEventListener('resize', updateTimeline)

    return () => {
      unsubscribe()
      window.removeEventListener('resize', updateTimeline)
    }
  }, [subscribeScroll, locale, t.process.steps])

  return (
    <section className="section" id="process">
      <div className="section-inner">
        <ScrollReveal className="section-head">
          <p className="mono-label">{t.process.label}</p>
          <h2>{t.process.h2}</h2>
          <p>{t.process.p}</p>
        </ScrollReveal>
        <div className="process-track" ref={trackRef}>
          <div className="process-rail" ref={railRef} aria-hidden="true">
            <div className="process-rail-fill" ref={fillRef} />
          </div>
          <ol className="process-steps">
            {t.process.steps.map((step, index) => (
              <li className="process-step" key={index}>
                <span
                  className="process-marker"
                  ref={(el) => {
                    markerRefs.current[index] = el
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="process-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
