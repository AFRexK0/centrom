import { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Capabilities } from './components/Capabilities'
import { Process } from './components/Process'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CodeRain } from './components/CodeRain'
import { Scanlines } from './components/Scanlines'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.2,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    document.documentElement.classList.add('lenis', 'lenis-smooth')

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

  return (
    <div className="site">
      <CodeRain />
      <Scanlines />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Capabilities />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
