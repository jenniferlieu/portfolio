import PropTypes from "prop-types";
import BadgeList from "./BadgeList";

export default function SkillCard({ category, description, skills }) {
  return (
    <div className="border border-border rounded-lg p-6 shadow-card">
      <h3 className="text-text font-bold mb-2">{category}</h3>
      <p className="mb-4">{description}</p>
      <BadgeList list={skills} />
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
