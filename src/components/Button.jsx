import PropTypes from "prop-types";
import Link from "next/link";

export default function Button({ children, variant, href }) {
  let result;
  const style =
    "group cursor-pointer inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary focus:bg-primary active:bg-primary hover:text-white! focus:text-white! active:text-white! group-hover:bg-primary group-focus:bg-primary group-active:bg-primary group-hover:text-white! group-focus:text-white! group-active:text-white! duration-300 transition-colors ease-out";
  switch (variant) {
    case "button":
      result = <button className={style}>{children}</button>;
      break;
    default:
      result = (
        <Link href={href} className={style}>
          {children}
        </Link>
      );
  }
  return result;
}

Button.propTypes = {
  variant: PropTypes.string,
  href: PropTypes.string,
};
