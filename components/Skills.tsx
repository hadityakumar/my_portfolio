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
    'Framer Motion',
    'TensorFlow',
    'OpenCV',
    'Python',
    'C++',
    'JavaScript',
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
              className="skill-card aspect-square rounded-lg bg-black text-white border border-black/20 shadow-sm shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-3xl text-center p-2 sm:p-3 md:p-4"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:h-50 md:h-50 h-70 sm:h-30" />
    </>
  )
}
