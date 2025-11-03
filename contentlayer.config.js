import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const SiteInfo = defineDocumentType(() => ({
  name: "SiteInfo",
  filePathPattern: `site-info.yaml`,
  contentType: "data",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    keywords: { type: "string", required: true },
    url: { type: "string", required: true },
    author: { type: "string", required: true },
    footer: { type: "mdx", required: true },
  },
}));

const NavLinks = defineDocumentType(() => ({
  name: "NavLinks",
  filePathPattern: `nav-links.yaml`,
  contentType: "data",
  fields: {
    navLinks: { type: "list", of: { type: "json" }, required: true },
    sectionLinks: { type: "list", of: { type: "json" }, required: false },
  },
}));

const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about/about.mdx`,
  contentType: "mdx",
  fields: {
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: true },
    jobTitle: { type: "string", required: true },
    blurb: { type: "mdx", required: false },
    facts: { type: "json", required: true },
  },
}));

const Skill = defineDocumentType(() => ({
  name: "Skill",
  filePathPattern: `skills/*.yaml`,
  contentType: "data",
  fields: {
    category: { type: "string", required: true },
    description: { type: "string", required: true },
    order: { type: "number", required: false },
    skills: { type: "list", of: { type: "string" }, required: true },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    image: { type: "string", required: true },
    headline: { type: "string", required: true },
    description: { type: "string", required: true },
    impact: { type: "string", required: true },
    skills: { type: "list", of: { type: "string" }, required: true },
    technologies: { type: "list", of: { type: "string" }, required: true },
    stats: { type: "list", of: { type: "json" }, required: true },
    summary: { type: "mdx", required: true },
  },
}));

const Contact = defineDocumentType(() => ({
  name: "Contact",
  filePathPattern: `contact.yaml`,
  contentType: "data",
  fields: {
    emailHandle: { type: "string", required: true },
    emailProvider: { type: "string", required: true },
    emailDomain: { type: "string", required: true },
    github: { type: "string", required: true },
    linkedin: { type: "string", required: true },
    resume: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [SiteInfo, NavLinks, About, Skill, Project, Contact],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
    return options;
  },
});
