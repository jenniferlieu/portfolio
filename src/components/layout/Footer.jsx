import MailIcon from "../../assets/MailIcon.svg";
import GithubIcon from "../../assets/GithubIcon.svg";
import LinkedinIcon from "../../assets/LinkedinIcon.svg";
import FileTextIcon from "../../assets/FileTextIcon.svg";

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="mailto:example@example.com"
            className="text-gray-500 hover:text-gray-700">
            <MailIcon width={20} height={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-500 hover:text-gray-700">
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href="https://github.com"
            className="text-gray-500 hover:text-gray-700">
            <GithubIcon width={20} height={20} />
          </a>
          <a href="#resume" className="text-gray-500 hover:text-gray-700">
            <FileTextIcon width={20} height={20} />
          </a>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Designed in Figma, built by me • using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
