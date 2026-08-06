import { GraduationCap } from 'lucide-react'
import { about, site } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const About = () => (
  <section id="about" className="scroll-mt-24 border-t border-ink-700/60 py-24 md:py-32">
    <div className="section-shell">
      <SectionHeading num="02" eyebrow="About" title={about.heading} />

      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-ink-700"
            />
            <img
              src="/profile.jpg"
              alt={`Portrait of ${site.name}`}
              width="900"
              height="1200"
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/5] w-full rounded-2xl border border-ink-700 object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>

          <dl className="mt-8 space-y-3">
            {about.facts.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 border-b border-ink-700/60 pb-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-600">{label}</dt>
                <dd className="text-right text-sm text-zinc-300">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <div className="space-y-6">
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-[1.75] text-zinc-400">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-ink-700 bg-ink-900/40 p-6">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-ink-700 bg-ink-800 text-accent">
                <GraduationCap size={18} strokeWidth={1.7} />
              </span>
              <div>
                <p className="eyebrow">Education</p>
                <h3 className="mt-2 font-semibold text-zinc-100">{about.education.degree}</h3>
                <p className="mt-1 text-sm text-zinc-400">{about.education.school}</p>
                <p className="mt-1 font-mono text-xs text-zinc-600">{about.education.period}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
)

export default About
