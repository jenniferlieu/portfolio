import PropTypes from "prop-types";

export const SkillCard = ({ title, description, technologies }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
