import { useEffect, useRef } from 'react'

/**
 * Adds an `in-view` class to the element once it scrolls into the viewport.
 * Pairs with the `.reveal` utility class defined in index.css.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
