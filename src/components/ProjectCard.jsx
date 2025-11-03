import Image from "next/image";

import PropTypes from "prop-types";
import ArrowRightIcon from "../assets/ArrowRightIcon.svg";
import BadgeList from "./BadgeList";
import Button from "./Button";
import Link from "next/link";

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
    <Link
      href={`/project/${slug}`}
      className="group block p-6 flex flex-col lg:flex-row gap-6 border
      border-border rounded-lg shadow-card no-hover">
      <div className="relative lg:w-1/2 rounded-lg md:max-h-[400px] h-[200px] md:h-[400px] w-full flex items-center !hover:none !active:none">
        <Image
          src={image || "https://placehold.co/600x400/7d7d7d/7d7d7d.png"}
          alt={title}
          fill
          className="object-cover w-full h-auto rounded-lg lg:border lg:border-border"
        />
      </div>
      <div className="lg:w-1/2 space-y-6 !hover:none !active:none">
        <span className="text-primary text-sm font-medium font-mono !hover:none !active:none">
          {title.toUpperCase()}
        </span>
        <h2 className="text-text font-bold text-2xl mt-1 mb-3 !hover:none !active:none">
          {headline}
        </h2>
        <p className="hidden lg:block !hover:none !active:none">
          {description}
        </p>
        <p className="!hover:none !active:none">{impact}</p>
        {<BadgeList list={skills} className="!hover:none !active:none" />}
        <Button variant="button">
          View Case Study
          <ArrowRightIcon
            width={16}
            height={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus:translate-x-1 group-active:translate-x-1"
          />
        </Button>
      </div>
    </Link>
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
