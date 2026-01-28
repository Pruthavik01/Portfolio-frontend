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
    if (!heroRef.current || !heroTextRef.current || !headerTextRef.current) return

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
              heroTextRef.current.style.opacity = 1 - p
              headerTextRef.current.style.opacity = p
              headerTextRef.current.style.transform =
                `translateX(-50%) translateY(${(1 - p) * 30}px)`
            } else {
              heroTextRef.current.style.opacity = 1
              headerTextRef.current.style.opacity = 0
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

      
    })

    return () => ctx.revert()
  }, [])
}
