"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'


export default function WebDev() {

  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  const devTitle = new SplitText('.dev-title', { type: 'words' })
  const devDes = new SplitText('.dev-des', { type: 'lines' })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#web-dev',
      start: 'top center',
    },
  })

  tl.from([devTitle.words, '.dev-icon'], {
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
  tl.from('.dev-service', {
    opacity: 0,
    duration: 0.4,
    ease: 'power1.out',
    stagger: 0.2
  })
}, [])


  
  return (
    <>
        <div id='web-dev' className='grid navbar font-bold  navbar lg:grid-cols-2 md:grid-cols-2  how-can sm:grid-cols-1 place-items-start'>
          <div className='navbar'>
            <h1 className='lg:text-8xl  navbar md:text-7xl md:px-30 navbar text-[#F2F2F2] sm:text-5xl dev-service text-3xl'>2021</h1>
          </div>
          <div className='navbar'>
            <h1 className='lg:text-8xl flex flex-row gap-x-4 navbar flex-wrap text-[#F2F2F2] md:text-7xl dev-title sm:text-5xl text-3xl'>
            ENROLLED AT IIT BHUBANESWAR
          </h1>
          </div>
        </div>
        <div className='grid  font-bold navbar lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 place-items-start'>
          <div>
            <h1 className='lg:text-8xl navbar md:text-7xl navbar sm:text-5xl text-3xl'></h1>
          </div>
          <div className='navbar'>
            <p className="max-w-[100ch] text-balance navbar  text-base dev-des font-medium text-[#A2E9E9] text-[#A29E9A] ">STARTED MY B.TECH + M.TECH PROGRAM, BUILT A FOUNDATION IN PROGRAMMING, ALGORITHMS, AND AI/ML.</p>        </div>
        </div>

        {/* Highlights */}
        <div className='grid lg:grid-cols-2 navbar md:grid-cols-2 sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl navbar sm:text-5xl text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance dev-service navbar font-medium text-3xl text-[#aaa7a7]">
              01 — PROGRAMMING FUNDAMENTALS
            </h2>
            <hr className="w-[400px] border-0 h-[1px] navbar my-2 bg-[#A29E9A]" />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 navbar sm:grid-cols-1 place-items-start'>
          <div><h1 className='lg:text-8xl md:text-7xl sm:text-5xl navbar text-3xl'></h1></div>
          <div className='navbar'>
            <h2 className="text-balance dev-service navbar font-medium text-3xl text-[#aaa7a7]">
              02 — DATA STRUCTURES & ALGORITHMS
            </h2>
            <hr className="w-[400px] border-0 h-[1px] navbar my-2 bg-[#A29E9A]" />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 navbar sm:grid-cols-1 place-items-start'>
          <div></div>
          <div className='navbar'>
            <h2 className="text-balance dev-service navbar font-medium text-3xl text-[#aaa7a7]">
              03 — AI/ML AND DEEP LEARNING
            </h2>
            <hr className="w-[400px] border-0 h-[1px] navbar my-2 bg-[#A29E9A]" />
          </div>
        </div>

        <hr className="w-full border-0 h-[2px] my-10 bg-gradient-to-r from-transparent via-[#F2F2F2] to-transparent" />
    </>
  )
  
}






