import CopyIcon from "../assets/CopyIcon.svg";
import MailIcon from "../assets/MailIcon.svg";
import Section from "./layout/Section";
import ContactBlock from "./ContactBlock";
import ExternalLink from "./ExternalLink";
import { allContacts } from "contentlayer/generated";
import CopyButton from "./CopyButton";

export default function Contact() {
  const contactObj = allContacts[0];
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col items-center">
        <div className="inline-block space-y-12 pt-5">
          {/* email */}
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="w-full text-left text-xl font-medium mb-2 sm:text-right sm:w-50 sm:mb-0">
              Send me a message:
            </div>
            <div className="w-full sm:w-auto sm:pl-4">
              <ExternalLink
                href={`mailto:${contactObj.emailHandle}@${contactObj.emailDomain}`}
                size={20}
                className="font-bold underline text-xl text-text hover:text-primary">
                {contactObj.emailHandle}@{contactObj.emailDomain}
              </ExternalLink>
              <CopyButton textToCopy="email@example.com">
                <div className="inline-flex gap-2 items-center">
                  <CopyIcon width={18} height={18} />
                  {/* <MailIcon width={10} height={10} /> */}
                  <span className="block text-lg mt-1">Copy Email</span>
                </div>
              </CopyButton>
            </div>
          </div>

          {/* linkedin */}
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="w-full text-left text-xl font-medium mb-2 sm:text-right sm:w-50 sm:mb-0">
              Connect with me:
            </div>
            <div className="w-full sm:w-auto sm:pl-4">
              <ExternalLink
                href={`https://${contactObj.linkedin}`}
                size={20}
                className="font-bold underline text-xl text-text hover:text-primary">
                {contactObj.linkedin}
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
