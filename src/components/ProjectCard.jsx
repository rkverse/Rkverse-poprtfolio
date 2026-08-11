import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <a
      href={project.link}
      target={project.link?.startsWith('http') ? '_blank' : undefined}
      rel={project.link?.startsWith('http') ? 'noreferrer' : undefined}
      className="group card-surface rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-deep/5"
    >
      <div className="relative overflow-hidden aspect-[8/5]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 font-mono text-[11px] px-2 py-1 rounded bg-ink-950/70 text-teal">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 leading-snug">
            {project.title}
          </h3>
          <FiArrowUpRight className="shrink-0 mt-1 text-ink-400 group-hover:text-teal-deep dark:group-hover:text-teal transition-colors" />
        </div>
        <p className="mt-3 text-sm text-ink-500 dark:text-ink-300 leading-relaxed flex-1">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-ink-200 dark:border-ink-600 text-ink-500 dark:text-ink-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
