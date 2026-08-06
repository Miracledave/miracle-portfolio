import Reveal from './Reveal'

const SectionHeading = ({ num, eyebrow, title, description }) => (
  <Reveal className="mb-14 md:mb-20">
    <div className="flex items-baseline gap-4">
      {num && <span className="font-mono text-xs text-ink-600">{num}</span>}
      <span className="eyebrow">{eyebrow}</span>
    </div>
    <h2 className="mt-5 max-w-2xl text-headline font-semibold text-zinc-50">{title}</h2>
    {description && (
      <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">{description}</p>
    )}
  </Reveal>
)

export default SectionHeading
