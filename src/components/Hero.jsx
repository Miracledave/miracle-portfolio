const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-gray-950 to-gray-950" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-blue-400 font-semibold text-lg mb-4">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Ndubuisi Miracle
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Front End Developer & UI/UX Enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
          >
            View My Work ↓
          </a>
          <a
            href="../../public/Miracle CV.docx"
            download="Miracle CV.docx"
            className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
          >
            Download CV ⬇
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;