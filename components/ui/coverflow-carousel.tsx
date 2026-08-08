"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetaItem {
  label: string
  value: string
}

interface Slide {
  src: string
  alt: string
  title: string
  subtitle: string
  meta: MetaItem[] | string
}

interface CoverflowCarouselProps {
  slides: Slide[]
  showCaption?: boolean
  showNavigation?: boolean
  showPagination?: boolean
  cardWidth?: string
  rotate?: number
  depth?: number
  loop?: boolean
  className?: string
}

export function CoverflowCarousel({
  slides,
  showCaption = true,
  showNavigation = true,
  showPagination = true,
  cardWidth = "clamp(220px, 28vw, 340px)",
  rotate = 44,
  depth = 0.6,
  loop = true,
  className
}: CoverflowCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isDragging = React.useRef(false)
  const startX = React.useRef(0)
  
  const controls = useAnimation()
  
  const totalSlides = slides.length
  const maxIndex = totalSlides - 1

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (loop && prev === 0) return maxIndex
      return prev > 0 ? prev - 1 : prev
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (loop && prev === maxIndex) return 0
      return prev < maxIndex ? prev + 1 : prev
    })
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    startX.current = e.clientX
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const diff = e.clientX - startX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePrevious()
      } else {
        handleNext()
      }
      isDragging.current = false
    }
  }

  const handlePointerUp = () => {
    isDragging.current = false
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, maxIndex, loop])

  // Force initial layout calculation
  React.useEffect(() => {
    requestAnimationFrame(() => {
      controls.start({
        x: currentIndex * -100,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      })
    })
  }, [])

  React.useEffect(() => {
    controls.start({
      x: currentIndex * -100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  }, [currentIndex, controls])

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full min-h-[400px] overflow-hidden select-none", className)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <motion.div
        className="flex items-center justify-center h-full"
        animate={controls}
        style={{ 
          perspective: 1000,
          transformStyle: 'preserve-3d',
          height: 'var(--cf-card, 300px)'
        }}
      >
        {slides.map((slide, index) => {
          const offset = index - currentIndex
          const isActive = offset === 0
          const isLeft = offset < 0
          const isRight = offset > 0
          const absOffset = Math.abs(offset)
          
          const rotateY = isActive ? 0 : isLeft ? rotate : -rotate
          const scale = isActive ? 1 : 1 - (absOffset * depth)
          const opacity = isActive ? 1 : 1 - (absOffset * depth)
          const zIndex = isActive ? 100 : 10 - absOffset
          const translateZ = isActive ? 0 : -absOffset * 100

          return (
            <motion.div
              key={index}
              className="relative mx-4 shrink-0"
              style={{
                width: cardWidth,
                transformStyle: 'preserve-3d'
              }}
              initial={{ 
                scale: 1 - (Math.abs(index - currentIndex) * depth), 
                opacity: 1 - (Math.abs(index - currentIndex) * depth),
                rotateY: (index - currentIndex) < 0 ? rotate : -rotate,
                translateZ: -Math.abs(index - currentIndex) * 100
              }}
              animate={{
                scale: isActive ? 1 : 1 - (absOffset * depth),
                opacity: isActive ? 1 : 1 - (absOffset * depth),
                rotateY: isActive ? 0 : isLeft ? rotate : -rotate,
                translateZ: isActive ? 0 : -absOffset * 100,
                zIndex: isActive ? 100 : 10 - absOffset
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
                {showCaption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{slide.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{slide.subtitle}</p>
                    <div className="space-y-1">
                      {Array.isArray(slide.meta) ? (
                        slide.meta.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-xs text-white/60">{item.label}:</span>
                            <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                              {item.value}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {slide.meta.split(',').map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {showNavigation && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>
        </>
      )}

      {showPagination && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}