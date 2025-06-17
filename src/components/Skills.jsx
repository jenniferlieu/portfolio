import Section from "./layout/Section";
import SkillCard from "./SkillCard";

export default function Skills() {
  const frontendSkills = {
    title: "Frontend Development",
    description:
      "I transform designs into real websites with pixel-perfect, responsive, and accessible interfaces.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
    ],
  };
  const backendSkills = {
    title: "Backend Development",
    description:
      "I design APIs with a focus on stability, scalability, and seamless integration with frontends and external services.",
    technologies: [
      "Laravel PHP",
      "Node.js",
      "Express",
      "Java Servlets",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "REST APIs",
    ],
  };
  const softwareSkills = {
    title: "Software Development",
    description:
      "I'm primarily a Java developer, but I'm comfortable working across languages and frameworks. I focus on building systems that are maintainable and extensible",
    technologies: ["Java", "JavaScript", "C", "Python", "Swift"],
  };
  const devopsSkills = {
    title: "DevOps",
    description:
      "I believe in automating the boring stuff. I've started integrating DevOps practices like CI/CD into my workflows to improve reliability and speed up deployments.",
    technologies: ["Git", "GitHub Actions", "Docker", "Vercel", "Netlify"],
  };
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard {...frontendSkills} />
        <SkillCard {...backendSkills} />
        <SkillCard {...softwareSkills} />
        <SkillCard {...devopsSkills} />
      </div>
    </Section>
  );
}
