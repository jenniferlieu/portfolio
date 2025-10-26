import Section from "./layout/Section";
import ExternalLink from "./ExternalLink";
import { getLinkedin, getLinkedinText } from "../utils/getLinkedin";
import EmailLink from "./EmailLink";

export default function Contact() {
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
              <EmailLink />
            </div>
          </div>

          {/* linkedin */}
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="w-full text-left text-xl font-medium mb-2 sm:text-right sm:w-50 sm:mb-0">
              Connect with me:
            </div>
            <div className="w-full sm:w-auto sm:pl-4">
              <ExternalLink
                href={getLinkedin()}
                size={20}
                className="font-bold underline text-xl text-text hover:text-primary">
                {getLinkedinText()}
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
