import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const Tag = ({ children }) => (
  <span className="rounded-full border border-ink-700 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
    {children}
  </span>
)

const ProjectLinks = ({ github, live }) => (
  <div className="flex flex-wrap items-center gap-5">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline text-sm"
      >
        <GithubIcon size={15} />
        Source
      </a>
    )}
    {live && (
      <a href={live} target="_blank" rel="noopener noreferrer" className="link-underline text-sm">
        <ArrowUpRight size={15} strokeWidth={1.7} />
        Live site
      </a>
    )}
  </div>
)

const Featured = ({ project }) => (
  <Reveal className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/60 p-7 transition-colors hover:border-ink-600 sm:p-10">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-150"
    />
    <div className="relative">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
          Featured
        </span>
        <span className="font-mono text-xs text-zinc-500">{project.year}</span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-xs text-zinc-500">{project.role}</p>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-6 max-w-2xl space-y-2.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
            <span aria-hidden="true" className="mt-2 h-px w-4 flex-none bg-ink-600" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-8">
        <ProjectLinks github={project.github} live={project.live} />
      </div>
    </div>
  </Reveal>
)

const Card = ({ project, delay }) => (
  <Reveal
    delay={delay}
    className="group flex flex-col rounded-2xl border border-ink-700 bg-ink-900/40 p-7 transition-colors hover:border-ink-600"
  >
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <span className="mt-1 flex-none font-mono text-xs text-zinc-600">{project.year}</span>
    </div>

    <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

    <ul className="mt-4 space-y-2">
      {project.highlights.map((h) => (
        <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-zinc-500">
          <span aria-hidden="true" className="mt-2 h-px w-3 flex-none bg-ink-600" />
          {h}
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap gap-2">
      {project.tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>

    <div className="mt-7 pt-1">
      <ProjectLinks github={project.github} live={project.live} />
    </div>
  </Reveal>
)

const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          num="01"
          eyebrow="Selected work"
          title="Things I've designed, built and shipped."
          description="Each project below is something I took from an empty repository to a working product."
        />

        <div className="space-y-6">
          {featured.map((p) => (
            <Featured key={p.title} project={p} />
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Card key={p.title} project={p} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
