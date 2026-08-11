import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children and fades them up into view on scroll.
 * `delay` accepts a Tailwind-safe millisecond value applied via inline style.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useReveal()

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
