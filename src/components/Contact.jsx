import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    // No email service is connected yet — this is UI only.
    // Wire this up to a form service (e.g. Formspree, EmailJS) or a
    // small backend route, then swap this handler for the real call.
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>07<span className="bracket">]</span> contact
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100 mb-4">
            Let's connect
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-ash-300 max-w-xl mb-14">
            Open to internship opportunities, collaboration, or just talking
            about DSA and software engineering.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <Reveal>
            <div className="space-y-4">
              <a
                href="mailto:jatinnarula207@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface/50 px-5 py-4 hover:border-easy/40 transition-colors"
              >
                <Mail size={18} className="text-easy" />
                <span className="text-sm text-ash-100 break-all">jatinnarula207@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jatin-narula-a97497382/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface/50 px-5 py-4 hover:border-easy/40 transition-colors"
              >
                <Linkedin size={18} className="text-easy" />
                <span className="text-sm text-ash-100">LinkedIn</span>
              </a>
              <a
                href="https://github.com/jatinnarula207-bot"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-surface-border bg-surface/50 px-5 py-4 hover:border-easy/40 transition-colors"
              >
                <Github size={18} className="text-easy" />
                <span className="text-sm text-ash-100">GitHub</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-ash-500 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-md bg-surface/50 border border-surface-border px-4 py-3 text-sm text-ash-100 placeholder:text-ash-700 focus:border-easy/50 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-ash-500 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-md bg-surface/50 border border-surface-border px-4 py-3 text-sm text-ash-100 placeholder:text-ash-700 focus:border-easy/50 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-ash-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-md bg-surface/50 border border-surface-border px-4 py-3 text-sm text-ash-100 placeholder:text-ash-700 focus:border-easy/50 outline-none resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-easy text-ink px-6 py-3 text-sm font-medium hover:bg-easy/90 transition-colors"
              >
                <Send size={15} /> Send Message
              </button>
              {status === 'sent' && (
                <p className="text-xs font-mono text-ash-500">
                  Form UI only for now — connect a form service to actually receive messages.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
