import { useState } from 'react'

export default function Header({ headerRef, headerTextRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Fun Zone', href: '#fun-zone' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    const element = document.querySelector(href === '#home' ? 'body' : href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* HEADER */}
      <header
        ref={headerRef}
        className="
          fixed top-0 left-0 w-full h-15
          bg-black text-white
          px-6 lg:px-10
          z-50
        "
      >
        {/* GRID = TRUE CENTER */}
        <div className="grid grid-cols-3 items-center h-full">

          {/* LEFT NAV */}
          <nav className="hidden md:flex items-center gap-6 justify-start">
            {navLinks.slice(0, 3).map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CENTER NAME */}
          <div
            ref={headerTextRef}
            className="flex justify-center pointer-events-none"
          >
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              PRUTHAVIK
            </h1>
          </div>

          {/* RIGHT NAV */}
          <nav className="hidden md:flex items-center gap-6 justify-end">
            {navLinks.slice(3).map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              md:hidden absolute right-6
              w-10 h-10 flex flex-col items-center justify-center gap-1.5
              focus:outline-none
            "
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden pt-24 px-6">
          <nav className="space-y-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-2xl font-bold text-white hover:text-cyan-400 transition-colors py-3"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
