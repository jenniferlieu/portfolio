import PropTypes from "prop-types";

export default function ContactBlock({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start">
      <div className="w-full text-left text-xl font-medium mb-2 sm:text-right sm:w-50 sm:mb-0">
        {label}
        {":"}
      </div>
      <div className="w-full sm:w-auto sm:pl-4">{value}</div>
    </div>
  );
}

ContactBlock.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};
