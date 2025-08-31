"use client"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'

export default function How() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    const howTitle = new SplitText('.how-title', {type: 'words'})
    const howDes = new SplitText('.how-des', {type: 'lines'})

    const tl = gsap.timeline({
      scrollTrigger: '.service-section',
    })

    tl.from(howTitle.words, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power1.inOut'
    })
    tl.from('.how-service', {
      opacity: 0,
      duration: 0.3,
      ease: 'power1.inOut'
    })
    tl.from(howDes.lines, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.inOut'
    })
    
  }, [])
  return (
    <>
        <div id='how-can-i-help' className='navbar'>
          <h1 className='lg:text-9xl md:text-7xl navbar sm:text-5xl navbar text-3xl text-[#F2F2F2] how-title font-bold mb-20 text-start'>TIMELINE</h1>
        </div>
        <hr className="w-full border-0 h-[2px] my-0 navbar bg-gradient-to-r from-transparent via-[#F2F2F2] to-transparent" />
    </>
  )
}
