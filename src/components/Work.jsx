function Work() {
  return (
    <section id="work" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-2 text-slate-300">A quick taste—swap these with your reels, case studies, or embeds.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Book a call</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video w-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-rose-500/20" />
              <div className="p-4">
                <h3 className="text-white font-semibold">Project {i}</h3>
                <p className="text-sm text-slate-300">Short description goes here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
