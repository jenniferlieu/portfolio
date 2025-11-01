import MailIcon from "../assets/MailIcon.svg";
import GithubIcon from "../assets/GithubIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import FileTextIcon from "../assets/FileTextIcon.svg";
import PropTypes from "prop-types";
import { getLinkedinLink } from "../utils/getLinkedinLink";
import { getGithubLink } from "../utils/getGithubLink";
import { getEmailLink } from "../utils/getEmailLink";
import { getResumeLink } from "../utils/getResumeLink";
import CopyButton from "./CopyButton";
import ExternalLink from "./ExternalLink";

export default function IconLinks({ size = 25 }) {
  const socialLinks = [
    {
      key: "github",
      link: getGithubLink(),
      icon: <GithubIcon width={size} height={size} />,
    },
    {
      key: "linkedin",
      link: getLinkedinLink(),
      icon: <LinkedinIcon width={size - 1} height={size - 1} />,
    },
    {
      key: "resume",
      link: getResumeLink(),
      icon: <FileTextIcon width={size} height={size} />,
    },
  ];

  const iconStyles =
    "text-border hover:text-primary focus:text-primary active:text-primary w-10 h-10 inline-flex items-center justify-center";

  return (
    <div className="flex">
      {socialLinks.map((linkObj) => (
        <ExternalLink
          key={linkObj.key}
          href={linkObj.link}
          variant="functional"
          className={iconStyles}>
          {linkObj.icon}
        </ExternalLink>
      ))}

      <CopyButton textToCopy={getEmailLink()} className={iconStyles}>
        <MailIcon width={size + 4} height={size + 4} />
      </CopyButton>
    </div>
  );
}

IconLinks.propTypes = {
  size: PropTypes.number,
};
