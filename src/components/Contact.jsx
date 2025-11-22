import { Mail, Phone, Send } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Tell us about your project—timeline, budget, goals. We’ll reply within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              <input type="email" placeholder="Email" className="w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
            </div>
            <input type="text" placeholder="Company / Brand" className="mt-4 w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
            <textarea placeholder="Project details" rows="5" className="mt-4 w-full rounded-lg bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
            <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white hover:bg-indigo-600">
              <Send className="h-4 w-4" />
              Send enquiry
            </button>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="mb-3 font-semibold">Contact</div>
              <div className="flex items-center gap-3 text-slate-300"><Mail className="h-4 w-4" /> hello@sujal.studio</div>
              <div className="flex items-center gap-3 text-slate-300"><Phone className="h-4 w-4" /> +91 98765 43210</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 text-white">
              <div className="font-semibold">Availability</div>
              <p className="mt-1 text-sm text-slate-300">One new retainer slot for December. Project bookings open for Q1.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
