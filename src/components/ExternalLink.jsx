import PropTypes from "prop-types";

import ArrowRightIcon from "../assets/ArrowRightIcon.svg";

export default function ExternalLink({ children, className, href, size }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`group flex items-center ${className}`}>
      <span>{children}</span>
      <span className="ml-1">
        <ArrowRightIcon
          width={size}
          height={size}
          className="transition-transform duration-300 -rotate-45 group-hover:rotate-0"
        />
      </span>
    </a>
  );
}

ExternalLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
