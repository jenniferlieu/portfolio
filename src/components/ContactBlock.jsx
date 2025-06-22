import PropTypes from "prop-types";

import ExternalLink from "./ExternalLink";

export default function ContactBlock({
  children,
  label,
  href,
  linkLabel,
  size,
  className,
}) {
  return (
    <div className="flex gap-4 items-start">
      <span className="w-full">{label}:</span>
      <ExternalLink href={href} size={size} className={className}>
        {linkLabel}
      </ExternalLink>
      {children}
    </div>
  );
}

ContactBlock.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  className: PropTypes.string,
};
