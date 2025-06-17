import PropTypes from "prop-types";
import BadgeList from "./BadgeList";

export default function SkillCard({ title, description, technologies }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <BadgeList list={technologies} />
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
