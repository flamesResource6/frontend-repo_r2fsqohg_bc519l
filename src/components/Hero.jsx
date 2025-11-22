import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(60% 60% at 50% 10%, rgba(99,102,241,0.25) 0%, rgba(15,23,42,0.6) 60%, rgba(15,23,42,0.9) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 w-full">
          {/* Top mini brand */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs tracking-wide text-white/80">Sujal Studio • Video Editing Agency</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white">
              Crafting cinematic stories for brands and creators
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-200/90 max-w-2xl">
              We are a boutique creative studio led by Sujal. From tight, scroll-stopping edits to full brand kits, we handle video editing, graphic design, social media, and all the technical details.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-600 transition-colors">
                Get a quote
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition-colors">
                See our work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
