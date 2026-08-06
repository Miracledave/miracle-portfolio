import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { site } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import SocialLinks from './SocialLinks'

// Get a free key at https://web3forms.com (enter your email, no account needed),
// then set VITE_WEB3FORMS_KEY in your .env / Vercel environment variables.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const EMPTY = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // Without a key configured, fall back to the visitor's mail client
    // rather than silently dropping the message.
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: 'Portfolio website',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok && data.success) {
        setStatus('sent')
        setForm(EMPTY)
      } else {
        setStatus('error')
        setError(data.message || 'Something went wrong. Please email me directly.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please check your connection or email me directly.')
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink-700/60 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          num="04"
          eyebrow="Contact"
          title="Let's build something together."
          description="I'm open to front-end roles, internships and freelance work. The fastest way to reach me is email — I usually reply within a day."
        />

        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="space-y-8">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-xl border border-ink-700 bg-ink-900/40 p-5 transition-colors hover:border-ink-600"
              >
                <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-ink-700 bg-ink-800 text-accent">
                  <Mail size={17} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-wider text-zinc-600">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-zinc-200 transition-colors group-hover:text-white">
                    {site.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-ink-700 bg-ink-900/40 p-5">
                <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-ink-700 bg-ink-800 text-accent">
                  <MapPin size={17} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-wider text-zinc-600">
                    Location
                  </span>
                  <span className="mt-1 block text-sm text-zinc-200">{site.location}</span>
                </span>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-600">Elsewhere</p>
                <SocialLinks className="-ml-2.5 mt-2" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              {/* Honeypot — real people never fill this in. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={sending}
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={sending}
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@company.com"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  disabled={sending}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell me about the role or project…"
                  className="field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {sending ? (
                  <>
                    <Loader2 size={16} strokeWidth={2} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={15} strokeWidth={2} />
                  </>
                )}
              </button>

              <div aria-live="polite" className="min-h-[1.5rem]">
                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-sm text-accent">
                    <CheckCircle2 size={16} strokeWidth={1.8} />
                    Thanks — your message is on its way. I'll get back to you shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} strokeWidth={1.8} />
                    {error}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
