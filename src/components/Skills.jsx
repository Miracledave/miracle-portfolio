import { skills } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const Skills = () => (
  <section id="skills" className="scroll-mt-24 border-t border-ink-700/60 py-24 md:py-32">
    <div className="section-shell">
      <SectionHeading
        num="03"
        eyebrow="Capabilities"
        title="Tools I reach for."
        description="The stack I work in day to day, and the practices I bring to a team."
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06} className="bg-ink-950 p-7 sm:p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-ink-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-300">
                {group.title}
              </h3>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-ink-700 bg-ink-900/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-accent/40 hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
