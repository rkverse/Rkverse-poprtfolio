import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navigation, personalInfo } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionIds = navigation.map((item) => item.href.replace('#', ''))
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/85 dark:bg-ink-950/85 backdrop-blur-md border-b border-ink-100 dark:border-ink-700'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16">
        <a href="#home" className="font-mono text-sm text-ink-800 dark:text-ink-100 group">
          <span className="font-semibold">{personalInfo.initials}</span>{' '}
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {navigation.map((item, i) => {
            const id = item.href.replace('#', '')
            const isActive = activeId === id
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-ink-900 dark:text-white'
                      : 'text-ink-400 hover:text-ink-700 dark:hover:text-ink-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-teal-deep dark:bg-teal" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a href={personalInfo.resumeUrl} download className="hidden md:inline-flex btn-outline">
            Resume
          </a>
          <button
            type="button"
            className="md:hidden text-ink-700 dark:text-ink-100"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-paper dark:bg-ink-950 border-t border-ink-100 dark:border-ink-700">
          <ul className="container-px py-4 flex flex-col gap-1 font-mono text-sm">
            {navigation.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-2 py-2.5 text-ink-600 dark:text-ink-200"
                >
                  <span className="text-teal-deep dark:text-teal text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between pt-3 mt-2 border-t border-ink-100 dark:border-ink-700">
              <a href={personalInfo.resumeUrl} download className="btn-outline">
                Resume
              </a>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
