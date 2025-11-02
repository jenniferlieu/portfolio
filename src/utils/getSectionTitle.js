import { allNavLinks } from "contentlayer/generated";

export function getSectionTitle(label) {
  return allNavLinks[0].sectionLinks.find((link) => link.label === label).title;
}
