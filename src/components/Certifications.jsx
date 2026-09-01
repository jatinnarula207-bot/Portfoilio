import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>06<span className="bracket">]</span> certifications
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100 mb-14">
            Certifications
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 80}>
              <div className="h-full rounded-xl border border-surface-border bg-surface/50 p-6 flex flex-col">
                <div className="w-10 h-10 rounded-md bg-easy/10 border border-easy/30 flex items-center justify-center mb-5">
                  <Award size={18} className="text-easy" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ash-100">
                  {cert.name}
                </h3>
                <p className="text-ash-300 text-sm mt-1">{cert.issuer}</p>
                <p className="font-mono text-xs text-ash-700 mt-4">{cert.date}</p>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-easy mt-4"
                  >
                    View credential <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-ash-700 mt-4">
                    Add credential link <ExternalLink size={13} />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
