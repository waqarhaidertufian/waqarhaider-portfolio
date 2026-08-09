'use client'

import { motion } from 'framer-motion'
import { Briefcase, Cpu, Database, Zap } from 'lucide-react'

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white overflow-hidden relative"
    >
      {/* Left Column - Solid Black Box */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 max-w-xl"
        >
          {/* Top Badge Label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-yellow-300" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/90">
              MY JOURNEY
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-5xl lg:text-6xl font-serif text-white leading-tight">
              Professional
            </h2>
            <h3 className="text-5xl lg:text-6xl font-serif italic text-yellow-400 leading-tight">
              Experience
            </h3>
          </div>
          
          {/* Sub-description */}
          <p className="text-base lg:text-lg text-white/70 font-sans leading-relaxed max-w-md">
            A timeline of my professional journey in AI and software development, building intelligent solutions and impactful products.
          </p>
          
          {/* Vertical Timeline Tracker */}
          <div className="relative space-y-8">
            {/* Vertical Gold Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-yellow-500/80 via-yellow-400/60 to-yellow-500/80" />
            
            {/* Timeline Node 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-6"
            >
              {/* Glowing Node with Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.7)] flex items-center justify-center animate-pulse">
                  <Zap className="w-2.5 h-2.5 text-black" />
                </div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h4 className="text-xl font-bold text-white">
                  AI Engineer & Full Stack Developer
                </h4>
                <p className="text-sm text-yellow-400/90 font-medium">
                  ZAPTA Technologies, Lahore (Hybrid) | March 2026 – Present
                </p>
                <p className="text-sm text-white/60">
                  Developing intelligent AI systems and architecting modern full-stack web applications.
                </p>
              </div>
            </motion.div>
            
            {/* Timeline Node 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-6"
            >
              {/* Glowing Node with Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.7)] flex items-center justify-center animate-pulse">
                  <Cpu className="w-2.5 h-2.5 text-black" />
                </div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h4 className="text-xl font-bold text-white">
                  AI Engineer Intern
                </h4>
                <p className="text-sm text-yellow-400/90 font-medium">
                  Visibility Bots, Faisalabad | July 2026 – September 2026
                </p>
                <p className="text-sm text-white/60">
                  Implemented computer vision and deep learning modules under industrial guidance.
                </p>
              </div>
            </motion.div>
            
            {/* Timeline Node 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-6"
            >
              {/* Glowing Node with Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.7)] flex items-center justify-center animate-pulse">
                  <Database className="w-2.5 h-2.5 text-black" />
                </div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h4 className="text-xl font-bold text-white">
                  AI/ML Engineer Intern
                </h4>
                <p className="text-sm text-yellow-400/90 font-medium">
                  Systems Limited, Lahore | December 2025 – February 2026
                </p>
                <p className="text-sm text-white/60">
                  Worked on optimizing machine learning workflows and predictive framework analytics.
                </p>
              </div>
            </motion.div>
            
            {/* Timeline Node 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-6"
            >
              {/* Glowing Node with Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.7)] flex items-center justify-center animate-pulse">
                  <Briefcase className="w-2.5 h-2.5 text-black" />
                </div>
              </div>
              
              <div className="space-y-2 flex-1">
                <h4 className="text-xl font-bold text-white">
                  AI Engineer Intern
                </h4>
                <p className="text-sm text-yellow-400/90 font-medium">
                  NetSol Technologies, Lahore | July 2025 – September 2025
                </p>
                <p className="text-sm text-white/60">
                  Assisted in data pipeline processing and core artificial intelligence research modules.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 h-full min-h-screen">
        <img 
          src="/images/Experience.png" 
          alt="Professional Experience" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  )
}