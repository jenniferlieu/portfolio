import { allAbouts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import SubpageLayout from "../../components/layout/SubpageLayout";

export default function About() {
  const about = allAbouts[0];

  const MDXContent = getMDXComponent(about.body.code);

  return (
    <SubpageLayout>
      <h1>About Little Ol' Me</h1>
      <article className="prose prose-invert max-w-none">
        <MDXContent />
      </article>
    </SubpageLayout>
  );
}
