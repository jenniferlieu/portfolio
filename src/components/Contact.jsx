import Section from "./layout/Section";

export const Contact = () => {
  return (
    <Section title="Contact">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <span className="block mb-1">Send me a message:</span>
          <a
            href="mailto:example@example.com"
            className="text-gray-800 font-medium hover:underline inline-flex items-center">
            example@example.com <span className="ml-1">→</span>
          </a>
          <span className="block text-sm text-gray-500 mt-1">[Copy email]</span>
        </div>
        <div className="mt-4">
          <span className="block mb-1">Connect with me:</span>
          <a
            href="https://linkedin.com/in/username"
            className="text-gray-800 font-medium hover:underline inline-flex items-center">
            linkedin.com/in/username <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
};
