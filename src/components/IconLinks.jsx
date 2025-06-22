import MailIcon from "../assets/MailIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import FileTextIcon from "../assets/FileTextIcon.svg";

import PropTypes from "prop-types";
import Link from "next/link";

export default function IconLinks({ size = 25 }) {
  const socialLinks = [
    {
      key: "email",
      link: "mailto:example@example.com",
      icon: <MailIcon width={size + 3} height={size + 3} />,
    },
    {
      key: "linkedin",
      link: "https://linkedin.com/in/username",
      icon: <LinkedinIcon width={size} height={size} />,
    },
    {
      key: "github",
      link: "https://github.com/username",
      icon: <GithubIcon width={size} height={size} />,
    },
  ];

  const iconStyles = "text-border hover:text-primary";

  return (
    <div className="inline-flex gap-4">
      {socialLinks.map((linkObj) => (
        <a key={linkObj.key} href={linkObj.link} className={iconStyles}>
          {linkObj.icon}
        </a>
      ))}
      <Link href="/resume.pdf" className={iconStyles}>
        <FileTextIcon width={size} height={size} />
      </Link>
    </div>
  );
}

IconLinks.propTypes = {
  size: PropTypes.number,
};
