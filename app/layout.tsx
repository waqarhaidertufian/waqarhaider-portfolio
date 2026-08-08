import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Waqar Haider - AI Engineer & Full Stack Developer',
  description: 'Building intelligent products with AI, Computer Vision, LLMs and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased min-h-screen overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
