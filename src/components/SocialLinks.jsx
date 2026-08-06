import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socials } from '../data/site'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail }

const SocialLinks = ({ className = '', size = 18 }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    {socials.map(({ name, href, icon }) => {
      const Icon = ICONS[icon] ?? Mail
      const external = href.startsWith('http')
      return (
        <a
          key={name}
          href={href}
          aria-label={name}
          title={name}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-100"
        >
          <Icon size={size} strokeWidth={1.6} />
        </a>
      )
    })}
  </div>
)

export default SocialLinks
