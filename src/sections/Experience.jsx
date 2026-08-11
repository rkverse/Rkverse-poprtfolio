import { experience } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-ink-50/60 dark:bg-ink-900/40">
      <div className="container-px ">
        <Reveal>
          <SectionHeading
            index="02"
            label="Experience"
            title="Where I've worked"
            description="A timeline of freelance, agency, and internship roles building full-stack products."
          />
        </Reveal>

        <ol className="relative border-l border-ink-200 dark:border-ink-700 ml-2 sm:ml-4">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.company} delay={i * 120}>
              <li className="relative pl-8 sm:pl-10 pb-14 last:pb-0 mt-5">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-paper dark:bg-ink-950 border-2 border-teal-deep dark:border-teal" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-teal-deep dark:text-teal border border-teal/30 rounded-full px-2.5 py-0.5">
                    {job.type}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-400">
                  <span>{job.company}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.period}</span>
                </div>

                <p className="mt-4 max-w-2xl text-ink-500 dark:text-ink-300 leading-relaxed">
                  {job.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-ink-500 dark:text-ink-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-deep dark:bg-teal" />
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
