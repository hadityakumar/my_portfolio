"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'


export default function Seo() {

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const devTitle = new SplitText('.seo-title', { type: 'words' })
  const devDes = new SplitText('.seo-des', { type: 'lines' })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#seo-dev',
      start: 'top center',
    },
  })

  // Match WebDev timings
  tl.from([devTitle.words, '.dev-icon3'], {
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
  tl.from('.seo-service', {
    opacity: 0,
    duration: 0.4,
    ease: 'power1.out',
    stagger: 0.2
  })
}, [])

  
  return (
    <>
        <div id='seo-dev' className='grid navbar font-bold lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div className='navbar order-1 md:order-1 md:col-start-1'>
            <h1 className='lg:text-8xl navbar md:text-7xl md:px-30 text-[#F2F2F2] sm:text-5xl seo-service text-3xl'>2025</h1>
          </div>
          <div className='navbar order-2 md:order-2 md:col-start-2'>
            <h1 className='lg:text-8xl flex flex-row gap-x-4 navbar flex-wrap text-[#F2F2F2] md:text-7xl seo-title sm:text-5xl text-3xl'>
              BUILD FOR BHARAT FELLOWSHIP  (CDAC)
            </h1>
          </div>
        </div>

        <div className='grid  font-bold navbar lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 place-items-start'>
          <div>
            <h1 className='lg:text-8xl navbar md:text-7xl navbar sm:text-5xl text-3xl'></h1>
          </div>
          <div className='navbar'>
            <p className="max-w-[100ch] text-balance navbar  text-base seo-des font-medium text-[#A2E9E9] text-[#A29E9A]">
              SOFTWARE DEVELOPER INTERN FOCUSING ON EMERGENCY RESPONSE & CRIME ANALYTICS.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className='grid lg:grid-cols-2 navbar md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl  navbar sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance seo-service navbar font-medium text-base sm:text-3xl text-[#aaa7a7] ml-10 sm:ml-0">
              01 — BUILT INTERACTIVE CRIME ANALYTICS DASHBOARD USING SPATIAL ANALYSIS & H3 TILING
            </h2>
            <hr className="w-[400px] border-0 h-[1px] my-2 bg-[#A29E9A]" />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance seo-service navbar font-medium text-base sm:text-3xl text-[#aaa7a7] ml-10 sm:ml-0">
              02 — INTEGRATED AI FEATURES: SPEECH-TO-TEXT MODULE + LLM SUMMARIZATION
            </h2>
            <hr className="w-[400px] border-0 h-[1px] my-2 bg-[#A29E9A]" />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance seo-service navbar font-medium text-base sm:text-3xl text-[#aaa7a7] ml-10 sm:ml-0">
              03 — IMPLEMENTED K-MEANS CLUSTERING FOR OPTIMAL PATROL ZONES & ROUTING
            </h2>
            <hr className="w-[400px] border-0 h-[1px] my-2 bg-[#A29E9A]" />
          </div>
        </div>
    </>
  )
}




