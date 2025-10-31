import PropTypes from "prop-types";
import Link from "next/link";

export default function ButtonPrimary({ children, href }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white! duration-100 transition-colors">
      {children}
    </Link>
  );
}

ButtonPrimary.propTypes = {
  href: PropTypes.string.isRequired,
};
