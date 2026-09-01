import { skillGroups } from '../data/skills'
import Reveal from './Reveal'

const accentMap = {
  easy: { text: 'text-easy', border: 'border-easy/30', dot: 'bg-easy' },
  medium: { text: 'text-medium', border: 'border-medium/30', dot: 'bg-medium' },
  hard: { text: 'text-hard', border: 'border-hard/30', dot: 'bg-hard' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>03<span className="bracket">]</span> skills
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100 mb-4">
            Tools I actually use
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-ash-300 max-w-xl mb-14">
            No skill bars, no invented percentages — just what I've worked
            with, grouped the way I think about it.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const accent = accentMap[group.accent]
            return (
              <Reveal key={group.title} delay={i * 60}>
                <div
                  className={`h-full rounded-xl border ${accent.border} bg-surface/50 p-6`}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                    <h3 className="font-mono text-sm text-ash-100">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[13px] px-2.5 py-1 rounded-md bg-surface-alt text-ash-300 border border-surface-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
