import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>05<span className="bracket">]</span> projects
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100 mb-4">
            What I'm building
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-ash-300 max-w-xl mb-14">
            Both projects below are in progress — cards are structured so I
            can drop in repos, live demos, and screenshots as they're ready.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <article className="h-full rounded-xl border border-surface-border bg-surface/50 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-lg text-ash-100">
                      {project.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] px-2 py-1 rounded-full border border-medium/40 text-medium">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-ash-300 text-sm leading-relaxed mt-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-1 rounded-md bg-surface-alt text-ash-300 border border-surface-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ash-100 hover:text-easy transition-colors"
                      >
                        <Github size={15} /> Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-ash-700">
                        <Github size={15} /> Add repo link
                      </span>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ash-100 hover:text-easy transition-colors"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-ash-700">
                        <ExternalLink size={15} /> Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
