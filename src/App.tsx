import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-amber z-[100] origin-left pointer-events-none"
    />
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <a href="#main" className="skip-link">
        Ir al contenido principal
      </a>
      <ScrollProgress />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
