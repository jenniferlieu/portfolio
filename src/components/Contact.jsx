import Section from "./layout/Section";
import ContactBlock from "./ContactBlock";
import ExternalLink from "./ExternalLink";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col items-center">
        <div className="inline-block space-y-12 pt-5">
          {/* email */}
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="w-full text-left text-xl font-medium mb-2 sm:text-right sm:w-48 sm:mb-0">
              Send me a message:
            </div>
            <div className="w-full sm:w-auto sm:pl-4">
              <ExternalLink
                href="mailto:email@example.com"
                size={20}
                className="font-bold underline text-xl">
                email@example.com
              </ExternalLink>
              <span className="block text-lg text-text-muted mt-1">
                [Copy email]
              </span>
            </div>
          </div>

          {/* linkedin */}
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="w-full text-left text-xl font-medium mb-2 sm:text-right sm:w-48 sm:mb-0">
              Connect with me:
            </div>
            <div className="w-full sm:w-auto sm:pl-4">
              <ExternalLink
                href="https://linkedin.com/in/username"
                size={20}
                className="font-bold underline text-xl">
                linkedin.com/in/username
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
