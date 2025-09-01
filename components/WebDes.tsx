"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'


export default function WebDes() {

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const devTitle = new SplitText('.des-title', { type: 'words' })
  const devDes = new SplitText('.des-des', { type: 'lines' })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#web-des',
      start: 'top center',
    },
  })

  // Match WebDev timings
  tl.from([devTitle.words, '.dev-icon2'], {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power1.out'
  })
  tl.from(devDes.lines, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power1.out'
  })
  tl.from('.des-service', {
    opacity: 0,
    duration: 0.4,
    ease: 'power1.out',
    stagger: 0.2
  })
}, [])

  
  return (
    <>
        <div id='web-des' className='grid font-bold navbar lg:grid-cols-2 md:grid-cols-2 how-can sm:grid-cols-1 place-items-start'>
          <div className='navbar'>
            <h1 className='lg:text-8xl  md:text-7xl md:px-30 sm:text-5xl navbar text-[#F2F2F2] des-service text-3xl'>2024</h1>
          </div>
          <div className='navbar'>
            <h1 className='lg:text-8xl flex flex-row flex-wrap gap-x-4 text-[#F2F2F2] navbar md:text-7xl des-title sm:text-5xl text-3xl'>
              RESEARCH CONSULTANT WORLDQUANT LLC
            </h1>
          </div>
        </div>
        <div className='grid navbar  font-bold lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 place-items-start'>
          <div>
            <h1 className='lg:text-8xl navbar md:text-7xl sm:text-5xl text-3xl'></h1>
          </div>
          <div className='navbar'>
            <p className="max-w-[100ch] text-balance text-base navbar font-medium des-des text-[#A2E9E9] text-[#A29E9A]">
              WORKED ON QUANTITATIVE RESEARCH AND STRATEGY DEVELOPMENT FOR FINANCIAL SIMULATIONS.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance des-service navbar font-medium text-base sm:text-3xl text-[#aaa7a7] ml-10 sm:ml-0">
              01 — DEVELOPED PRODUCTION-LEVEL TRADING STRATEGIES USING BRAIN’S SIMULATION PLATFORM
            </h2>
            <hr className="w-[400px] border-0 h-[1px] my-2 bg-[#A29E9A]" />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance des-service navbar font-medium text-base sm:text-3xl text-[#aaa7a7] ml-10 sm:ml-0">
              02 — APPLIED ADVANCED QUANTITATIVE TECHNIQUES & DATA ANALYSIS ON MARKET DATA
            </h2>
            <hr className="w-[400px] border-0 h-[1px] my-2 bg-[#A29E9A]" />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance des-service navbar font-medium text-base sm:text-3xl text-[#aaa7a7] ml-10 sm:ml-0">
              03 — CREATED 30+ STRATEGIES FOR OUT-OF-SAMPLE TESTING
            </h2>
            <hr className="w-[400px] border-0 h-[1px] my-2 bg-[#A29E9A]" />
          </div>
        </div>

        <hr className="w-full border-0 h-[2px] my-10 bg-gradient-to-r from-transparent via-[#F2F2F2] to-transparent" />
    </>
  )
}

