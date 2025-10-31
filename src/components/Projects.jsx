import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";
import { allProjects } from "contentlayer/generated";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-20">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.slug} {...projectObj} />
        ))}
      </div>
    </Section>
  );
}
