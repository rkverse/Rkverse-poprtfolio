export default function BlogCard({ post }) {
  const formattedDate = post.date
    ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
        new Date(post.date)
      )
    : null

  return (
    <a
      href={post.url}
      target={post.url?.startsWith('http') ? '_blank' : undefined}
      rel={post.url?.startsWith('http') ? 'noreferrer' : undefined}
      className="group card-surface rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-deep/5"
    >
      <div className="overflow-hidden aspect-[8/5]">
        <img
          src={post.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {(formattedDate || post.readTime) && (
          <p className="font-mono text-[11px] text-ink-400 mb-2">
            {formattedDate}
            {formattedDate && post.readTime ? ' · ' : ''}
            {post.readTime}
          </p>
        )}
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-50 leading-snug">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-ink-500 dark:text-ink-300 leading-relaxed flex-1">{post.excerpt}</p>
      </div>
    </a>
  )
}
