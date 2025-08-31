'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

export default function Mission() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const hrElements = document.getElementsByClassName("hr");
    
    ScrollTrigger.create({
      trigger: '#mission',
      start: 'top 70%',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(document.body, { backgroundColor: '#0D0D0D', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#F2F2F2', duration: 0.3 })
        gsap.to('body h1:not(.navbar *), body h2:not(.navbar *), body h3:not(.navbar *), body p:not(.navbar *), body div:not(.navbar *), body a:not(.navbar *), body span:not(.navbar *), body li:not(.navbar *), body svg path:not(.navbar *)', 
          { color: '#F2F2F2', fill: '#F2F2F2', duration: 0.3 })
      },
      onLeave: () => {
        gsap.to(document.body, { backgroundColor: '#F2F2F2', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#0D0D0D', duration: 0.3 })
        gsap.to('body h1:not(.navbar *), body h2:not(.navbar *), body h3:not(.navbar *), body p:not(.navbar *), body div:not(.navbar *), body a:not(.navbar *), body span:not(.navbar *), body li:not(.navbar *), body svg path:not(.navbar *)', 
          { color: '#0D0D0D', fill: '#0D0D0D', duration: 0.3 })
        gsap.to('#contact-section *', { color: '#F2F2F2', fill: '#F2F2F2', duration: 0.3 })
        gsap.to('.button', { color: '#0D0D0D', fill: '#F2F2F2', duration: 0.3 })
        gsap.to('.me *', { color: '#F2F2F2', fill: '#0D0D0D', duration: 0.3 })
      },
      onEnterBack: () => {
        gsap.to(document.body, { backgroundColor: '#0D0D0D', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#F2F2F2', duration: 0.3 })
        gsap.to('body h1:not(.navbar *), body h2:not(.navbar *), body h3:not(.navbar *), body p:not(.navbar *), body div:not(.navbar *), body a:not(.navbar *), body span:not(.navbar *), body li:not(.navbar *), body svg path:not(.navbar *)', 
          { color: '#F2F2F2', fill: '#F2F2F2', duration: 0.3 })
      },
      onLeaveBack: () => {
        gsap.to(document.body, { backgroundColor: '#F2F2F2', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#0D0D0D', duration: 0.3 })
        gsap.to('body h1:not(.navbar *), body h2:not(.navbar *), body h3:not(.navbar *), body p:not(.navbar *), body div:not(.navbar *), body a:not(.navbar *), body span:not(.navbar *), body li:not(.navbar *), body svg path:not(.navbar *)', 
          { color: '#0D0D0D', fill: '#0D0D0D', duration: 0.3 })
      }
    })
  }, [])

  return (
    <div
      id="mission"
      className="min-h-screen md:h-screen py-8 md:py-0 flex items-center justify-center p-3"
    >
      <div className="max-w-4xl w-full flex items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-wide">
            HI, I’M ADITYA — A FULL-STACK DEVELOPER AND AI ENTHUSIAST FROM IIT BHUBANESWAR. WITH HANDS-ON EXPERIENCE IN BUILDING SCALABLE WEB APPS, ML-DRIVEN PLATFORMS, AND AI-POWERED TOOLS, I THRIVE ON TRANSFORMING INNOVATIVE IDEAS INTO REAL-WORLD SOLUTIONS. I’VE INTERNED AT CDAC WHERE I WORKED ON CRIME ANALYTICS AND AI INTEGRATION, AND I LOVE CREATING PROJECTS THAT BLEND FUNCTIONALITY WITH CREATIVITY.
          </h1>

          {/* Horizontal line */}
          <div className="w-full h-px bg-current mt-12"></div>
        </div>

        {/* SVG Icon */}
        <div className="flex-shrink-0">
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20"
          >
            <path
              d="M32 0L42.1823 21.8177L64 32L42.1823 42.1823L32 64L21.8177 42.1823L0 32L21.8177 21.8177L32 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

