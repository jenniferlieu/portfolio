import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="max-w-page-width mx-auto py-page-padding-y">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
