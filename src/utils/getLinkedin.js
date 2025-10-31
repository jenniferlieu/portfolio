import { allContacts } from "contentlayer/generated";

const contactObj = allContacts[0];
const linkedinURL = `linkedin.com/in`;

export function getLinkedin() {
  return `https://${linkedinURL}/${contactObj.linkedin}`;
}

export function getLinkedinText() {
  return `${linkedinURL}/${contactObj.linkedin}`;
}
