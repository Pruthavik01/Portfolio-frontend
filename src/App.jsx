
import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ContentSection from './components/ContentSection'
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
      <ContentSection />
    </>
  )
}

export default App
