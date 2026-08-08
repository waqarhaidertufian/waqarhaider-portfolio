import Hero from '@/components/Hero'
import About from '@/components/About/About'
import TechStackSection from '@/components/TechStack/TechStack'
import Projects from '@/components/Projects/Projects'
import AcademicCertifications from '@/components/AcademicCertifications/AcademicCertifications'
import Certifications from '@/components/Certifications/Certifications'
import Experience from '@/components/Experience/Experience'
import Services from '@/components/Services/Services'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Logos3 } from '@/components/blocks/logos3'
import HeroPortrait from '@/components/HeroPortrait/HeroPortrait'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Hero />
      <About />
      <TechStackSection />
      <AcademicCertifications />
      <Certifications />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Logos3 />
      <HeroPortrait />
      <Footer />
    </main>
  )
}
