import { allContacts } from "contentlayer/generated";

const contactObj = allContacts[0];

export function getGithub() {
  return `https://github.com/${contactObj.github}`;
}
