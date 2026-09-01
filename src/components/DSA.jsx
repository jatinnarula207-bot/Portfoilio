import { Code2, Github, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const topics = [
  'Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Queues', 'Trees',
  'Tries', 'Heaps', 'Hashing', 'Sorting', 'Searching', 'Recursion',
  'Dynamic Programming', 'Graphs',
]

export default function DSA() {
  return (
    <section id="dsa" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>04<span className="bracket">]</span> dsa
          </p>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100">
              DSA journey
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex gap-3">
              <a
                href="https://leetcode.com/u/jatinnarula28/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-medium/40 bg-medium/10 px-4 py-2.5 text-sm text-medium hover:bg-medium/20 transition-colors"
              >
                <Code2 size={15} /> LeetCode <ArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/jatinnarula207-bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-surface-border px-4 py-2.5 text-sm text-ash-100 hover:border-ash-500 transition-colors"
              >
                <Github size={15} /> GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="text-ash-300 max-w-2xl mb-12">
            I'm actively practicing Data Structures &amp; Algorithms and
            solving problems on LeetCode, working through the topics below
            one at a time.
          </p>
        </Reveal>

        <Reveal>
          <p className="font-mono text-xs text-ash-500 mb-4">// topics in active rotation</p>
        </Reveal>
        <div className="flex flex-wrap gap-2.5">
          {topics.map((topic, i) => (
            <Reveal key={topic} delay={i * 25}>
              <span className="text-[13px] px-3 py-1.5 rounded-full border border-surface-border text-ash-300 font-mono">
                {topic}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
