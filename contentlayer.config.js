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
  },
}));

const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about/about.mdx`,
  contentType: "mdx",
  fields: {
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: true },
    jobTitle: { type: "list", of: { type: "string" }, required: true },
    blurb: { type: "string", required: true },
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
    skills: { type: "list", of: { type: "string" }, required: true },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [SiteInfo, About, Skill],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
    return options;
  },
});
