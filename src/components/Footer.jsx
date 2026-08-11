import { personalInfo, socialLinks } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 dark:border-ink-700 pb-12 sm:pb-10">
      <div className="container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-400">
          © {year} {personalInfo.name}. Built with React &amp; Tailwind CSS.
        </p>
        <ul className="flex items-center gap-5 font-mono text-xs text-ink-400">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-teal-deep dark:hover:text-teal transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
