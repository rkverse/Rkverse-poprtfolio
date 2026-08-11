export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow mb-3">
        {index && <span className="text-ink-400 dark:text-ink-500 mr-2">{index}</span>}
        {label}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-ink-50">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-500 dark:text-ink-300 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
