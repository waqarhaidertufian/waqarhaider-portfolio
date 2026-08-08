'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function Certifications() {
  return (
    <section 
      id="certifications" 
      className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white overflow-hidden relative"
    >
      {/* Left Column - Image */}
      <div className="w-full md:w-1/2 h-full min-h-screen">
        <img 
          src="/images/Certificate.png" 
          alt="Certifications" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Right Column - Solid Black Box */}
      <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 max-w-xl"
        >
          {/* Top Badge Label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-yellow-300" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/90">
              PROFESSIONAL GROWTH
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-5xl lg:text-6xl font-serif text-white leading-tight">
              Certifications
            </h2>
            <h3 className="text-5xl lg:text-6xl font-serif italic text-yellow-400 leading-tight">
              & Achievements
            </h3>
          </div>
          
          {/* Sub-description */}
          <p className="text-base lg:text-lg text-white/70 font-sans leading-relaxed max-w-md">
            Industry-recognized certifications and achievements that validate my skills and commitment to excellence.
          </p>
          
          {/* Certifications List */}
          <div className="space-y-6">
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-4"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(234,179,8,0.6)] animate-pulse">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-lg font-bold text-white">
                  Deep Learning Specialization
                </h4>
                <p className="text-sm text-yellow-400/80 font-medium">
                  DeepLearning.AI • 2026
                </p>
              </div>
            </motion.div>
            
            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-4"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(234,179,8,0.6)] animate-pulse">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-lg font-bold text-white">
                  TensorFlow Developer Certificate
                </h4>
                <p className="text-sm text-yellow-400/80 font-medium">
                  Google • 2026
                </p>
              </div>
            </motion.div>
            
            {/* Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-4"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(234,179,8,0.6)] animate-pulse">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-lg font-bold text-white">
                  AWS Solutions Specialist (AI/ML)
                </h4>
                <p className="text-sm text-yellow-400/80 font-medium">
                  Amazon Web Services • 2025
                </p>
              </div>
            </motion.div>
            
            {/* Item 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-start gap-4"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(234,179,8,0.6)] animate-pulse">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-lg font-bold text-white">
                  OpenCV Computer Vision Expert
                </h4>
                <p className="text-sm text-yellow-400/80 font-medium">
                  OpenCV Foundation • 2025
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
