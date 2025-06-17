import Section from "./layout/Section";
import ContactBlock from "./ContactBlock";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col items-center text-center gap-8">
        {/* email */}
        <ContactBlock
          label="Send me a message"
          href="mailto:email@example.com"
          linkLabel="email@example.com">
          <span className="block text-sm text-gray-500 mt-1">[Copy email]</span>
        </ContactBlock>

        {/* linkedin */}
        <ContactBlock
          label="Connect with me"
          href="https://linkedin.com/in/username"
          linkLabel="linkedin.com/in/username"
        />
      </div>
    </Section>
  );
}
