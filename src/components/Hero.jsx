import TerminalCard from "./TerminalCard";
import Section from "./layout/Section";
import IconLinks from "./IconLinks";
import { allAbouts } from "contentlayer/generated";

export default function Hero() {
  const about = allAbouts[0];
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-10/12 lg:w-7/12">
          <h2 className="text-text text-lg font-mono mb-2 flex items-end gap-1">
            HELLO, WORLD! <div className="text-2xl animate-wave">👋</div>
          </h2>
          <h1 className="text-text text-4xl font-bold mb-2">
            I'm <span className="text-primary">{about.firstName}</span>, a{" "}
            <span className="text-primary">
              {about.jobTitle[0].toLowerCase()}
            </span>{" "}
            &{" "}
            <span className="text-primary">
              {about.jobTitle[1].toLowerCase()}
            </span>
            .
          </h1>
          <p className="my-6">{about.blurb}</p>
          <IconLinks />
        </div>
        <div className="md:w-6/12 lg:w-4/12">
          <TerminalCard />
        </div>
      </div>
    </Section>
  );
}
