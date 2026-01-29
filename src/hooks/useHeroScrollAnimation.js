import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroScrollAnimation({
  heroRef,
  heroTextRef,
  headerRef,
  headerTextRef,
}) {
  useLayoutEffect(() => {
    if (
      !heroRef.current ||
      !heroTextRef.current ||
      !headerRef.current ||
      !headerTextRef.current
    ) return


    const ctx = gsap.context(() => {
      const getScale = () => {
        const heroFontSize = parseFloat(
          getComputedStyle(heroTextRef.current).fontSize
        )
        const headerFontSize = parseFloat(
          getComputedStyle(headerTextRef.current).fontSize
        )
        return headerFontSize / heroFontSize
      }

      const getTargetY = () => {
        const heroRect = heroTextRef.current.getBoundingClientRect()
        const headerRect = headerRef.current.getBoundingClientRect()
        return (
          headerRect.top +
          headerRect.height / 2 -
          (heroRect.top + heroRect.height / 2)
        )
      }

      gsap.to(heroTextRef.current, {
        y: () => getTargetY(),
        scale: () => getScale(),
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          onUpdate: self => {
            if (self.progress > 0.88) {
              const p = (self.progress - 0.88) / 0.12

              gsap.set(heroTextRef.current, { opacity: 1 - p })
              gsap.set(headerTextRef.current, {
                opacity: p,
                y: (1 - p) * 30,
              })
            } else {
              gsap.set(heroTextRef.current, { opacity: 1 })
              gsap.set(headerTextRef.current, { opacity: 0, y: 30 })
            }
          },
        },
      })

      gsap.to(headerRef.current, {
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(0,0,0,0.85)',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.fromTo(
        '.hero-fade',
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '#about',
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        }
      )


    })



    return () => ctx.revert()
  }, [])
}