import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { site } from '../data/site'
import SocialLinks from './SocialLinks'

const Hero = () => {
  const reduce = useReducedMotion()

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Ambient background: faint grid, softly masked, plus one warm glow. */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[min(90vw,760px)] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <div className="section-shell relative z-10 py-16">
        <motion.p {...rise(0.05)} className="eyebrow">
          {site.role}
        </motion.p>

        <motion.h1
          {...rise(0.12)}
          className="mt-6 text-display font-semibold text-zinc-50"
        >
          Ndubuisi
          <br />
          <span className="text-zinc-400">Miracle</span>
        </motion.h1>

        <motion.div {...rise(0.2)} className="mt-8 h-px w-16 bg-accent" />

        <motion.p
          {...rise(0.26)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          {...rise(0.34)}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a href="#work" className="btn-primary">
            View selected work
            <ArrowDown size={16} strokeWidth={2} />
          </a>
          <a href={site.resume} download className="btn-ghost">
            Download résumé
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </motion.div>

        <motion.div
          {...rise(0.42)}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-zinc-500"
        >
          {site.available && (
            <span className="inline-flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-zinc-300">{site.availableLabel}</span>
            </span>
          )}
          <span className="hidden h-4 w-px bg-ink-700 sm:block" />
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} strokeWidth={1.6} />
            {site.location}
          </span>
          <span className="hidden h-4 w-px bg-ink-700 sm:block" />
          <SocialLinks className="-ml-2.5" size={17} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
