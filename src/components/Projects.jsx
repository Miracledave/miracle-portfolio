const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB'],
      emoji: '🛒',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates.',
      tags: ['Next.js', 'TypeScript', 'Prisma'],
      emoji: '📋',
    },
    {
      title: 'AI Dashboard',
      description: 'Analytics dashboard with data visualization.',
      tags: ['React', 'Python', 'D3.js'],
      emoji: '📊',
    },
    {
      title: 'Social Media App',
      description: 'Mobile-first social platform with real-time messaging.',
      tags: ['React Native', 'Firebase'],
      emoji: '💬',
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;