import PropTypes from "prop-types";

export default function BadgeList({ list }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {list.map((item) => (
        <span
          key={item}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
          {item}
        </span>
      ))}
    </div>
  );
}

BadgeList.propTypes = {
  list: PropTypes.array.isRequired,
};
