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
