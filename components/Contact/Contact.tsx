'use client'

import { motion } from 'framer-motion'
import GradientShimmer from '@/components/ui/gradient-shimmer'

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/waqarhaidertufian",
      icon: (
        <svg className="h-5 w-5 text-neutral-400 hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/waqar-haider-063083322/",
      icon: (
        <svg className="h-5 w-5 text-neutral-400 hover:text-blue-400 transition-colors fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/waqarhaider_3?igsh=NGNoOXY5czV0aDJl&utm_source=qr",
      icon: (
        <svg className="h-5 w-5 text-neutral-400 hover:text-pink-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/923271086970",
      icon: (
        <svg className="h-5 w-5 text-neutral-400 hover:text-green-400 transition-colors fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.025-5.116-2.891-6.983A9.799 9.799 0 0 0 12.008 1.84c-5.442 0-9.867 4.422-9.87 9.865-.001 1.688.45 3.332 1.307 4.771l-.995 3.637 3.72-.976-.523-.337z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="relative w-full py-16 sm:py-20 lg:py-24 bg-black block clear-both">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <GradientShimmer 
              as="h2" 
              className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4" 
              gradient="twilight"
            >
              Let's Work Together
            </GradientShimmer>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have an idea worth building? Let's turn it into an intelligent, high-impact digital experience.
            </p>
          </div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto p-8 sm:p-14 rounded-[2rem] bg-gradient-to-b from-neutral-900/50 to-neutral-950/80 backdrop-blur-2xl border border-white/[0.05] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9),inset_0_1px_1px_0_rgba(255,255,255,0.1)] overflow-hidden group"
          >
            {/* Enhanced Animated Ambient Background Glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px] opacity-80 pointer-events-none group-hover:scale-125 transition-transform duration-1000 ease-out" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-emerald-500/5 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Premium Minimal Badge */}
              <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white/[0.02] border border-white/[0.06] text-neutral-400 mb-6 shadow-inner backdrop-blur-md">
                CONNECT
              </span>

              {/* Sharp Crisp Gradient Title */}
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-5">
                Get In Touch
              </h2>

              {/* Description with enhanced line-height */}
              <p className="max-w-xl text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Sleek Minimal Contact Floating Pill */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 py-3.5 rounded-xl bg-neutral-900/60 border border-white/[0.04] text-xs sm:text-sm text-neutral-400 font-medium mb-10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                <a href="mailto:waqarhaidertufian@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                  <span className="text-neutral-500 font-normal">Email:</span>
                  <span className="text-neutral-200 font-medium tracking-wide">waqarhaidertufian@gmail.com</span>
                </a>
                <span className="hidden sm:inline text-neutral-800">|</span>
                <a href="https://wa.me/923271086970" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group/link">
                  <span className="text-neutral-500 font-normal">Phone:</span>
                  <span className="text-neutral-200 font-medium tracking-wide">+92 3271086970</span>
                </a>
              </div>

              {/* Ultra-Premium Button Engine */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-10"
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
                  href="/Waqar_Haider_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-full sm:w-auto px-9 py-4 text-sm font-bold tracking-wide text-neutral-200 rounded-xl bg-white/[0.02] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/[0.05] hover:border-white/[0.12] hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Highly Polished Floating Social Icons Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900/60 border border-white/[0.04] text-neutral-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.02] hover:-translate-y-1 shadow-md transition-all duration-300"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
