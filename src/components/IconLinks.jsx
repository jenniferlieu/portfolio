import MailIcon from "../assets/MailIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import FileTextIcon from "../assets/FileTextIcon.svg";
import PropTypes from "prop-types";
import Link from "next/link";
import { getLinkedin } from "../utils/getLinkedin";
import { getGithub } from "../utils/getGithub";
import { getEmail } from "../utils/getEmail";
import CopyButton from "./CopyButton";

export default function IconLinks({ size = 25 }) {
  const socialLinks = [
    {
      key: "linkedin",
      link: getLinkedin(),
      icon: <LinkedinIcon width={size} height={size} />,
    },
    {
      key: "github",
      link: getGithub(),
      icon: <GithubIcon width={size} height={size} />,
    },
  ];

  const iconStyles = "text-border hover:text-primary";

  return (
    <div className="inline-flex gap-4">
      <CopyButton textToCopy={getEmail()}>
        <MailIcon width={size + 3} height={size + 3} className={iconStyles} />
      </CopyButton>
      {socialLinks.map((linkObj) => (
        <a
          key={linkObj.key}
          href={linkObj.link}
          target="_blank"
          className={iconStyles}>
          {linkObj.icon}
        </a>
      ))}
      <Link href="/resume.pdf" target="_blank" className={iconStyles}>
        <FileTextIcon width={size} height={size} />
      </Link>
    </div>
  );
}

IconLinks.propTypes = {
  size: PropTypes.number,
};
