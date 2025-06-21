import Favicon from "../../assets/favicon.svg";

import Link from "next/link";
import ExternalLink from "../ExternalLink";

export default function Header() {
  const navLinks = ["About", "Skills", "Projects", "Contact"];
  const headerLinkStyles = "font-semibold hover:text-primary";

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-linear-45 from-bg-light/20 to-bg-light/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-3 justify-between items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* logo */}
        <Link
          href="/"
          className={`${headerLinkStyles} flex items-center gap-1`}>
          <Favicon alt="favicon" width={25} height={25} />
          <span className="hidden md:inline">Jennifer Lieu</span>
        </Link>

        {/* nav links */}
        <nav className="flex items-center gap-3 lg:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/#${link.toLowerCase()}`}
              className={headerLinkStyles}>
              {link}
            </Link>
          ))}
        </nav>

        {/* external links, other */}
        <div className="flex items-center gap-3">
          <ExternalLink
            href="/resume.pdf"
            size={17}
            className={headerLinkStyles}>
            Resume
          </ExternalLink>
        </div>
      </div>
    </header>
  );
}
