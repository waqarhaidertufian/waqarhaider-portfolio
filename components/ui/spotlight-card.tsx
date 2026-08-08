'use client'

import { ReactNode, useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface GlowCardProps {
  children: ReactNode
  className?: string
  customSize?: boolean
  glowColor?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'red'
}

const glowColors = {
  blue: 'from-cyan-500/30 to-sky-500/30',
  purple: 'from-violet-500/30 to-purple-500/30',
  green: 'from-emerald-500/30 to-green-500/30',
  orange: 'from-amber-500/30 to-orange-500/30',
  pink: 'from-rose-500/30 to-pink-500/30',
  red: 'from-red-500/30 to-rose-500/30',
}

const glowShadows = {
  blue: 'shadow-[0_0_50px_rgba(6,182,212,0.5)]',
  purple: 'shadow-[0_0_50px_rgba(139,92,246,0.5)]',
  green: 'shadow-[0_0_50px_rgba(16,185,129,0.5)]',
  orange: 'shadow-[0_0_50px_rgba(251,146,60,0.5)]',
  pink: 'shadow-[0_0_50px_rgba(244,114,182,0.5)]',
  red: 'shadow-[0_0_50px_rgba(239,68,68,0.5)]',
}

const glowBorders = {
  blue: 'border-cyan-500/40',
  purple: 'border-violet-500/40',
  green: 'border-emerald-500/40',
  orange: 'border-amber-500/40',
  pink: 'border-rose-500/40',
  red: 'border-red-500/40',
}

export function GlowCard({ children, className = '', customSize = false, glowColor = 'blue' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const rafId = useRef<number>(0)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 })

  const onMouseMove = useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      const { left, top } = currentTarget.getBoundingClientRect()
      x.set(clientX - left)
      y.set(clientY - top)
    })
  }, [x, y])

  const onMouseLeave = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }, [x, y])

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  const backgroundX = useTransform(mouseX, (val) => `${val}px`)
  const backgroundY = useTransform(mouseY, (val) => `${val}px`)

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-2xl border border-white/10 hover:${glowBorders[glowColor]} ${customSize ? 'w-full' : ''} ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backgroundImage: isHovered
          ? `radial-gradient(600px circle at ${backgroundX} ${backgroundY}, ${glowColors[glowColor]}, transparent 40%)`
          : 'none',
        boxShadow: isHovered 
          ? `0 20px 50px rgba(0,0,0,0.5), ${glowShadows[glowColor]}`
          : '0 20px 50px rgba(0,0,0,0.5)',
      }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Inner Reflection - Specular Glare */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.2)',
        }}
      />
      
      {children}
    </motion.div>
  )
}
