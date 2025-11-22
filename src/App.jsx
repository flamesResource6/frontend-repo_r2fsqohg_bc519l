import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <section id="about" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl sm:text-4xl font-bold">About Sujal</h2>
            <p className="mt-3 text-slate-300 max-w-3xl">I’m Sujal, a freelance editor and designer who built a small agency to move faster. We partner with creators and brands to ship content that performs—without the overhead. If you need reliable edits, consistent design, and a steady stream of posts, you’re in the right place.</p>
          </div>
        </div>
      </section>
      <Contact />
      <footer className="bg-slate-950/90 border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Sujal Studio. All rights reserved.</p>
          <a href="#home" className="text-slate-300 text-sm hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
