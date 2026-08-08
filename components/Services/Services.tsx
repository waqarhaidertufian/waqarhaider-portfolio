'use client'

import { motion } from 'framer-motion'
import GradientShimmer from '@/components/ui/gradient-shimmer'
import { BorderBeamPanel } from '@/components/ui/border-beam-panel'
import { BrainCircuit, Sparkles, Cpu, Smartphone, Zap, Terminal, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Sparkles,
  Cpu,
  Smartphone,
  Zap,
  Terminal,
}

export default function Services() {
  const services = [
    {
      title: "AI Engineering & Intelligent Systems",
      description: "Designing scalable Machine Learning pipelines, advanced predictive models, and statistical frameworks to transform complex raw datasets into structural business intelligence.",
      icon: "BrainCircuit",
      iconColor: "text-amber-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
    },
    {
      title: "Generative AI & LLMs",
      description: "Integrating production-grade Large Language Models, custom RAG frameworks, and secure dynamic knowledge bases tailored explicitly to corporate enterprise contexts.",
      icon: "Sparkles",
      iconColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
    },
    {
      title: "AI Automation & AI Agents",
      description: "Building autonomous multi-agent software ecosystems and cognitive workflows that continuously execute complex background processes with absolute zero friction.",
      icon: "Cpu",
      iconColor: "text-amber-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
    },
    {
      title: "App Development",
      description: "Developing blazing fast, native-feeling mobile and desktop clients focused heavily on immersive UI interfaces, fluid gesture navigation, and cross-platform performance.",
      icon: "Smartphone",
      iconColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
    },
    {
      title: "AI Product Engineering",
      description: "Architecting real-time computer vision streams, custom YOLO detection tracks, and intelligent data preprocessing logic built to scale inside complex startup products.",
      icon: "Zap",
      iconColor: "text-amber-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
    },
    {
      title: "Full-Stack Development",
      description: "Crafting highly robust web architectures using Next.js, React, TypeScript, and Supabase backed by pixel-perfect structural layouts and responsive interface logic.",
      icon: "Terminal",
      iconColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-black scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GradientShimmer 
            as="h2" 
            className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4" 
            gradient="spring"
          >
            Services
          </GradientShimmer>
          <p className="text-white/60 max-w-2xl mx-auto">
            Specialized services in AI engineering and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02
                }}
                className="group"
              >
                <BorderBeamPanel 
                  beams={2} 
                  thickness={2} 
                  radius={20} 
                  colors={["#eab308", "#f59e0b"]} 
                  glow={true} 
                  seed={index + 1}
                  className="flex flex-col gap-4 bg-neutral-900/60 border border-neutral-800/80 hover:-translate-y-1 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </motion.div>
                  <h3 className="text-white font-semibold text-lg tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </BorderBeamPanel>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
