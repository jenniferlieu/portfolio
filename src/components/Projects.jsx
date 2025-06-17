import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const project1 = {
    category: "LOMD",
    title: "Bridging Gamers Through Real-World Connections",
    description:
      "Social platform to build a party of gamers for offline games like Dungeons & Dragons, Small Box, and Magic: The Gathering",
    details:
      "Implemented core backend features, including authentication, real-time updates with WebSockets, and integrations with Google Maps and IGDB",
    technologies: [
      "React",
      "Laravel PHP",
      "Tailwind",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "FIGMA",
    ],
    image: "https://placehold.co/600x400/e2e8f0/e2e8f0",
  };
  const project2 = {
    category: "OTTOMIX",
    title: "Challenging Party-Goers With Timed Trivia Battles",
    description:
      "Web-based trivia game challenging players to think as fast as they can to win first place and star items",
    details:
      "Integrated WebSockets with state management to support real-time gameplay for 30+ concurrent users",
    technologies: ["React", "Go", "WebSockets"],
    image: "https://placehold.co/600x400/e2e8f0/e2e8f0",
  };
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-10">
        <ProjectCard {...project1} />
        <ProjectCard {...project2} />
      </div>
    </Section>
  );
}
