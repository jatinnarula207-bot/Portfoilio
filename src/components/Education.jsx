import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'

const timeline = [
  {
    place: 'Lovely Professional University',
    course: 'B.Tech — Computer Science & Engineering',
    period: '2025 – 2029',
    detail: 'Current CGPA: 9.04',
    current: true,
  },
  {
    place: 'Class 12 — CBSE',
    course: 'Senior Secondary',
    period: '',
    detail: '86%',
    current: false,
  },
  {
    place: 'Class 10 — ICSE',
    course: 'Secondary',
    period: '',
    detail: '87%',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>02<span className="bracket">]</span> education
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100 mb-14">
            Academic background
          </h2>
        </Reveal>

        <ol className="relative border-l border-surface-border pl-8 space-y-12">
          {timeline.map((item, i) => (
            <Reveal as="li" key={item.place} delay={i * 80} className="relative">
              <span
                className={`absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full border-2 ${
                  item.current ? 'bg-easy border-easy' : 'bg-ink border-surface-border'
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-ash-100">
                  {item.place}
                </h3>
                {item.period && (
                  <span className="font-mono text-xs text-ash-700">{item.period}</span>
                )}
              </div>
              <p className="text-ash-300 mt-1">{item.course}</p>
              <p className="font-mono text-sm text-easy mt-2 inline-flex items-center gap-2">
                <GraduationCap size={14} />
                {item.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
