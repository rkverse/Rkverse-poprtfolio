export default function Button({ href, children, variant = 'primary', download = false, className = '', ...rest }) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-outline'

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        download={download || undefined}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  )
}
