'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function LuxuryBrandLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="absolute top-8 left-8 z-40"
    >
      <Link href="#home" className="block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative group"
          style={{ willChange: 'transform' }}
        >
          {/* Ambient Glow Backdrop */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #3b82f6, #10b981)',
              backgroundSize: '300% 300%',
              animation: 'gradient-shift 8s ease infinite',
              willChange: 'opacity, filter'
            }}
          />
          
          {/* Logo Text */}
          <div className="relative flex items-center gap-0.5">
            <motion.span 
              className="font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 via-fuchsia-500 to-indigo-500 animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-500"
              style={{ willChange: 'background-position' }}
            >
              W
            </motion.span>
            <motion.span 
              className="font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-cyan-400 via-fuchsia-500 to-indigo-500 animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-500"
              style={{ willChange: 'background-position, opacity' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              .
            </motion.span>
          </div>
        </motion.div>
      </Link>
      
      {/* CSS Keyframes for Gradient Animation */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </motion.div>
  )
}
