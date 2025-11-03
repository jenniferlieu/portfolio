import { getSectionTitle } from "../utils/getSectionTitle";
import { sortByOrder } from "../utils/sortByOrder";
import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";
import { allProjects } from "contentlayer/generated";

export default function Projects() {
  const sectionTitle = getSectionTitle("Projects");
  return (
    <Section id="projects" title={sectionTitle}>
      <div className="space-y-20">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.slug} {...projectObj} />
        ))}
      </div>
    </Section>
  );
}
