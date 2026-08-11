import { useEffect, useState } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo, socialLinks } from '../data/portfolio'
import Button from '../components/Button'

const iconMap = { github: FiGithub, linkedin: FiLinkedin, mail: FiMail }

function RoleRotator({ roles }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="relative inline-flex overflow-hidden h-[1.4em] align-bottom">
      {roles.map((role, i) => (
        <span
          key={role}
          className={`absolute left-0 transition-all duration-500 ease-out ${
            i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {role}
        </span>
      ))}
      <span className="opacity-0">{roles[0]}</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-grid bg-grid overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper dark:to-ink-950" />

      <div className="container-px relative grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-blink" />
            {personalInfo.availability}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 dark:text-white leading-[1.08]">
            {personalInfo.tagline}
          </h1>

          <p className="mt-6 font-mono text-teal-deep dark:text-teal text-lg sm:text-xl">
            <span className="text-ink-400 dark:text-ink-500">I'm a </span>
            <RoleRotator roles={personalInfo.roles} />
          </p>

          <p className="mt-6 max-w-xl text-ink-500 dark:text-ink-300 leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects">View Projects</Button>
            <Button href={personalInfo.resumeUrl} variant="outline" download>
              Download Résumé
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-ink-200 dark:border-ink-600 text-ink-500 dark:text-ink-300 hover:text-teal-deep dark:hover:text-teal hover:border-teal-deep dark:hover:border-teal transition-colors"
                >
                  {Icon ? <Icon size={16} /> : link.label[0]}
                </a>
              )
            })}
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 w-full max-w-sm animate-float">
          <div className="absolute -inset-3 rounded-2xl border border-teal/30" />
          <div className="relative rounded-2xl overflow-hidden border border-ink-200 dark:border-ink-700 shadow-2xl shadow-ink-900/10">
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} profile photo`}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 card-surface rounded-lg px-4 py-3 shadow-lg">
            <p className="font-mono text-[11px] text-ink-400">based in</p>
            <p className="font-display text-sm font-semibold text-ink-900 dark:text-ink-50">
              {personalInfo.location}
            </p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 font-mono text-xs text-ink-400 hover:text-teal-deep dark:hover:text-teal transition-colors"
      >
        scroll
        <FiArrowDown className="animate-bounce" size={14} />
      </a>
    </section>
  )
}
