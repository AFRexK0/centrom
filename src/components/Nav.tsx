const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          CENTROM
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="nav-status">desk online</span>
      </div>
    </header>
  )
}
