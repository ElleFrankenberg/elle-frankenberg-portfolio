import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLinkList = ({ socialLinks }) => {
  return (
    <>
      <li>
        <Link
          target="_blank"
          href={socialLinks[0]}
          aria-label="Link to Github. This link opens in a new tab."
        >
          <FaGithub className="w-[32px] h-[32px] text-darkGray hover:text-darkBlue transition-colors" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={socialLinks[1]}
          aria-label="Link to Linkedin. This link opens in a new tab."
        >
          <FaLinkedin className="w-[33px] h-[32px] text-darkGray hover:text-darkBlue transition-colors" />
        </Link>
      </li>
    </>
  );
};

export default SocialLinkList;
