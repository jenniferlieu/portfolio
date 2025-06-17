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
    <div className=" p-6 lg:p-0 border border-gray-700 lg:border-none rounded-lg lg:hover:shadow-none hover:border-gray-300 hover:shadow-[0px_0px_10px_0px_rgba(64,64,64,0.2)] transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative lg:w-1/2 bg-gray-100 rounded-lg md:max-h-[400px] flex items-center">
          <Image
            src={image || "https://placehold.co/600x400/e2e8f0/e2e8f0.png"}
            alt={title}
            width={600}
            height={400}
            className="object-cover rounded-lg lg:border lg:border-gray-700 transition-all duration-200 ease-in-out hover:opacity-80 w-full h-full"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <span className="text-orange-500 font-medium text-sm">
            {category.toUpperCase()}
          </span>
          <h2 className="font-bold text-2xl mt-1 mb-3">{title}</h2>
          <p>{description}</p>
          <p>{details}</p>
          {<BadgeList list={technologies} />}
          <Link
            href={`/project/${category}`}
            className="group inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-orange-500 border border-orange-500 rounded-lg hover:shadow-md hover:bg-orange-500 hover:border-orange-200 hover:text-white duration-100 transition-colors">
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
