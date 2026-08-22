'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import GradientShimmer from '@/components/ui/gradient-shimmer'
import { SocialConnect } from '@/components/ui/connect-with-us'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-8 sm:py-10 lg:py-12 bg-black block clear-both">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <GradientShimmer 
              as="h2" 
              className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight mb-3" 
              gradient="twilight"
            >
              Let's Work Together
            </GradientShimmer>
            <p className="text-white/60 max-w-2xl mx-auto text-sm">
              Have an idea worth building? Let's turn it into an intelligent, high-impact digital experience.
            </p>
          </div>

          {/* 3D Glowing Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 border border-gray-800/80 shadow-2xl backdrop-blur-3xl overflow-hidden p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02]"
            style={{
              boxShadow: '0 0 50px rgba(139, 92, 246, 0.3), 0 0 80px rgba(124, 58, 237, 0.2)'
            }}
          >
            {/* Enhanced Animated Ambient Background Glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px] opacity-80 pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-emerald-500/5 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Premium Minimal Badge */}
              <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white/[0.02] border border-white/[0.06] text-neutral-400 mb-4 shadow-inner backdrop-blur-md">
                CONNECT
              </span>

              {/* Sharp Crisp Gradient Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-3">
                Get In Touch
              </h2>

              {/* Description with enhanced line-height */}
              <p className="max-w-xl text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Sleek Minimal Contact Floating Pill */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 py-3.5 rounded-xl bg-neutral-900/60 border border-white/[0.04] text-xs sm:text-sm text-neutral-400 font-medium mb-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                <a href="mailto:waqarhaidertufian@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-neutral-200 font-medium tracking-wide">waqarhaidertufian@gmail.com</span>
                </a>
                <span className="hidden sm:inline text-neutral-800">|</span>
                <a href="https://wa.me/923271086970" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-neutral-200 font-medium tracking-wide">+92 3271086970</span>
                </a>
              </div>

              {/* Ultra-Premium Button Engine */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6"
              >
                {/* Active White Shimmer Send Email Button */}
                <a
                  href="mailto:waqarhaidertufian@gmail.com"
                  className="relative flex items-center justify-center w-full sm:w-auto px-9 py-4 text-sm font-bold tracking-wide rounded-xl bg-white text-black hover:bg-neutral-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send Email
                </a>

                {/* Translucent Glass Outline Download Resume Button */}
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-full sm:w-auto px-9 py-4 text-sm font-bold tracking-wide text-neutral-200 rounded-xl bg-white/[0.02] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/[0.05] hover:border-white/[0.12] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Animated 3D Glowing Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full"
              >
                <SocialConnect />
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
