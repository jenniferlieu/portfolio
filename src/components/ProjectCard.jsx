import PropTypes from "prop-types";
import ArrowRightIcon from "../assets/ArrowRightIcon.svg";
import BadgeList from "./BadgeList";

export default function ProjectCard({
  category,
  title,
  description,
  details,
  technologies,
  image,
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 relative">
      <div className="flex flex-col md:flex-row gap-6">
        {/* description */}
        <div className="md:w-2/3">
          <span className="text-orange-500 font-medium text-sm">
            {category}
          </span>
          <h3 className="font-bold text-xl mt-1 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600 mb-6">{details}</p>
          <BadgeList list={technologies} />
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium hover:underline">
            View Case Study{" "}
            <ArrowRightIcon width={20} height={20} className="ml-1" />
          </a>
        </div>

        {/* image */}
        <div className="md:w-1/3 bg-gray-100 rounded-lg min-h-[200px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg opacity-0"
          />
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};
