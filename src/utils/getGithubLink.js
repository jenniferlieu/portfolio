import { allContacts } from "contentlayer/generated";

const contactObj = allContacts[0];

export function getGithubLink() {
  return `https://github.com/${contactObj.github}`;
}
