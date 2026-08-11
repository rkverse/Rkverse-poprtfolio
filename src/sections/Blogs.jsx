import { useEffect, useState } from 'react'
import { FiEdit3, FiX, FiArrowUpRight, FiCalendar, FiClock } from 'react-icons/fi'
import { blogs } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import BlogCard from '../components/BlogCard'
import Reveal from '../components/Reveal'

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedPost(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = selectedPost ? 'hidden' : ''

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [selectedPost])

  const formattedDate = selectedPost?.date
    ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
        new Date(selectedPost.date)
      )
    : null

  return (
    <section id="blogs" className="py-24 sm:py-32 bg-ink-50/60 dark:bg-ink-900/40">
      <div className="container-px">
        <Reveal>
          <SectionHeading index="04" label="Blogs" title="Writing" description="Notes on full-stack development, shared as they're written." />
        </Reveal>

        {blogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <Reveal key={post.title}>
                <BlogCard post={post} onOpen={setSelectedPost} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="card-surface rounded-xl p-12 text-center">
              <FiEdit3 className="mx-auto text-teal-deep dark:text-teal" size={28} />
              <p className="mt-4 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                No posts published yet
              </p>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400 max-w-md mx-auto">
                New writing will show up here. Add entries to the{' '}
                <code className="font-mono text-xs bg-ink-100 dark:bg-ink-800 px-1.5 py-0.5 rounded">
                  blogs
                </code>{' '}
                array in{' '}
                <code className="font-mono text-xs bg-ink-100 dark:bg-ink-800 px-1.5 py-0.5 rounded">
                  src/data/portfolio.js
                </code>{' '}
                to populate this section.
              </p>
            </div>
          </Reveal>
        )}
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/70 p-4 py-8 sm:p-6 sm:py-10 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="modal-scrollbar w-full max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[28px] border border-ink-200/80 bg-paper-card shadow-2xl shadow-ink-900/20 dark:border-ink-700 dark:bg-ink-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-56 sm:h-72">
              <img src={selectedPost.image} alt={selectedPost.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/20 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink-950/50 text-white backdrop-blur-md transition hover:bg-ink-900/70"
                aria-label="Close article"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-mono text-ink-500 dark:text-ink-400">
                {formattedDate && (
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar className="text-[12px]" />
                    {formattedDate}
                  </span>
                )}
                {selectedPost.readTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock className="text-[12px]" />
                    {selectedPost.readTime}
                  </span>
                )}
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {selectedPost.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-teal-deep dark:text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50">
                {selectedPost.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {selectedPost.excerpt}
              </p>

              <div className="mt-6 space-y-4 text-sm sm:text-[15px] leading-7 text-ink-600 dark:text-ink-300">
                {(selectedPost.content || [selectedPost.excerpt]).map((paragraph, index) => (
                  <p key={`${selectedPost.title}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>

              {selectedPost.url && selectedPost.url !== '#' && (
                <div className="mt-8 flex justify-end">
                  <a
                    href={selectedPost.url}
                    target={selectedPost.url.startsWith('http') ? '_blank' : undefined}
                    rel={selectedPost.url.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-medium text-paper-card transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-teal dark:text-ink-950"
                  >
                    Read the full article
                    <FiArrowUpRight />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
