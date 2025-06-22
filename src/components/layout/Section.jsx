import PropTypes from "prop-types";

export default function Section({ children, id, title }) {
  return (
    <section id={id}>
      {/* section title */}
      {title ? (
        <div className="flex justify-between items-center gap-4 pt-page-padding-y">
          <hr className="flex-grow border-border" />
          <h2 className="text-text text-xl font-bold font-mono">{title}</h2>
          <hr className="flex-grow border-border" />
        </div>
      ) : (
        ""
      )}

      {/* section content */}
      <div className="py-12 px-page-padding-x">{children}</div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};
