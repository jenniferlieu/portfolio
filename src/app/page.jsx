import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="flex-grow max-w-6xl mx-auto px-4 w-full">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
