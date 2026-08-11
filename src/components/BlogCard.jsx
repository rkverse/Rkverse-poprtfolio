import { FiArrowUpRight, FiClock, FiCalendar } from 'react-icons/fi'

export default function BlogCard({ post, onOpen }) {
  const formattedDate = post.date
    ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
        new Date(post.date)
      )
    : null

  return (
    <button
      type="button"
      onClick={() => onOpen(post)}
      className="group w-full text-left card-surface rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-deep/10 border border-ink-200/70 dark:border-ink-700/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/60"
    >
      <div className="relative overflow-hidden aspect-[8/5]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-transparent" />
        {post.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-mono text-ink-500 dark:text-ink-400">
          {formattedDate && (
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar className="text-[12px]" />
              {formattedDate}
            </span>
          )}
          {post.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <FiClock className="text-[12px]" />
              {post.readTime}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 leading-snug">
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-ink-500 dark:text-ink-300 leading-relaxed flex-1">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink-200/80 pt-4 dark:border-ink-700/80">
          <div className="flex flex-wrap gap-2">
            {post.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal/10 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-teal-deep dark:text-teal"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-800 dark:text-ink-100">
            Read more
            <FiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </button>
  )
}
