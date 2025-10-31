import Favicon from "../../assets/favicon.svg";

import Link from "next/link";
import { allNavLinks } from "contentlayer/generated";

export default function Header() {
  const navLinks = allNavLinks[0];
  const internalLinks = navLinks.internalLinks;
  const faviconSize = 25;
  const headerLinkStyles = "font-semibold";

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-linear-45 from-bg/20 to-bg/50 backdrop-blur-lg">
      <div className="max-w-page-width mx-auto p-page-padding-x flex gap-3 justify-between items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* logo */}
        <Link
          href="/"
          className={`${headerLinkStyles} flex items-center gap-1`}>
          <Favicon alt="favicon" width={faviconSize} height={faviconSize} />
          <span className="hidden md:inline">Jennifer Lieu</span>
        </Link>

        {/* nav links */}
        <nav className="flex items-center gap-3 lg:gap-5">
          {internalLinks.map((link, index) => (
            <Link key={index} href={link.url} className={headerLinkStyles}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
