import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react'
import Lenis from 'lenis'

type RevealOptions = {
  delay?: number
  distance?: number
}

type ParallaxOptions = {
  speed: number
}

type ScrollMotionContextValue = {
  registerReveal: (el: HTMLElement, options?: RevealOptions) => () => void
  registerParallax: (el: HTMLElement, options: ParallaxOptions) => () => void
}

const ScrollMotionContext = createContext<ScrollMotionContextValue | null>(null)

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const reveals = useRef(new Map<HTMLElement, RevealOptions>())
  const parallax = useRef(new Map<HTMLElement, ParallaxOptions>())
  const reducedMotion = useRef(false)

  const registerReveal = useCallback(
    (el: HTMLElement, options: RevealOptions = {}) => {
      reveals.current.set(el, options)
      return () => {
        reveals.current.delete(el)
      }
    },
    [],
  )

  const registerParallax = useCallback(
    (el: HTMLElement, options: ParallaxOptions) => {
      parallax.current.set(el, options)
      return () => {
        parallax.current.delete(el)
      }
    },
    [],
  )

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.2,
    })

    document.documentElement.classList.add('lenis', 'lenis-smooth')

    const updateMotion = () => {
      const viewport = window.innerHeight
      const start = viewport * 0.9
      const end = viewport * 0.58

      for (const [el, options] of reveals.current) {
        if (reducedMotion.current) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          continue
        }

        const rect = el.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > viewport) {
          continue
        }

        const delay = options.delay ?? 0
        const distance = options.distance ?? 22
        let progress = clamp((start - rect.top) / (start - end), 0, 1)
        progress = easeOutCubic(progress)
        progress = clamp((progress - delay) / (1 - delay), 0, 1)

        el.style.opacity = String(progress)
        el.style.transform = `translate3d(0, ${(1 - progress) * distance}px, 0)`
      }

      const scroll = lenis.scroll

      for (const [el, options] of parallax.current) {
        if (reducedMotion.current) {
          el.style.transform = 'none'
          continue
        }

        el.style.transform = `translate3d(0, ${scroll * options.speed}px, 0)`
      }
    }

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      updateMotion()
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!link) return
      const id = link.getAttribute('href')?.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      event.preventDefault()
      lenis.scrollTo(el, { offset: -8 })
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])

  const value = useMemo(
    () => ({ registerReveal, registerParallax }),
    [registerReveal, registerParallax],
  )

  return (
    <ScrollMotionContext.Provider value={value}>
      {children}
    </ScrollMotionContext.Provider>
  )
}

export function useScrollMotion() {
  const context = useContext(ScrollMotionContext)
  if (!context) {
    throw new Error('useScrollMotion must be used within ScrollProvider')
  }
  return context
}
