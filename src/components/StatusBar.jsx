import { useEffect, useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { navigation, personalInfo, socialLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'

export default function StatusBar() {
  const { theme } = useTheme()
  const sectionIds = navigation.map((item) => item.href.replace('#', ''))
  const activeId = useActiveSection(sectionIds)
  const activeLabel = navigation.find((item) => item.href === `#${activeId}`)?.label ?? 'Home'
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Kolkata',
        }).format(new Date())
      )
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  const github = socialLinks.find((s) => s.icon === 'github')

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 hidden sm:flex items-center justify-between h-8 px-4 font-mono text-[11px] bg-ink-900 dark:bg-black text-ink-200 border-t border-ink-700">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-blink" />
          {personalInfo.availability}
        </span>
        <span className="hidden md:inline text-ink-500">|</span>
        <span className="hidden md:inline">
          section: <span className="text-teal">{activeLabel.toLowerCase()}</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline">theme: {theme}</span>
        <span className="hidden lg:inline text-ink-500">|</span>
        <span className="hidden lg:inline">IST {time}</span>
        {github && (
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-teal transition-colors"
          >
            <FiGithub size={12} /> {github.username}
          </a>
        )}
      </div>
    </div>
  )
}
