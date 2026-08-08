'use client'

import { useRef, useEffect, useState } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import { LuxuryBrandLogo } from '@/components/ui/luxury-brand-logo'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(err => console.error('Video play error:', err))
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden scroll-mt-0">
      {/* Luxury Brand Logo */}
      <LuxuryBrandLogo />

      {/* Contact Us Button - Top Right */}
      <div className="absolute top-8 right-8 z-50 hidden sm:block">
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-500 rounded-full bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_12px_40px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.2)] hover:bg-white/[0.07] hover:border-white/[0.25] hover:shadow-[0_12px_50px_0_rgba(255,255,255,0.08),inset_0_1px_3px_0_rgba(255,255,255,0.4)] group overflow-hidden"
        >
          {/* Glossy Liquid Fluid Reflection Core */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:animate-[shimmer_1.4s_infinite] transition-transform" style={{ animation: 'none' }} />

          {/* Radial Ambient Fusion Aura */}
          <span className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />

          <span className="relative flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Contact Us
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 text-neutral-300 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>

      {/* Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        >
          <source src="/waqar1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Left Side Typography - Luxury Design */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/3 z-30 flex flex-col items-start gap-2 max-w-xl pointer-events-none">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wider uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          WAQAR HAIDER
        </h1>
        <div className="flex items-center gap-2">
          <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-white/60 to-transparent" />
          <div className="text-xs sm:text-sm md:text-lg font-medium text-zinc-300 tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            <TextEffect 
              per="char" 
              delay={0.6}
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.6
                    }
                  }
                },
                item: {
                  hidden: { opacity: 0, filter: 'blur(10px)' },
                  visible: { 
                    opacity: 1, 
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.7,
                      ease: 'easeOut'
                    }
                  }
                }
              }}
            >
              AI ENGINEER & FULL STACK DEVELOPER
            </TextEffect>
          </div>
        </div>
      </div>

      {/* Premium Floating Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500">
          {/* Backdrop overlay that blurs out the website context behind */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 animate-fade-in"
            onClick={() => setIsContactModalOpen(false)}
          />

          {/* Small Floating Micro Card Body */}
          <div className="relative w-full max-w-sm rounded-2xl bg-neutral-950/75 backdrop-blur-2xl border border-white/[0.08] p-6 text-center shadow-[0_25px_70px_-10px_rgba(0,0,0,0.9),inset_0_1px_2px_0_rgba(255,255,255,0.25)] animate-scale-up overflow-hidden group">

            {/* Internal Fluid Reflection Effects */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Close Window Circle Button */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/[0.05]"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 mb-5 mt-2">
              Quick Connect
            </h3>

            {/* Active Communication Interactivity Tracks */}
            <div className="flex flex-col gap-3 text-left">

              {/* Quick Email Container Option */}
              <a
                href="mailto:waqarhaidertufian@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all group/item"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] text-neutral-400 group-hover/item:text-white group-hover/item:bg-white/[0.08] transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Email Me</p>
                  <p className="text-sm font-semibold text-neutral-200 truncate">waqarhaidertufian@gmail.com</p>
                </div>
              </a>

              {/* Quick Phone Call Container Option */}
              <a
                href="https://wa.me/923271086970"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all group/item"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] text-neutral-400 group-hover/item:text-white group-hover/item:bg-white/[0.08] transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72l.54 2.21a1 1 0 01-.24.97l-2.02 2.02a11.04 11.04 0 004.83 4.83l2.02-2.02a1 1 0 01.97-.24l2.21.54a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">WhatsApp</p>
                  <p className="text-sm font-semibold text-neutral-200">+92 3271086970</p>
                </div>
              </a>

            </div>

            <p className="text-[11px] text-neutral-600 mt-4 tracking-wide">Click outside or press backdrop to dismiss.</p>
          </div>
        </div>
      )}
    </section>
  )
}
