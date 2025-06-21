import Image from "next/image";
import Link from "next/link";

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
    <div className="p-6 lg:p-0 border border-border lg:border-none rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative lg:w-1/2 rounded-lg md:max-h-[400px] h-[200px] md:h-[400px] w-full flex items-center">
          <Image
            src={image || "https://placehold.co/600x400/7d7d7d/7d7d7d.png"}
            alt={title}
            fill
            className="object-cover w-full h-auto rounded-lg lg:border lg:border-border"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <span className="text-primary text-sm font-medium">
            {category.toUpperCase()}
          </span>
          <h2 className="text-text font-bold text-2xl mt-1 mb-3">{title}</h2>
          <p>{description}</p>
          <p>{details}</p>
          {<BadgeList list={technologies} />}
          <Link
            href={`/project/${category}`}
            className="group inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white duration-100 transition-colors">
            View Case Study
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
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
