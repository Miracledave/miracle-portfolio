import { ArrowUp } from 'lucide-react'
import { site } from '../data/site'
import SocialLinks from './SocialLinks'

const Footer = () => (
  <footer className="border-t border-ink-700/60 py-10">
    <div className="section-shell flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <p className="order-2 text-sm text-zinc-600 sm:order-1">
        © {new Date().getFullYear()} {site.name}. Built with React &amp; Tailwind CSS.
      </p>

      <div className="order-1 flex items-center gap-2 sm:order-2">
        <SocialLinks size={17} />
        <a
          href="#top"
          aria-label="Back to top"
          title="Back to top"
          className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-100"
        >
          <ArrowUp size={17} strokeWidth={1.6} />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
