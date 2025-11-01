import Section from "./layout/Section";
import ExternalLink from "./ExternalLink";
import { getLinkedinLink, getLinkedinText } from "../utils/getLinkedinLink";
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
              <ExternalLink href={getLinkedinLink()} className="text-xl">
                {getLinkedinText()}
              </ExternalLink>
            }
          />
        </div>
      </div>
    </Section>
  );
}
