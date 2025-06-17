import Link from "next/link";

export default function Header() {
  const navLinks = ["About", "Skills", "Projects", "Contact"];
  const headerLinkStyles = "hover:text-gray-900";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center">
          <Link href="/" className={headerLinkStyles}>
            🍊 Jennifer Lieu
          </Link>
        </div>

        {/* nav links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={link}
              href={`/#${link.toLowerCase()}`}
              className={headerLinkStyles}>
              {link}
            </Link>
          ))}
        </nav>

        {/* external links, other */}
        <div className="flex items-center space-x-4">
          <Link href="#resume" className={headerLinkStyles}>
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
