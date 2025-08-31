'use client'
import Image from 'next/image'
import projects from '@/lib/projects.js'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import localFont from 'next/font/local'


const shaheenFont = localFont({
  src: '../public/fonts/shaheen.ttf',
})



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleSectionRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<Array<HTMLDivElement | null>>([])
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    // Calculate the proper width for the scroll container
    const calculateContainerWidth = () => {
      if (scrollContainerRef.current) {
        // Get the width of a single project card
        const cardWidth = window.innerWidth < 640 ? 
          window.innerWidth * 0.8 : // 80vw on mobile
          400; // 400px on larger screens
        
        // Get the gap between cards (24px from the gap-6 class)
        const gap = 24;
        
        // Calculate total width including all gaps
        const totalWidth = (projects.length * cardWidth) + ((projects.length - 1) * gap);
        
        // Add viewport width to ensure the last project is fully visible
        const extraSpace = window.innerWidth;
        
        setContainerWidth(totalWidth + extraSpace);
        
        // Refresh ScrollTrigger after calculation
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }
    };

    // Initial calculation
    calculateContainerWidth();

    // Recalculate on window resize
    window.addEventListener('resize', calculateContainerWidth);
    
    return () => {
      window.removeEventListener('resize', calculateContainerWidth);
    };
  }, []);

  useEffect(() => {
    if (!containerWidth) return; // Wait for container width to be calculated

  // Removed normalizeScroll to avoid conflicts with pinned horizontal scroll

    const ctx = gsap.context(() => {
      // Title section animations (guard nulls)
      if (titleSectionRef.current) {
        const titleSvgs = titleSectionRef.current.querySelectorAll('svg')
        const titleText = titleSectionRef.current.querySelector('h1')

        gsap.set(titleSvgs, { opacity: 0, y: 20 })
        if (titleText) gsap.set(titleText, { opacity: 0, y: 30 })

        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: titleSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        })

        titleTl
          .to(titleSvgs, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1
          })
          .to(
            titleText,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.6"
          )
      }

      // Horizontal scroll animation for projects
      if (scrollContainerRef.current && containerWidth > 0) {
        const viewportWidth = window.innerWidth
        const scrollDistance = containerWidth - viewportWidth

        // Create a named horizontal timeline so children can link via containerAnimation
    const horizontal = gsap.timeline({
          scrollTrigger: {
            id: 'horizontal-scroll',
            trigger: scrollContainerRef.current,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${scrollDistance}`,
            invalidateOnRefresh: true,
      anticipatePin: 1,
            refreshPriority: 100,
            markers: false, // Set to true for debugging if needed
          },
        })
        .to(scrollContainerRef.current, {
          x: -scrollDistance,
          ease: 'none',
        })

        // Individual project card animations
        const isSmall = window.innerWidth < 768
        const initialVisible = isSmall ? 2 : 3

        projectsRef.current.forEach((project, index) => {
          if (!project) return

          const content = project.querySelector('.project-content') as HTMLElement | null
          const image = project.querySelector('.project-image') as HTMLElement | null

          const targets = [content, image].filter(Boolean) as HTMLElement[]

          if (targets.length) {
            if (index < initialVisible) {
              // Show the first N cards immediately when section pins
              gsap.set(targets, { opacity: 1, y: 0 })
              return
            }

            // Others animate in a bit earlier
            gsap.set(targets, { opacity: 0, y: 40 })

            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: project,
                start: "left 85%",
                end: "right center",
                horizontal: true,
                containerAnimation: horizontal,
                toggleActions: "play none none reverse"
              }
            })
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [containerWidth])

  return (
    <div ref={containerRef} id='projects' className='min-h-screen bg-gray-100 relative'>
      {/* WORK text background element */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className={`text-[20vw] ${shaheenFont.className} md:text-[12vw] text-[#0D0D0D] tracking-wider select-none sticky top-1/2 transform -translate-y-1/2`}>
          BEST PROJECTS
        </h2>
      </div>
      
      <hr className='my-10 mx-auto max-w-4xl border-gray-300 relative z-10' />
      <div className='container mx-auto px-4 relative z-10'>
        <div 
          ref={titleSectionRef}
          className="flex flex-row flex-wrap justify-center p-3 gap-6 items-center mb-12 relative z-10"
        >
          <h1 className="text-6xl font-bold">PROJECTS</h1>
        </div>
        {/* Hide scrollbar but keep functionality */}
  <div className="overflow-visible pb-6 relative z-10">
          {/* Custom scrollbar container - hidden but allows GSAP scrolling */}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap h-[750px] md:h-[800px] gap-6 relative z-20 will-change-transform"
            style={{ width: `${containerWidth}px` }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { projectsRef.current[index] = el }}
                className="flex-shrink-0 w-[80vw] sm:w-[400px] flex flex-col justify-center items-center relative z-20"
              >
                <div className="project-image">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={600}
                    className="object-cover rounded-lg shadow-lg"
                    onError={() => console.error(`Failed to load image: ${project.img}`)}
                  />
                </div>
                <div className="project-content mt-4 w-full max-w-[400px] flex justify-between items-center">
                  <h1 className="text-xl font-semibold">{project.title}</h1>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size='sm' className='text-md'>View</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
