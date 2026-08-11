import { useState } from 'react'
import { FiCheck, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { contact, personalInfo, socialLinks } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const iconMap = { github: FiGithub, linkedin: FiLinkedin, mail: FiMail }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionHeading index="05" label="Contact" title={contact.heading} description={contact.subheading} />
        </Reveal>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <Reveal delay={100}>
            <div className="card-surface rounded-xl p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-ink-50 dark:bg-ink-800 text-teal-deep dark:text-teal">
                    <FiMail size={16} />
                  </span>
                  <span className="font-mono text-sm text-ink-600 dark:text-ink-300 group-hover:text-teal-deep dark:group-hover:text-teal transition-colors">
                    {contact.email}
                  </span>
                </a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 group">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-ink-50 dark:bg-ink-800 text-teal-deep dark:text-teal">
                    <FiPhone size={16} />
                  </span>
                  <span className="font-mono text-sm text-ink-600 dark:text-ink-300 group-hover:text-teal-deep dark:group-hover:text-teal transition-colors">
                    {contact.phone}
                  </span>
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-ink-100 dark:border-ink-700">
                <p className="section-label mb-4">// Elsewhere</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon]
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        aria-label={link.label}
                        className="flex items-center justify-center h-9 w-9 rounded-full border border-ink-200 dark:border-ink-600 text-ink-500 dark:text-ink-300 hover:text-teal-deep dark:hover:text-teal hover:border-teal-deep dark:hover:border-teal transition-colors"
                      >
                        {Icon ? <Icon size={14} /> : link.label[0]}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="card-surface rounded-xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-ink-400 block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-md bg-transparent border border-ink-200 dark:border-ink-600 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 placeholder:text-ink-300 dark:placeholder:text-ink-500 focus:border-teal-deep dark:focus:border-teal outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-ink-400 block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-md bg-transparent border border-ink-200 dark:border-ink-600 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 placeholder:text-ink-300 dark:placeholder:text-ink-500 focus:border-teal-deep dark:focus:border-teal outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-ink-400 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the project…"
                  className="w-full rounded-md bg-transparent border border-ink-200 dark:border-ink-600 px-4 py-3 text-sm text-ink-800 dark:text-ink-100 placeholder:text-ink-300 dark:placeholder:text-ink-500 focus:border-teal-deep dark:focus:border-teal outline-none transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                {sent ? (
                  <>
                    <FiCheck size={16} /> Opening your mail client…
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              <p className="font-mono text-[11px] text-ink-400">
                Submitting opens your email client with this message pre-filled. To collect messages
                directly, wire this form to a service like Formspree or EmailJS.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
