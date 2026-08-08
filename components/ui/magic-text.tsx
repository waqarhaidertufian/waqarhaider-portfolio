"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export interface MagicTextProps {
  paragraphs: string[]
  className?: string
}

interface WordProps {
  children: string
  progress: any
  range: number[]
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1])
  const color = useTransform(progress, range, ["#52525b", "#ffffff"])

  // Clean word string to match name regardless of punctuation
  const cleanWord = children.replace(/[^a-zA-Z]/g, "")
  const isName = cleanWord === "Waqar" || cleanWord === "Haider"

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-2 transition-colors duration-150 select-none ${
        isName 
          ? "font-extrabold text-white text-lg sm:text-xl tracking-wide" 
          : "font-normal"
      }`}
    >
      {children}
    </motion.span>
  )
}

export const MagicText: React.FC<MagicTextProps> = ({ paragraphs, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  })

  // Combine all words across all paragraphs to calculate continuous timing
  const allWords = paragraphs?.join(" ").split(" ") || []
  let globalWordIndex = 0

  if (!paragraphs || paragraphs.length === 0) {
    return null
  }

  return (
    <div ref={containerRef} className={`space-y-6 ${className}`}>
      {paragraphs.map((paragraph, pIdx) => {
        const words = paragraph.split(" ")

        return (
          <p key={pIdx} className="text-lg leading-relaxed flex flex-wrap">
            {words.map((word, wIdx) => {
              const start = globalWordIndex / allWords.length
              const end = start + 1 / allWords.length
              globalWordIndex++

              return (
                <Word key={wIdx} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}
