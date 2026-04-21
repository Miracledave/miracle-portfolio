const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm">
          © 2026 Ndubuisi Miracle. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          Made using React
        </div>

        <div className="flex gap-4 text-gray-500">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            GH
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            LI
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            TW
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;