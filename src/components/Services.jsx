import { Scissors, PenTool, Share2, Wrench } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Video Editing',
    desc: 'Short-form and long-form edits, color, sound, motion, captions, and pacing for every platform.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Thumbnails, channel art, brand kits, posters, and social graphics that convert.'
  },
  {
    icon: Share2,
    title: 'Social Media Handling',
    desc: 'Content calendars, posting, engagement, and analytics—end-to-end channel management.'
  },
  {
    icon: Wrench,
    title: 'Technical Setup',
    desc: 'Workflows, templates, cloud organization, and the tech that keeps your content engine running.'
  }
]

function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A compact team delivering full-stack creative for creators and brands. Pick a lane or let us run the whole road.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20">
                <Icon className="h-5 w-5 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
