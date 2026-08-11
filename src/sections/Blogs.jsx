import { FiEdit3 } from 'react-icons/fi'
import { blogs } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import BlogCard from '../components/BlogCard'
import Reveal from '../components/Reveal'

export default function Blogs() {
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
                <BlogCard post={post} />
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
    </section>
  )
}
