import TerminalCard from "./TerminalCard";
import Section from "./layout/Section";
import IconLinks from "./IconLinks";

export default function Hero() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-7/12">
          <h2 className="text-lg font-mono mb-2">HELLO, WORLD! 👋</h2>
          <h1 className="text-4xl font-bold mb-2">
            I'm <span className="text-orange-500">Jennifer</span>, a{" "}
            <span className="text-orange-500">full-stack developer</span> &{" "}
            <span className="text-orange-500">software engineer</span>.
          </h1>
          <p className="text-gray-700 my-6">
            I'm a developer with a curiosity for how things work and a passion
            for turning ideas into polished, functional products. That same
            mindset drives how I build. I want my code to be easy to navigate
            and my solutions built for both users and developers.
          </p>
          <IconLinks />
        </div>
        <div className="md:w-4/12">
          <TerminalCard />
        </div>
      </div>
    </Section>
  );
}
