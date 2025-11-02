import { allAbouts, allSiteInfos } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import SubpageLayout from "../../components/layout/SubpageLayout";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const siteInfo = allSiteInfos[0];
  const about = allAbouts[0];
  const title = `${slug} - ${siteInfo.title}`;
  const url = `${siteInfo.url}/${slug}`;

  return {
    title: title,
    description: about.blurb,
    authors: [{ name: siteInfo.author }],
    creator: siteInfo.author,
    openGraph: {
      title: title,
      description: about.blurb,
      url: url,
      siteName: siteInfo.title,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: about.blurb,
    },
  };
}

export default async function About() {
  const about = allAbouts[0];

  const MDXContent = getMDXComponent(about.body.code);

  return (
    <SubpageLayout>
      <h1>About Little Ol' Me</h1>
      <h2 className="font-mono">Loading brain....</h2>
      <article className="prose prose-invert max-w-none">
        <MDXContent />
      </article>
    </SubpageLayout>
  );
}
