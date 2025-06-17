import PropTypes from "prop-types";

export default function Section({ children, id, title }) {
  return (
    <section id={id}>
      {/* section title */}
      {title ? (
        <div className="flex justify-between items-center gap-4">
          <hr className="flex-grow" />
          <h2 className="text-2xl font-bold font-mono">{title}</h2>
          <hr className="flex-grow" />
        </div>
      ) : (
        ""
      )}

      {/* section content */}
      <div className="py-12 px-4">{children}</div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};
