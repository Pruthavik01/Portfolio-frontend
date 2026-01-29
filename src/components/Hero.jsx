import { useRef } from 'react'
import HeroBackground from './HeroBackground'
import { useGreetings } from '../hooks/useGreetings'

export default function Hero({ heroRef, heroTextRef }) {
  const helloTextRef = useRef(null)
  const { greetings, currentGreeting } = useGreetings(helloTextRef)

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background art */}
      <HeroBackground />

      <section className="relative min-h-screen overflow-hidden">
        <HeroBackground />

        {/* Smooth transition */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-10" />

        {/* Content */}
        <div className="relative z-20">
          {/* hero text */}
        </div>
      </section>


      {/* Foreground content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-4 h-24 flex items-center justify-center">
          <h1
            ref={helloTextRef}
            key={currentGreeting}
            className="text-6xl md:text-7xl font-bold tracking-tight"
            style={{
              background:
                'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {greetings[currentGreeting].text}
          </h1>
        </div>

        <span className="text-sm text-gray-400 tracking-widest uppercase">
          {greetings[currentGreeting].lang}
        </span>

        <h1
          ref={heroTextRef}
          className="mt-8 text-7xl md:text-8xl font-bold tracking-tight"
          style={{
            background:
              'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Pruthavik here
        </h1>

        <p className="mt-6 text-xl text-gray-400 font-light">
          Scroll to experience the magic
        </p>
      </div>
    </section>
  )
}