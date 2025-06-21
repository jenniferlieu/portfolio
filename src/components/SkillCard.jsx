import PropTypes from "prop-types";
import BadgeList from "./BadgeList";

export default function SkillCard({ title, description, technologies }) {
  return (
    <div className="border border-border rounded-lg p-6">
      <h3 className="text-text font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <BadgeList list={technologies} />
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
