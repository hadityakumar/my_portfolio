'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Navbar from '@/components/layout/Navbar'
import localFont from 'next/font/local'

const shaheenFont = localFont({
  src: '../public/fonts/shaheen.ttf',
})

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.delayedCall(0.3, () => {  
      gsap.from('.letter', {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power4.out',
      });

      gsap.from('.letter-small', {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power4.out',
      });

      gsap.to('.hor-line', {
        scaleX: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.to('.ver-line', {
        scaleY: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // New: center divider animation (expands from center)
      gsap.to('.name-divider', {
        scaleX: 1,
        duration: 1,
        delay: 0.35,
        ease: 'power3.out',
      });
      gsap.to('.name-divider-glow', {
        scaleX: 1,
        duration: 1.2,
        delay: 0.35,
        ease: 'power2.out',
      });

      gsap.from('.bottom-text', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from('.star-svg', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 1,
        ease: 'power4.out',
      });
    });
  }, { scope: container });

  return (
    <div id='home' ref={container} className="h-screen w-full text-[#0D0D0D] relative overflow-hidden">
      <Navbar />
      {/* Horizontal lines */}
      <div className="hor-line hr absolute top-0 left-0 w-full h-[1px] bg-[#0D0D0D] scale-x-0 origin-left" />
      <div className="hor-line hr absolute left-0 w-full h-[1px] bg-[#0D0D0D] scale-x-0 origin-left" style={{ top: '80%' }} />
      <div className="hor-line hr absolute bottom-0 left-0 w-full h-[1px] bg-[#0D0D0D] scale-x-0 origin-left" />

      {/* Vertical lines */}
      <div className="ver-line hr absolute left-0 top-0 h-full w-[1px] bg-[#0D0D0D] scale-y-0 origin-top" />
      <div className="ver-line hr absolute right-0 top-0 h-full w-[1px] bg-[#0D0D0D] scale-y-0 origin-top" />
      <div className="ver-line hr absolute top-[80%] bottom-0 w-[1px] bg-[#0D0D0D] scale-y-0 origin-top" style={{ left: '33%' }} />
      <div className="ver-line hr absolute top-[80%] bottom-0 w-[1px] bg-[#0D0D0D] scale-y-0 origin-top" style={{ left: '66%' }} />

      {/* Content */}
      <div className="h-[80%] flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <h1 className={` text-[clamp(5rem,20vw,15rem)] leading-none`}>
            <span className="letter inline-block">
              H Aditya Kumar
            </span>
          </h1>

          {/* Center divider (expands from a point) */}
          <div className="relative mx-auto mt-6 sm:mt-8 h-[2px] w-[min(72vw,560px)]">
            <div className="name-divider absolute inset-0 origin-center scale-x-0 rounded-full bg-gradient-to-r from-transparent via-[#0D0D0D] to-transparent will-change-transform" />
            <div className="name-divider-glow absolute inset-0 origin-center scale-x-0 rounded-full bg-gradient-to-r from-transparent via-[#0D0D0D]/35 to-transparent blur-[3px] will-change-transform" />
          </div>

          {/* Subheading */}
          <div
            className={` letter-small mt-6 text-[clamp(1rem,3.5vw,2rem)] tracking-[0.35em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#0D0D0D] to-[#5C5C5C] opacity-90`}
          >
            IIT Bhubaneswar
          </div>
        </div>
      </div>

  <div className="h-[20%] flex items-center px-4">
        <div className="bottom-text shrink-0 basis-[38%] md:basis-[34%] lg:basis-[32%] text-center text-[clamp(1rem,5vh,2rem)] whitespace-nowrap px-3">
          Full-Stack Developer
        </div>
        <div className="bottom-text flex-1 min-w-0 text-center text-[clamp(1rem,5vh,2rem)] px-3">
          AI & Data Science Enthusiast
        </div>
        <div className="bottom-text flex-1 min-w-0 text-center text-[clamp(1rem,5vh,2rem)] px-3">
          Ex-SDE Intern at CDAC
        </div>
      </div>
    </div>
  );
}











