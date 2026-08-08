"use client"

import React, { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Lenis from "lenis"
import { GitBranch, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export interface ProjectCardData {
  id: string | number
  slug: string
  title: string
  image: string
  description?: string
  fullOverview?: string
  techStack?: string[]
  features?: string[]
  githubUrl?: string
  liveDemoUrl?: string
  domain?: string
  stats?: {
    accuracy?: string
    speed?: string
    impact?: string
    uptime?: string
  }
}

interface StackedCardsProps {
  projects: ProjectCardData[]
  className?: string
}

export function StackedCards({ projects, className }: StackedCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
  const totalCards = projects.length

  // Initialize Lenis for smooth scrolling
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0, // Reduced duration for faster response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Initialize dots with first one active
  React.useEffect(() => {
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        if (index === 0) {
          gsap.set(dot, {
            scale: 1.25,
            opacity: 1,
            backgroundColor: "#ffffff",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
          })
        } else {
          gsap.set(dot, {
            scale: 1,
            opacity: 0.3,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "none"
          })
        }
      }
    })
  }, [totalCards])

  useGSAP(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (cards.length === 0) return

    // Set initial positions with proper z-index stacking
    cards.forEach((card, index) => {
      if (index === 0) {
        gsap.set(card, { 
          y: "0%", 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          zIndex: 1
        })
      } else {
        gsap.set(card, { 
          y: "100%", 
          opacity: 0, 
          scale: 1, 
          rotation: 0,
          zIndex: index + 1 // Higher z-index for each subsequent card
        })
      }
    })

    // Create a timeline for the stacked card animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${windowHeight * (totalCards * 1.2)}`, // Reduced scroll distance for faster transitions
        scrub: 0.5, // Lower scrub for snappier, more responsive scroll
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Calculate active card index based on scroll progress
          const progress = self.progress
          const newIndex = Math.min(Math.floor(progress * totalCards), totalCards - 1)
          setActiveIndex(newIndex)
          
          // Update dots appearance
          dotsRef.current.forEach((dot, index) => {
            if (dot) {
              if (index === newIndex) {
                gsap.to(dot, {
                  scale: 1.25,
                  opacity: 1,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  duration: 0.3
                })
              } else {
                gsap.to(dot, {
                  scale: 1,
                  opacity: 0.3,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "none",
                  duration: 0.3
                })
              }
            }
          })
        }
      },
    })

    // Animate each card
    cards.forEach((card, index) => {
      if (index === 0) return // Skip the first card (it stays in place)

      const prevCard = cards[index - 1]
      
      // Previous card scales down and rotates
      tl.to(prevCard, {
        scale: 0.7,
        rotation: 5,
        zIndex: index, // Previous card gets lower z-index as it moves down
        duration: 1,
        ease: "power1.out", // Snappier easing for responsive feel
      }, (index - 1) * 0.8) // Reduced stagger for faster card progression

      // Current card slides up from below with higher z-index
      tl.fromTo(card, 
        { y: "100%", opacity: 0, zIndex: index + 1 },
        { 
          y: "0%", 
          opacity: 1,
          zIndex: index + 1, // Current card gets higher z-index as it comes up
          duration: 1,
          ease: "power1.out", // Snappier easing for responsive feel
        },
        (index - 1) * 0.8 // Reduced stagger for faster card progression
      )
    })

    // Set up ResizeObserver for ScrollTrigger refresh
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Vertical Progress Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3">
        {/* Vertical Line */}
        <div className="w-0.5 bg-white/20 absolute left-1/2 top-0 bottom-0 -z-10" />
        
        {/* Dots */}
        {projects.map((_, index) => (
          <div
            key={index}
            ref={(el) => { dotsRef.current[index] = el }}
            onClick={() => {
              // Scroll to specific card position using ScrollTrigger
              const scrollTrigger = ScrollTrigger.getAll().find(st => st.trigger === containerRef.current)
              if (scrollTrigger) {
                const targetProgress = index / totalCards
                const scrollPosition = scrollTrigger.start + (targetProgress * (scrollTrigger.end - scrollTrigger.start))
                window.scrollTo({
                  top: scrollPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className={cn(
              "w-3 h-3 rounded-full cursor-pointer transition-all duration-300",
              index === activeIndex 
                ? "bg-white scale-125 shadow-lg" 
                : "bg-white/30 scale-100"
            )}
          />
        ))}
      </div>

      <div className="relative w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-20 h-[85vh]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => { cardRefs.current[index] = el }}
            className={index === 0 ? "relative w-full h-full" : "absolute top-0 left-0 right-0 w-full h-full"}
          >
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl h-full">
              {/* Full-Bleed Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover rounded-3xl z-0"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Project Content */}
              <div className="relative z-20 flex h-full flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{project.title}</h3>
                {project.description && (
                  <p className="text-zinc-300 mb-4 line-clamp-2 text-sm sm:text-base md:text-lg lg:text-xl">{project.description}</p>
                )}
                
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm md:text-base rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base md:text-lg"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackedCards
