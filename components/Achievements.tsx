'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Roboto_Flex } from 'next/font/google'

// Font must be initialized at module scope (Next.js requirement)
const robotoFlexLocal = Roboto_Flex({
  subsets: ['latin'],
  weight: ['100','400','500','600','700','800'],
  display: 'swap'
})

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  const achievements = [
    '99 PERCENTILE - JEE MAINS (2021)',
    '1ST PLACE - DATA DETECTIVES CHALLENGE, WISSENAIRE (IIT BHUBANESWAR, 2023)',
    '5TH RANK  INTER IIT TECH MEET 13.0 (IIT BOMBAY, 2024)',
    'NATIONAL SEMI-FINALIST - FLIPKART GRID 7.0 (2025)',
    '1800+ RATED - LEETCODE (COMPETITIVE PROGRAMMING)'
  ]

  useEffect(() => {
    const chars = '!<>-_\/[]{}=+*^?#________0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    function scramble(el: HTMLElement, finalText: string, duration = 1.2) {
      return new Promise<void>((resolve) => {
        const start = performance.now()
        const length = finalText.length
        const revealSteps = Array.from({ length }, (_, i) => i)
        let frame = 0
        const total = Math.max(30, Math.floor(duration * 60))

        function update(now: number) {
          frame++
            const progress = frame / total
            const revealCount = Math.floor(progress * length)
            let out = ''
            for (let i = 0; i < length; i++) {
              if (finalText[i] === ' ') { out += ' '; continue }
              if (i < revealCount) {
                out += finalText[i]
              } else {
                out += chars[Math.floor(Math.random() * chars.length)]
              }
            }
            el.textContent = out
            if (frame < total) {
              requestAnimationFrame(update)
            } else {
              el.textContent = finalText
              resolve()
            }
        }
        requestAnimationFrame(update)
      })
    }

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            once: true
          }
        })
      }

      // Prepare lines
      const lines = gsap.utils.toArray<HTMLElement>('.achievement-line')
      gsap.set(lines, { opacity: 0, y: 18 })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 65%',
        once: true,
        onEnter: async () => {
          for (const line of lines) {
            gsap.to(line, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
            const finalText = line.dataset.final || line.textContent || ''
            await scramble(line, finalText, 1.1)
            await new Promise(r => setTimeout(r, 120))
          }
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id='achievements' ref={containerRef} className="min-h-screen md:min-h-[90vh] py-10 md:py-12 flex flex-col items-center scroll-mt-24 md:scroll-mt-32">
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-6 p-3 md:mb-2">

        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide text-[#F2F2F2]">
          Achievements
        </h1>
      </div>
  <div className={`w-full max-w-5xl mt-6 md:mt-10 px-4 sm:px-6 ${robotoFlexLocal.className}`}>
    <div className="space-y-8 md:space-y-10">
          {achievements.map((text, i) => (
            <div
              key={i}
              data-final={text}
      className="achievement-line text-base xs:text-lg sm:text-xl md:text-[2.75rem] font-thin leading-relaxed sm:leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A] select-none"
              aria-label={text}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
