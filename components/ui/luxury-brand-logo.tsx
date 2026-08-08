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
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative group"
        >
          {/* Logo Text */}
          <div className="relative flex items-center gap-0.5">
            <span className="text-3xl font-bold text-white tracking-tight group-hover:text-white transition-colors duration-500">
              W
            </span>
            <span className="text-3xl font-bold text-sky-400 tracking-tight shadow-[0_0_20px_rgba(56,189,248,0.8)] group-hover:shadow-[0_0_30px_rgba(56,189,248,1)] group-hover:text-sky-300 transition-all duration-500">
              .
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
