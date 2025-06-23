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
  filePathPattern: `about/about.yaml`,
  contentType: "data",
  fields: {
    name: { type: "string", required: true },
    jobTitle: { type: "list", of: { type: "string" }, required: true },
    blurb: { type: "string", required: true },
  },
}));

const Facts = defineDocumentType(() => ({
  name: "Facts",
  filePathPattern: `about/facts/*.yaml`,
  contentType: "data",
  fields: {
    category: { type: "string", required: true },
    info: { type: "json", required: true },
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
  documentTypes: [SiteInfo, About, Facts, Skill],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
    return options;
  },
});
