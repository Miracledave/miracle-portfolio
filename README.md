# Ndubuisi Miracle — Portfolio

Personal portfolio site. Built with React, Vite, Tailwind CSS and Framer Motion,
deployed on Vercel.

**Live:** https://miracle-portfolio-rust.vercel.app

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Editing the content

Almost everything you'd want to change — bio, projects, skills, social links,
résumé filename — lives in one file:

```
src/data/site.js
```

The components read from it, so you rarely need to touch JSX to update the site.

## Contact form

The form posts to [Web3Forms](https://web3forms.com), which needs a free access
key (enter your email on their site — no account required).

1. Copy `.env.example` to `.env.local` and set `VITE_WEB3FORMS_KEY`.
2. On Vercel: **Project → Settings → Environment Variables** → add
   `VITE_WEB3FORMS_KEY`, then redeploy.

If the key is not set, the form falls back to opening the visitor's mail client
rather than silently dropping the message.

## Structure

```
public/            static assets served at the site root
  profile.jpg      portrait used in the About section
  og-image.jpg     social sharing preview card (1200×630)
  favicon.svg
  Ndubuisi-Miracle-CV.docx
src/
  data/site.js     all site content
  components/      one component per section, plus shared primitives
  index.css        Tailwind layers + design tokens
tailwind.config.js design system (colours, type scale, fonts)
vercel.json        caching + security headers
```

## Notes

- Assets in `public/` are served from the site root, so reference them as
  `/profile.jpg` — **not** `../../public/profile.jpg`, which 404s in the
  production build.
- `lucide-react` v1 removed brand icons, so the GitHub and LinkedIn marks are
  inline SVGs in `src/components/BrandIcons.jsx`.
