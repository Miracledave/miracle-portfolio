const About = () => {
  const features = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive, and responsive user interfaces.',
    },
    {
      title: 'Problem Solver',
      description: 'Turning complex problems into simple, elegant solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-20 absolute transform translate-x-4 translate-y-4" />
              <div className="w-full h-80 bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl">
                    <img src="../../public/IMG_3035.JPG" alt="img" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Passionate about building great products</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a developer with 3+ years of experience building web applications. 
              I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">3+</div>
                <div className="text-sm text-gray-500">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">50+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">20+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;