import { allContacts } from "contentlayer/generated";

const contactObj = allContacts[0];

export function getEmail() {
  return `${contactObj.emailHandle}@${contactObj.emailProvider}.${contactObj.emailDomain}`;
}

export function getEmailText() {
  return `${contactObj.emailHandle} [at] ${contactObj.emailProvider} [dot] ${contactObj.emailDomain}`;
}
