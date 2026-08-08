export default function HeroPortrait() {
  return (
    <section className="w-full h-[60vh] md:min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Dark gradient mask at bottom for seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      
      {/* Portrait Image */}
      <img
        src="/images/hero-portrait.jpeg"
        alt="Hero Portrait"
        className="w-full h-full object-cover object-center max-w-7xl mx-auto px-4 md:px-8"
      />
    </section>
  )
}
