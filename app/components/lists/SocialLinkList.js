import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLinkList = ({ socialLinks }) => {
  return (
    <>
      <li>
        <Link href={socialLinks[0]}>
          <FaGithub className="w-[32px] h-[32px] text-darkGray hover:text-darkBlue transition-colors" />
        </Link>
      </li>
      <li>
        <Link href={socialLinks[1]}>
          <FaLinkedin className="w-[33px] h-[32px] text-darkGray hover:text-darkBlue transition-colors" />
        </Link>
      </li>
    </>
  );
};

export default SocialLinkList;
