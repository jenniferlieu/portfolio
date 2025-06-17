import PropTypes from "prop-types";

import ExternalLink from "./ExternalLink";

export default function ContactBlock({ children, label, href, linkLabel }) {
  return (
    <div>
      <span className="block mb-1">{label}:</span>
      <ExternalLink href={href}>{linkLabel}</ExternalLink>
      {children}
    </div>
  );
}

ContactBlock.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};
