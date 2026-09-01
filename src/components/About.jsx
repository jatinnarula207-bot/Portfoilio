import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="idx-label mb-4">
            <span className="bracket">[</span>01<span className="bracket">]</span> about
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-16">
          <Reveal>
            <div className="rounded-xl border border-surface-border bg-surface/50 overflow-hidden max-w-xs mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-surface-border bg-surface-alt">
                <span className="w-2 h-2 rounded-full bg-hard/70" />
                <span className="w-2 h-2 rounded-full bg-medium/70" />
                <span className="w-2 h-2 rounded-full bg-easy/70" />
                <span className="ml-2 font-mono text-[11px] text-ash-700">jatin.jpg</span>
              </div>
              <img
                src="/images/jatin-photo.png"
                alt="Jatin Narula"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ash-100 leading-tight">
                Still building — and honest about it.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 text-ash-300 text-[15px] sm:text-base leading-relaxed mt-6">
                <p>
                  I'm currently pursuing my B.Tech in Computer Science &amp;
                  Engineering at Lovely Professional University. My learning
                  journey started with web development — HTML, CSS, JavaScript,
                  Node.js, databases, and Git — where I got comfortable
                  building things end to end.
                </p>
                <p>
                  Right now my primary focus has shifted to Data Structures
                  &amp; Algorithms and problem solving. I spend most of my time
                  working through core DSA topics in C++ and practicing on
                  LeetCode, because I want the fundamentals to be genuinely
                  strong, not just checked off.
                </p>
                <p>
                  I'm not claiming to be an expert at any of this — I'm a
                  student who shows up consistently, works through hard
                  problems, and is steadily getting better at both
                  problem-solving and software engineering.
                </p>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {['Curious', 'Consistent', 'Hard-working', 'Always learning'].map((trait) => (
                    <span
                      key={trait}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-surface-border text-ash-300"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
