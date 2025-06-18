import PropTypes from "prop-types";

import ArrowRightIcon from "../assets/ArrowRightIcon.svg";

export default function ExternalLink({ children, href, className, size }) {
  return (
    <a href={href} className={`group flex items-center ${className}`}>
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
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number.isRequired,
};
