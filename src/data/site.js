// Single source of truth for everything that is "content" rather than "code".
// Edit this file to update the site — components read from it.

export const site = {
  url: 'https://miracle-portfolio-rust.vercel.app',
  name: 'Ndubuisi Miracle',
  initials: 'NM',
  role: 'Front-End Developer',
  location: 'Port Harcourt, Nigeria',
  email: 'miracledavid2005@gmail.com',
  resume: '/Ndubuisi-Miracle-CV.docx',
  available: true,
  availableLabel: 'Open to front-end roles',
  tagline:
    'I build responsive, user-centered web applications with React, Tailwind CSS and modern JavaScript.',
}

export const socials = [
  { name: 'GitHub', href: 'https://github.com/Miracledave', icon: 'github' },
  // TODO: replace with your real LinkedIn URL, or delete this line to hide the link.
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/', icon: 'linkedin' },
  { name: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
]

export const about = {
  heading: 'Building interfaces that ship.',
  body: [
    "I'm a front-end developer and Software Engineering graduate of Babcock University, based in Port Harcourt. I work primarily in React and Tailwind CSS, with a focus on clean UI, accessible markup and responsive layouts that hold up on real devices.",
    "Most of what I know came from building things end to end. LADI, my final-year project, went from an empty repo to a working campus marketplace with authentication, real-time data and file storage — delivered across four Agile sprints and defended in front of faculty.",
  ],
  education: {
    degree: 'B.Sc. Software Engineering',
    school: 'Babcock University, Ilishan-Remo',
    period: '2022 — 2026',
  },
  facts: [
    { label: 'Based in', value: 'Port Harcourt, NG' },
    { label: 'Focus', value: 'React · Tailwind CSS' },
    { label: 'Languages', value: 'English, Igbo' },
  ],
}

export const projects = [
  {
    title: 'LADI — Campus Marketplace',
    year: '2026',
    role: 'Final-year project · Front-end lead',
    featured: true,
    description:
      'A full-stack marketplace that lets Babcock University students and staff buy, sell and trade goods inside the campus community.',
    highlights: [
      'Led front-end development in React and Tailwind CSS, shipping a responsive interface across four Agile sprints',
      'Integrated Supabase for authentication, real-time database operations and file storage',
      'Wrote full academic documentation and defended the build to faculty invigilators',
    ],
    tags: ['React', 'Tailwind CSS', 'Supabase', 'Agile'],
    github: 'https://github.com/Miracledave/LADI',
    live: null,
  },
  {
    title: 'Nextcent — SaaS Landing Page',
    year: '2025',
    role: 'Personal build',
    featured: false,
    description:
      'A pixel-perfect, fully responsive SaaS landing page replicating a modern product design.',
    highlights: [
      'Component-based architecture with reusable UI elements',
      'Responsive design verified across multiple breakpoints',
    ],
    tags: ['React', 'Tailwind CSS', 'CSS'],
    github: 'https://github.com/Miracledave/Nextcent-Tailwind',
    live: null,
  },
  {
    title: 'Food POS — Point of Sale',
    year: '2025',
    role: 'Personal build',
    featured: false,
    description:
      'A browser-based point-of-sale system for food vendors, covering menu browsing, cart management and order tracking.',
    highlights: [
      'Built in vanilla JavaScript — DOM manipulation, event handling and dynamic UI updates',
      'Interface designed for real restaurant and food-vendor workflows',
    ],
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Miracledave/food-pos',
    live: null,
  },
  {
    title: 'Personal Portfolio',
    year: '2026',
    role: 'Personal build',
    featured: false,
    description:
      'This site. A responsive portfolio built from scratch to showcase projects, skills and profile.',
    highlights: [
      'React + Vite with Tailwind CSS and Framer Motion',
      'Deployed on Vercel with a downloadable CV and working contact form',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Miracledave/miracle-portfolio',
    live: 'https://miracle-portfolio-rust.vercel.app',
  },
]

export const skills = [
  {
    title: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git & GitHub', 'Supabase', 'Figma', 'VS Code', 'npm', 'Vercel'],
  },
  {
    title: 'Ways of working',
    items: ['Agile / Scrum', 'UI/UX principles', 'Technical documentation', 'Responsive design'],
  },
]

export const sections = [
  { id: 'work', label: 'Work', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'contact', label: 'Contact', num: '04' },
]
