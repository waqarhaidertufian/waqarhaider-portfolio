"use client"

import React from "react"
import MarqueeAlongSvgPath from "@/components/ui/marquee-along-svg-path"

const techItems = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "YOLOv8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "LlamaIndex", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg" },
  { name: "Gemini", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
]

// Stretched SVG Path to fit all items seamlessly
const widePath = "M1 210C150 290 550 350 700 210C850 50 680 -30 550 40C420 110 480 280 700 290C900 300 1450 190 1599 150"

export default function TechStackSection() {
  return (
    <section id="skills" className="w-full bg-white py-14 overflow-hidden relative scroll-mt-0">
      <div className="max-w-7xl mx-auto text-center mb-6 px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
          Tech Stack
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Technologies and tools I use to build intelligent AI solutions
        </p>
      </div>

      <div className="w-full h-[450px] sm:h-[500px] relative flex items-center justify-center">
        <MarqueeAlongSvgPath baseVelocity={3.0} className="w-full h-full" draggable={true} grabCursor={true} path={widePath} repeat={1} responsive={true} slowdownOnHover={true} viewBox="0 0 1600 350">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="mx-3 sm:mx-4 shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-200/90 rounded-xl shadow-sm hover:shadow-lg hover:scale-115 transition-all duration-300 flex flex-col items-center justify-center p-1.5 cursor-pointer select-none"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain pointer-events-none mb-0.5 shrink-0"
              />
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-800 pointer-events-none truncate max-w-full text-center leading-none">
                {item.name}
              </span>
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>
    </section>
  )
}
