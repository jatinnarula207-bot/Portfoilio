import { useEffect, useState } from 'react'
import { Github, Linkedin, Code2, ArrowRight, FileText, Mail } from 'lucide-react'

const FOCUS_TOPICS = [
  'Dynamic Programming',
  'Graphs',
  'Trees & Tries',
  'Hashing',
  'Recursion',
]

export default function Hero() {
  const [topicIndex, setTopicIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTopicIndex((i) => (i + 1) % FOCUS_TOPICS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#E9EDF7 1px, transparent 1px), linear-gradient(90deg, #E9EDF7 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-easy/10 blur-[120px]"
      />

      <div className="relative max-w-content w-full mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <p className="idx-label mb-5">
            <span className="bracket">[</span>00<span className="bracket">]</span> whoami
          </p>

          <p className="font-mono text-easy text-sm sm:text-base mb-4">Hi, I'm Jatin Narula</p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ash-100">
            Computer Science student &amp;
            <br className="hidden sm:block" /> aspiring software engineer.
          </h1>

          <p className="mt-6 max-w-xl text-ash-300 text-base sm:text-[17px] leading-relaxed">
            I'm a CSE student at Lovely Professional University focused on
            Data Structures &amp; Algorithms, problem solving, and building
            software that solves real problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 rounded-md bg-easy text-ink px-5 py-3 text-sm font-medium hover:bg-easy/90 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-surface-border px-5 py-3 text-sm text-ash-100 hover:border-ash-500 transition-colors"
            >
              <FileText size={16} /> View Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm text-ash-300 hover:text-easy transition-colors"
            >
              <Mail size={16} /> Let's Connect
            </button>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a
              href="https://github.com/jatinnarula207-bot"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ash-500 hover:text-ash-100 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-narula-a97497382/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ash-500 hover:text-ash-100 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/jatinnarula28/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="text-ash-500 hover:text-ash-100 transition-colors"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-surface-border bg-surface/70 backdrop-blur-sm shadow-2xl shadow-black/30 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surface-border bg-surface-alt">
              <span className="w-2.5 h-2.5 rounded-full bg-hard/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-medium/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-easy/70" />
              <span className="ml-3 font-mono text-[11px] text-ash-700">currently-exploring.ts</span>
            </div>
            <div className="p-6 font-mono text-[13px] sm:text-sm leading-7">
              <p className="text-ash-700">// what I'm practicing right now</p>
              <p>
                <span className="text-hard">const</span>{' '}
                <span className="text-ash-100">focus</span>{' '}
                <span className="text-ash-700">=</span>{' '}
                <span className="text-medium">"{FOCUS_TOPICS[topicIndex]}"</span>
                <span className="text-easy animate-blink">|</span>
              </p>
              <p className="mt-3">
                <span className="text-hard">const</span>{' '}
                <span className="text-ash-100">status</span>{' '}
                <span className="text-ash-700">=</span>{' '}
                <span className="text-medium">"learning, not pretending"</span>
              </p>
              <p className="mt-3">
                <span className="text-hard">while</span>{' '}
                <span className="text-ash-700">(</span>
                <span className="text-ash-100">true</span>
                <span className="text-ash-700">)</span> {'{'}
              </p>
              <p className="pl-4 text-ash-300">solve(problem);</p>
              <p className="pl-4 text-ash-300">buildSomethingUseful();</p>
              <p className="text-ash-700">{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
