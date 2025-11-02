import TerminalCard from "./TerminalCard";
import Section from "./layout/Section";
import IconLinks from "./IconLinks";
import { allAbouts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";

export default function Hero() {
  const about = allAbouts[0];
  const MDXAboutBlurb = getMDXComponent(about.blurb.code);
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="lg:w-7/12">
          <h2 className="text-text text-lg font-mono mb-2 flex items-end gap-1">
            HELLO, WORLD! <div className="text-2xl animate-wave">👋</div>
          </h2>
          <h1 className="text-text text-4xl font-bold">
            I'm <span className="text-primary">{about.firstName}</span>, a{" "}
            <span className="text-primary">{about.jobTitle.toLowerCase()}</span>
            .
          </h1>
          {about.blurb && (
            <div className="my-6 prose prose-invert">
              <MDXAboutBlurb />
            </div>
          )}
          <IconLinks size={22} />
        </div>
        <div className="lg:w-5/12">
          <TerminalCard />
        </div>
      </div>
    </Section>
  );
}
