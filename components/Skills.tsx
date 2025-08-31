"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const Stack = [
    'Next.js',
    'React',
    'Node.js',
    'Flask',
    'Tailwind CSS',
    'JavaScript',
    'TensorFlow',
    'OpenCV',
    'Python',
    'C++',
    'TypeScript',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'AWS',
    'Azure',
    'Git',
    'GitHub',
    'Postman',
    'MATLAB'
  ]

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cards = gridRef.current?.querySelectorAll('.skill-card')
    if (!cards || cards.length === 0) return

    gsap.set(cards, { autoAlpha: 0, y: 16 })
    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <>
      {/* Keep spacing above if you want, but don't anchor to it */}
      <div className="lg:h-90 md:h-60 h-80 sm:h-40" />

      {/* Anchor target moved here with scroll offset for fixed navbar */}
      <div
        id="skills"
        ref={sectionRef}
        className="min-h-screen md:h-screen h-[100dvh] py-0 relative md:py-8 flex justify-center flex-col items-center bg-gray-100 scroll-mt-24 md:scroll-mt-32"
      >
        {/* Title */}
        <div className="flex flex-row items-center justify-center gap-6 my-10">

          <h1 className="text-2xl md:text-6xl font-extrabold uppercase tracking-wide">
            SKILLS
          </h1>
        </div>

        {/* Skills grid */}
        <div
          ref={gridRef}
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-1"
        >
          {Stack.map((skill, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-xl p-[1px] bg-gradient-to-br from-white/10 to-white/0 hover:from-white/20 hover:to-white/5 transition-all duration-300"
            >
              <div
                className="skill-card relative h-full w-full rounded-[inherit] bg-black text-white shadow-sm shadow-black/10 flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-3xl text-center p-2 sm:p-3 md:p-4 overflow-hidden transition-all duration-300 will-change-transform group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] group-hover:scale-[1.02] after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] after:translate-x-[-100%] group-hover:after:translate-x-[100%] after:transition-transform after:duration-700"
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:h-50 md:h-50 h-70 sm:h-30" />
    </>
  )
}
