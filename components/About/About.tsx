'use client'

import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import NumberFlow from '@number-flow/react'
import GradientShimmer from '@/components/ui/gradient-shimmer'
import { MagicText } from '@/components/ui/magic-text'

interface StatItemProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

const AnimatedStat = ({ value, suffix = "+", label, delay = 0 }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeInOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      })
      return () => controls.stop()
    }
  }, [isInView, value, count])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-xl text-center hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center">
        <NumberFlow suffix={suffix} value={displayValue} />
      </div>
      <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const stats = [
    { label: 'Global Clients Handled', value: 50 },
    { label: 'Projects Completed', value: 68 },
    { label: 'Technologies', value: 20 },
    { label: 'AI Models Built', value: 15 },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-black scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GradientShimmer 
                as="h2" 
                className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4" 
                gradient="sunrise"
              >
                About Me
              </GradientShimmer>
              <div className="w-20 h-1 bg-gradient-to-r from-white to-white/50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MagicText 
                paragraphs={[
                  "I'm Waqar Haider, an AI Engineer and Full Stack Developer based in Faisalabad, Pakistan. Currently, I am pursuing my Bachelor of Science in Artificial Intelligence at The University of Faisalabad, where I bridge the gap between academic intelligence models and industrial software design. I turn sophisticated data models into fast, beautiful, and accessible software.",
                  "My expertise lies at the intersection of AI integration and modern web technologies. Whether engineering automated neural workflows, deploying real-time vision systems, or building reactive user interfaces, I focus on building products that feel fast, modern, and purposeful.",
                  "Driven by a passion for startup culture and technical architecture, I continuously push technical boundaries to build software that isn't just functionally advanced, but genuinely valuable to the end user."
                ]}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <AnimatedStat 
                key={stat.label} 
                value={stat.value} 
                suffix="+" 
                label={stat.label} 
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
