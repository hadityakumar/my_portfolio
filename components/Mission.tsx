'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { Roboto_Flex } from 'next/font/google'

const robotoFlexLocal = Roboto_Flex({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700', '800'],
  display: 'swap',
})

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
  gsap.to('body h1:not(.navbar *):not(#skills *), body h2:not(.navbar *):not(#skills *), body h3:not(.navbar *):not(#skills *), body p:not(.navbar *):not(#skills *), body div:not(.navbar *):not(#skills):not(#skills *), body a:not(.navbar *):not(#skills *), body span:not(.navbar *):not(#skills *), body li:not(.navbar *):not(#skills *), body svg path:not(.navbar *):not(#skills *)', 
          { color: '#F2F2F2', fill: '#F2F2F2', duration: 0.3 })
      },
      onLeave: () => {
        gsap.to(document.body, { backgroundColor: '#F2F2F2', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#0D0D0D', duration: 0.3 })
  gsap.to('body h1:not(.navbar *):not(#skills *), body h2:not(.navbar *):not(#skills *), body h3:not(.navbar *):not(#skills *), body p:not(.navbar *):not(#skills *), body div:not(.navbar *):not(#skills):not(#skills *), body a:not(.navbar *):not(#skills *), body span:not(.navbar *):not(#skills *), body li:not(.navbar *):not(#skills *), body svg path:not(.navbar *):not(#skills *)', 
          { color: '#0D0D0D', fill: '#0D0D0D', duration: 0.3 })
        gsap.to('#contact-section *', { color: '#F2F2F2', fill: '#F2F2F2', duration: 0.3 })
        gsap.to('.button', { color: '#0D0D0D', fill: '#F2F2F2', duration: 0.3 })
        gsap.to('.me *', { color: '#F2F2F2', fill: '#0D0D0D', duration: 0.3 })
      },
      onEnterBack: () => {
        gsap.to(document.body, { backgroundColor: '#0D0D0D', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#F2F2F2', duration: 0.3 })
  gsap.to('body h1:not(.navbar *):not(#skills *), body h2:not(.navbar *):not(#skills *), body h3:not(.navbar *):not(#skills *), body p:not(.navbar *):not(#skills *), body div:not(.navbar *):not(#skills):not(#skills *), body a:not(.navbar *):not(#skills *), body span:not(.navbar *):not(#skills *), body li:not(.navbar *):not(#skills *), body svg path:not(.navbar *):not(#skills *)', 
          { color: '#F2F2F2', fill: '#F2F2F2', duration: 0.3 })
      },
      onLeaveBack: () => {
        gsap.to(document.body, { backgroundColor: '#F2F2F2', duration: 0.3 })
        gsap.to(hrElements, { backgroundColor: '#0D0D0D', duration: 0.3 })
  gsap.to('body h1:not(.navbar *):not(#skills *), body h2:not(.navbar *):not(#skills *), body h3:not(.navbar *):not(#skills *), body p:not(.navbar *):not(#skills *), body div:not(.navbar *):not(#skills):not(#skills *), body a:not(.navbar *):not(#skills *), body span:not(.navbar *):not(#skills *), body li:not(.navbar *):not(#skills *), body svg path:not(.navbar *):not(#skills *)', 
          { color: '#0D0D0D', fill: '#0D0D0D', duration: 0.3 })
      }
    })
  }, [])

  return (
    <div
      id="mission"
      className="min-h-screen md:h-screen py-8 md:py-0 flex items-center justify-center p-3"
    >
      <div className="max-w-6xl w-full flex items-center gap-12">
  {/* Text Content */}
  <div className={`flex-1 px-4 sm:px-0 ${robotoFlexLocal.className}`}>
          <h1
            className="text-base xs:text-lg sm:text-xl md:text-[2.75rem] md:line-height font-thin leading-relaxed sm:leading-tight tracking-wide"
            style={{ textAlign: 'justify' }}
          >
            Hi, I'm Aditya — A Full-Stack Developer And AI Enthusiast From IIT Bhubaneswar. With Hands-On Experience In Building Scalable Web Apps, ML-Driven Platforms, And AI-Powered Tools, I Thrive On Transforming Innovative Ideas Into Real-World Solutions. I’ve Interned At CDAC Where I Worked On Crime Analytics And AI Integration, And I Love Creating Projects That Blend Functionality With Creativity.
          </h1>

          {/* Horizontal line */}
          <div className="w-full h-px bg-current mt-8 sm:mt-12"></div>
        </div>

  {/* SVG Icon (hidden on small screens) */}
  <div className="hidden md:flex flex-shrink-0">
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

