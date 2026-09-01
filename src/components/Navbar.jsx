import { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { sections } from '../data/nav'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-surface-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-sm font-medium text-ash-100 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-md bg-surface border border-surface-border flex items-center justify-center text-easy">
            JN
          </span>
          <span className="hidden sm:inline text-ash-300">jatin-narula</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7 font-mono text-[13px] text-ash-300">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="hover:text-easy transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-easy/40 bg-easy/10 px-4 py-2 text-[13px] font-mono text-easy hover:bg-easy/20 transition-colors"
          >
            <FileText size={14} />
            View Resume
          </a>
        </div>

        <button
          className="lg:hidden text-ash-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-surface-border bg-ink/95 backdrop-blur-md">
          <nav className="flex flex-col px-5 py-4 gap-1 font-mono text-sm">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left py-2.5 text-ash-300 hover:text-easy transition-colors"
              >
                {s.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-easy/40 bg-easy/10 px-4 py-2.5 text-easy"
            >
              <FileText size={14} />
              View Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
