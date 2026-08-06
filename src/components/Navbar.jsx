import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site, sections } from '../data/site'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const targets = sections.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Prevent the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-zinc-100 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="section-shell flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-700 bg-ink-900 font-mono text-[11px] font-medium tracking-tight text-zinc-200 transition-colors group-hover:border-accent/50">
              {site.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-zinc-200 sm:block">
              {site.name}
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {sections.map(({ id, label, num }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                    active === id ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  <span className="font-mono text-[10px] text-ink-600 transition-colors group-hover:text-accent">
                    {num}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href={site.resume}
              download
              className="rounded-full border border-ink-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Résumé
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="-mr-2 rounded-lg p-2 text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            {isOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="section-shell flex h-full flex-col justify-center gap-2">
              {sections.map(({ id, label, num }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-4 border-b border-ink-700/60 py-5 text-3xl font-semibold tracking-tight text-zinc-200 transition-colors hover:text-white"
                  >
                    <span className="font-mono text-xs text-ink-600">{num}</span>
                    {label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="pt-8"
              >
                <a
                  href={site.resume}
                  download
                  onClick={() => setIsOpen(false)}
                  className="btn-ghost w-full"
                >
                  Download résumé
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
