const Projects = () => {
  const projects = [
    {
      title: 'LADI - Campus Marketplace System',
      description: 'Designed and built a full-stack web marketplace enabling Babcock University students and staff to buy, sell, and trade goods within the campus community.',
      tags: ['React.js', 'Tailwind CSS', 'Supabase', 'Agile Sprints'],
      emoji: '🛒',
      github: 'https://github.com/Miracledave/LADI',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive personal portfolio built with React and Tailwind CSS, featuring smooth UI, downloadable CV, and live deployment on Vercel.',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      emoji: '🌐',
      github: 'https://github.com/Miracledave/miracle-portfolio',
    },
    {
      title: 'Nextcent Landing Page',
      description: 'A pixel-perfect, responsive SaaS landing page built with React and Tailwind CSS, practising component architecture and multi-breakpoint layouts.',
      tags: ['React', 'Tailwind CSS', 'CSS'],
      emoji: '🎨',
      github: 'https://github.com/Miracledave/Nextcent-Tailwind',
    },
    {
      title: 'Food POS System',
      description: 'A browser-based food point-of-sale system with menu browsing, cart management, and order tracking — built with vanilla JavaScript.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      emoji: '🍔',
      github: 'https://github.com/Miracledave/food-pos',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                {project.emoji}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;