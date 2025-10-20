import Favicon from "../../assets/favicon.svg";

import Link from "next/link";
import ExternalLink from "../ExternalLink";
import { allNavLinks } from "contentlayer/generated";

export default function Header() {
  const navLinks = allNavLinks[0];
  const internalLinks = navLinks.internalLinks;
  const externalLinks = navLinks.externalLinks;
  const faviconSize = 25;
  const externalLinkArrowSize = 17;
  const headerLinkStyles = "font-semibold hover:text-primary";

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
          {Object.entries(internalLinks).map(([key, value]) => (
            <Link
              key={value.name}
              href={value.url}
              className={headerLinkStyles}>
              {value.name}
            </Link>
          ))}
        </nav>

        {/* external links, other */}
        <div className="flex items-center gap-3">
          {Object.entries(externalLinks).map(([key, value]) => (
            <ExternalLink
              key={value.name}
              href={value.url}
              size={externalLinkArrowSize}
              className={headerLinkStyles}>
              {value.name}
            </ExternalLink>
          ))}
        </div>
      </div>
    </header>
  );
}
