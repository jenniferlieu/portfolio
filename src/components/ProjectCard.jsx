import Image from "next/image";

import PropTypes from "prop-types";
import ArrowRightIcon from "../assets/ArrowRightIcon.svg";
import BadgeList from "./BadgeList";
import ButtonPrimary from "./ButtonPrimary";

export default function ProjectCard({
  title,
  slug,
  image,
  headline,
  description,
  impact,
  skills,
}) {
  return (
    <div className="p-6 lg:p-0 border border-border lg:border-none rounded-lg shadow-card lg:shadow-none!">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative lg:w-1/2 rounded-lg md:max-h-[400px] h-[200px] md:h-[400px] w-full flex items-center lg:shadow-card">
          <Image
            src={image || "https://placehold.co/600x400/7d7d7d/7d7d7d.png"}
            alt={title}
            fill
            className="object-cover w-full h-auto rounded-lg shadow-card lg:border lg:border-border"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <span className="text-primary text-sm font-medium">
            {title.toUpperCase()}
          </span>
          <h2 className="text-text font-bold text-2xl mt-1 mb-3">{headline}</h2>
          <p>{description}</p>
          <p>{impact}</p>
          {<BadgeList list={skills} />}
          <ButtonPrimary href={`/project/${slug}`}>
            View Case Study
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-focus:translate-x-1 group-active:translate-x-1"
            />
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
