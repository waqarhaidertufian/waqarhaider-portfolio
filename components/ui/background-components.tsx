'use client'

import { ReactNode } from 'react'

interface AmbientBackgroundProps {
  children: ReactNode
  className?: string
}

export function AmbientBackground({ children, className = '' }: AmbientBackgroundProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Deep Luxury Dark Background */}
      <div className="absolute inset-0 bg-[#0a0a0c]" />
      
      {/* Ultra-Premium Liquid Glowing Orbs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full blur-[120px] opacity-30"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
          animation: 'float 8s ease-in-out infinite'
        }} 
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4] rounded-full blur-[120px] opacity-25"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2s'
        }} 
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3b82f6] rounded-full blur-[120px] opacity-20"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '4s'
        }} 
      />
      
      {/* Ultra-Faint Luxury Grid Texture */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'layout style paint',
          opacity: 0.1
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1) translateZ(0);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.1) translateZ(0);
          }
        }
      `}</style>
    </div>
  )
}

