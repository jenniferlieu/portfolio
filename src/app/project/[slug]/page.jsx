import { notFound } from "next/navigation";
import { allProjects, allSiteInfos } from "contentlayer/generated";
import ArrowleftIcon from "../../../assets/ArrowLeftIcon.svg";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "../../../components/ExternalLink";
import ButtonPrimary from "../../../components/ButtonPrimary";

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = allProjects.find((proj) => proj.slug === slug);
  if (!project) notFound();

  const siteInfo = allSiteInfos[0];
  const title = `${siteInfo.title} - ${project.title}`;
  const url = `${siteInfo.url}/project/${project.slug}`;

  return {
    title: title,
    description: project.description,
    authors: [{ name: siteInfo.author }],
    creator: siteInfo.author,
    openGraph: {
      title: title,
      description: project.description,
      url: url,
      siteName: siteInfo.title,
      type: "website",
      image: project.image,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: project.description,
      image: project.image,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = allProjects.find((proj) => proj.slug === slug);
  if (!project) notFound();

  // Find previous and next projects
  const projextIndex = allProjects.indexOf(project);
  const previousProjectSlug = allProjects[projextIndex - 1]?.slug || null;
  const nextProjectSlug = allProjects[projextIndex + 1]?.slug || null;

  const MDXSummary = getMDXComponent(project.summary.code);
  const MDXContent = getMDXComponent(project.body.code);

  return (
    <main className="max-w-page-width mx-auto py-page-padding-y px-page-padding-x lg:px-page-padding-x-lg space-y-8">
      {/* Back to Home button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 group hover:text-primary">
        <ArrowleftIcon
          size={20}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span className="font-semibold">Home</span>
      </Link>

      <article className="space-y-8">
        {/* Header */}
        <header className="space-y-10">
          {/* Project Image */}
          <div className="relative h-[54vh] rounded-lg w-full shadow-card border border-border">
            <Image
              src={project.image}
              alt={`Banner image of ${project.title} project`}
              fill
              className="rounded-lg h-auto w-full object-cover"
            />
          </div>

          {/* Title and Description */}
          <h1 className="my-5">
            <span className="text-primary">[ {project.title} ] </span>
            {project.headline}
          </h1>
          <div className="text-text text-xl">{project.description}</div>

          {/* Stats */}
          <div className="space-y-8 lg:space-y-0">
            {/* Stats: Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <p className="font-bold text-primary">{stat.label}</p>
                  {stat.label !== "Links" ? (
                    <p>{stat.value}</p>
                  ) : (
                    <div className="flex flex-col">
                      {stat.value.map((link, index) => (
                        <ExternalLink
                          key={index}
                          href={link.value}
                          size={16}
                          className="underline">
                          {link.label}
                        </ExternalLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Stats: Row 2 */}
            <div>
              <p className="font-bold text-primary">Skills</p>
              <p>{project.skills.join(", ")}</p>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="prose dark:prose-invert max-w-none border-t border-b border-border py-8">
          <h2>Summary & impact</h2>
          <MDXSummary />
        </section>

        {/* Main Content */}
        <section className="prose dark:prose-invert max-w-none">
          <MDXContent />
        </section>

        {/* Footer */}
        <footer className="flex justify-between">
          {previousProjectSlug ? (
            <ButtonPrimary href={`/project/${previousProjectSlug}`}>
              Previous
            </ButtonPrimary>
          ) : (
            <div></div>
          )}
          {nextProjectSlug ? (
            <ButtonPrimary href={`/project/${nextProjectSlug}`}>
              Next
            </ButtonPrimary>
          ) : (
            <div></div>
          )}
        </footer>
      </article>
    </main>
  );
}
