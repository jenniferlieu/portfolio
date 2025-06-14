export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <span className="text-gray-600 hover:text-gray-900">
            🍊 Jennifer Lieu
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="#resume"
            className="text-gray-600 hover:text-gray-900 font-medium">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};
