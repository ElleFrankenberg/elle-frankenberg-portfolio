import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLinkList = ({ socialLinks }) => {
  return (
    <>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={socialLinks[0]}
          aria-label="Link to Github. This link opens in a new tab."
        >
          <FaGithub
            className="w-[47px] h-[47px] text-darkGray hover:text-darkBlue transition-colors"
            aria-hidden="true"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={socialLinks[1]}
          aria-label="Link to Linkedin. This link opens in a new tab."
        >
          <FaLinkedin
            className="w-[47px] h-[47px] text-darkGray hover:text-darkBlue transition-colors"
            aria-hidden="true"
          />
        </a>
      </li>
    </>
  );
};

export default SocialLinkList;
