'use client'

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'
import { Home, User, Briefcase, GraduationCap, Award, History, Mail, Server } from 'lucide-react'

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Experience', href: '#experience', icon: History },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Services', href: '#services', icon: Server },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-auto max-w-full px-2 z-[999] pointer-events-auto">
      <Dock className="bg-neutral-900/90 backdrop-blur-md border border-white/20 min-w-fit px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.href === '#contact') {
                  e.preventDefault();
                  const el = document.getElementById('contact') || Array.from(document.querySelectorAll('h2')).find(h => h.textContent?.toLowerCase().includes("work together"));
                  if (el) {
                    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
                  }
                }
              }}
            >
              <DockItem>
                <DockLabel>{item.name}</DockLabel>
                <DockIcon className="text-white">
                  <Icon size={28} strokeWidth={2} />
                </DockIcon>
              </DockItem>
            </a>
          )
        })}
      </Dock>
    </div>
  )
}
