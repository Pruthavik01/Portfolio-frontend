import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import FunZone from './components/FunZone'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useHeroScrollAnimation } from './hooks/useHeroScrollAnimation'

function App() {
  const heroRef = useRef(null)
  const heroTextRef = useRef(null)
  const headerRef = useRef(null)
  const headerTextRef = useRef(null)

  useHeroScrollAnimation({
    heroRef,
    heroTextRef,
    headerRef,
    headerTextRef,
  })

  return (
    <>
      <Header headerRef={headerRef} headerTextRef={headerTextRef} />
      <Hero heroRef={heroRef} heroTextRef={heroTextRef} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <FunZone />
      <Contact />
      <Footer />
    </>
  )
}

export default App