import { sections } from '../data/nav'
import useScrollSpy from '../hooks/useScrollSpy'

export default function CodeRail() {
  const ids = sections.map((s) => s.id)
  const activeId = useScrollSpy(ids)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3 font-mono text-xs"
    >
      {sections.map((s, i) => {
        const isActive = activeId === s.id
        const line = String(i + 1).padStart(2, '0')
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-3 text-left"
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`transition-colors duration-300 ${
                isActive ? 'text-easy' : 'text-ash-700 group-hover:text-ash-500'
              }`}
            >
              {line}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? 'w-6 bg-easy' : 'w-3 bg-ash-700 group-hover:w-4 group-hover:bg-ash-500'
              }`}
            />
            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isActive
                  ? 'max-w-[8rem] opacity-100 text-ash-100'
                  : 'max-w-0 opacity-0 group-hover:max-w-[8rem] group-hover:opacity-100 group-hover:text-ash-500'
              }`}
            >
              {s.label.toLowerCase()}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
