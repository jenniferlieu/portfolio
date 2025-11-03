import PropTypes from "prop-types";

export default function BadgeList({ list }) {
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((item) => (
        <span
          key={item}
          className="px-3 py-1 bg-border-muted hover:bg-primary/30 focus:bg-primary/30 active:bg-primary/30 text-xs font-mono rounded-full">
          {item}
        </span>
      ))}
    </div>
  );
}

BadgeList.propTypes = {
  list: PropTypes.array.isRequired,
};
