import PropTypes from "prop-types";

import ArrowRightIcon from "../assets/ArrowRightIcon.svg";

export default function ExternalLink({ children, href }) {
  return (
    <a
      href={href}
      className="text-gray-800 font-medium hover:underline inline-flex items-center">
      <span>{children}</span>
      <span className="ml-1">
        <ArrowRightIcon width={20} height={20} />
      </span>
    </a>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
};
