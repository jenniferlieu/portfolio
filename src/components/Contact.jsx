import Section from "./layout/Section";
import ExternalLink from "./ExternalLink";
import { getLinkedin, getLinkedinText } from "../utils/getLinkedin";
import EmailLink from "./EmailLink";
import ContactBlock from "./ContactBlock";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col items-center">
        <div className="inline-block space-y-12 pt-5">
          {/* email */}
          <ContactBlock label="Send me a message" value={<EmailLink />} />

          {/* linkedin */}
          <ContactBlock
            label="Connect with me"
            value={
              <ExternalLink
                href={getLinkedin()}
                size={20}
                className="font-bold underline text-xl text-text">
                {getLinkedinText()}
              </ExternalLink>
            }
          />
        </div>
      </div>
    </Section>
  );
}
