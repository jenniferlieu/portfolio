import { allContacts } from "contentlayer/generated";

const contactObj = allContacts[0];

export function getResumeLink() {
  return `/${contactObj.resume}`;
}
