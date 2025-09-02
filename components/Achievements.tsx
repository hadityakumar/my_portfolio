'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(titleRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.8
      })

      gsap.set(imageRef.current, {
        x: -100,
        opacity: 0,
        scale: 0.9,
        rotation: -5
      })

      gsap.set(textRef.current, {
        x: 100,
        opacity: 0
      })

      // Ensure list items are hidden initially for a clean staggered reveal
      const items = gsap.utils.toArray<HTMLElement>('.achievement-item')
      if (items.length) {
        gsap.set(items, { opacity: 0, y: 16 })
      }

      // Section-driven animation timeline (like WebDes)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          once: true,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      })

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
      })
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.0,
            ease: 'power4.out',
          },
          '-=0.3'
        )
        .to(
          textRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.22,
          },
          '-=0.5'
        )
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

      {/* Image + Achievements */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 md:gap-10 p-4 sm:p-5 w-full max-w-6xl mt-4 md:mt-10">
        <div className="flex-1 flex justify-center md:justify-start m-auto">
          <Image
            ref={imageRef}
            src="/img.jpeg"
            alt="Abstract network illustration"
            width={380}
            height={480}
            className="rounded-lg shadow-lg border border-white/10 w-full max-w-[420px] h-auto"
            onLoad={() => ScrollTrigger.refresh()}
          />
        </div>

        <div ref={textRef} className="flex-1">
          {/* Achievements list */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-xl">
            <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-wide text-[#F2F2F2]">
              <li className="achievement-item flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A] flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A]">
                  99 PERCENTILE - JEE MAINS (2021)
                </span>
              </li>
    
              <li className="achievement-item flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A] flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A]">
                  1ST PLACE - DATA DETECTIVES CHALLENGE, WISSENAIRE (IIT BHUBANESWAR, 2023)
                </span>
              </li>

              <li className="achievement-item flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A] flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A]">
                  9TH RANK  INTER IIT TECH MEET 13.0 (IIT BOMBAY, 2024)
                </span>
              </li>
              
              <li className="achievement-item flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A] flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A]">
                  NATIONAL SEMI-FINALIST - FLIPKART GRID 7.0 (2025)
                </span>
              </li>
              <li className="achievement-item flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A] flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#A29E9A]">
                  1800+ RATED - LEETCODE (COMPETITIVE PROGRAMMING)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
