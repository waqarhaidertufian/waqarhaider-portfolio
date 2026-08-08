'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function LuxuryLogo() {
  return (
    <Link href="#home" className="pointer-events-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        {/* Ambient Gradient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Glassmorphism Badge */}
        <div className="relative w-11 h-11 bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
          
          {/* Metallic Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Monogram */}
          <span className="relative text-white font-bold text-lg tracking-tight z-10">
            W.
          </span>
          
          {/* Shimmer Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"
            initial={false}
          />
        </div>
      </motion.div>
    </Link>
  )
}
