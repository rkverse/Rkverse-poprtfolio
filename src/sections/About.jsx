import { about } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionHeading index="01" label="About" title="A closer look" />
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
          <Reveal delay={100}>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <p className="section-label mb-4">// Education</p>
              <ul className="space-y-6">
                {about.education.map((ed) => (
                  <li key={ed.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-l-2 border-teal/40 pl-4">
                    <div>
                      <p className="font-display font-semibold text-ink-900 dark:text-ink-50">
                        {ed.degree}
                      </p>
                      <p className="text-sm text-ink-500 dark:text-ink-400">{ed.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-ink-400">{ed.period}</p>
                      <p className="font-mono text-xs text-teal-deep dark:text-teal">GPA {ed.gpa}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-surface rounded-xl p-8">
              <p className="section-label mb-6">// Skills.js</p>
              <div className="flex flex-wrap gap-2.5">
                {about.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={skill.category}
                    className="font-mono text-xs px-3 py-2 rounded-md bg-ink-50 dark:bg-ink-800 border border-ink-100 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:border-teal-deep dark:hover:border-teal hover:text-teal-deep dark:hover:text-teal transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
