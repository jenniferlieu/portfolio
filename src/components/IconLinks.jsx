import MailIcon from "../assets/MailIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import FileTextIcon from "../assets/FileTextIcon.svg";

import Link from "next/link";

export default function IconLinks() {
  const socialLinks = [
    {
      key: "email",
      link: "mailto:example@example.com",
      icon: <MailIcon width={20} height={20} />,
    },
    {
      key: "linkedin",
      link: "https://linkedin.com/in/username",
      icon: <LinkedinIcon width={20} height={20} />,
    },
    {
      key: "github",
      link: "https://github.com/username",
      icon: <GithubIcon width={20} height={20} />,
    },
  ];

  const iconStyles = "text-gray-600 hover:text-gray-900";

  return (
    <div className="flex space-x-6 mb-4">
      {socialLinks.map((linkObj) => (
        <a key={linkObj.key} href={linkObj.link} className={iconStyles}>
          {linkObj.icon}
        </a>
      ))}
      <Link href="/resume.pdf" className={iconStyles}>
        <FileTextIcon width={20} height={20} />
      </Link>
    </div>
  );
}
