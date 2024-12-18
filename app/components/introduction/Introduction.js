import Image from "next/image";
import SocialLinkList from "../lists/SocialLinkList";

import CvModal from "./cv/CvModal";
import HighlightsList from "../lists/HighlightsList";

const Introduction = ({
  name,
  occupationTitle,
  extraWorkTitle,
  cv,
  tech,
  skills,
  socialLinks,
  profileImage,
}) => {
  return (
    <>
      <section
        className="grid-intro grid lg:grid-cols-2 xxl:grid-cols-1"
        role="region"
        aria-labelledby="intro-header"
      >
        <div className="grid-intro-card p-sm pt-lg justify-center md:flex md:flex-col md:items-center">
          <div className="md:flex items-center justify-center">
            <Image
              className="mx-auto rounded-full md:mr-md lg:w-[9.3rem] lg:h-[9.3rem]"
              src={profileImage}
              width={200}
              height={200}
              alt="Profile picture of Elle Frankenberg"
            />
            <h1
              id="intro-header"
              className="text-center mt-sm md:mt-0 font-bold leading-none lg:text-left"
            >
              <span className="block text-medium text-darkBlue md:text-[3.5vw]">
                {name}
              </span>
              <span className="block text-reg text-darkGray  mt-xs ">
                {occupationTitle} | {extraWorkTitle}
              </span>
            </h1>
          </div>
          <section>
            <h2 className="sr-only">Introduction</h2>
            <p className="pt-md  max-w-[65ch]">
              I’m a self-motivated and creative frontend developer with a
              background in arts and motion graphic design. This background has
              given me a strong eye for detail and the ability to think outside
              the box, transforming me into a creative problem solver who loves
              to learn by exploring new things and taking on new tasks and
              technologies.
            </p>
            <p className="pt-md max-w-[65ch]">
              Additionally, my years in tech have made me value structure and
              I'm always aiming to write high-quality code. Something I love
              doing together with colleagues who are just like me - positive,
              easygoing and curious, with a “can-do” attitude, strong
              communication skills and above all, share the same joy of writing
              really good code.
            </p>
          </section>
          <ul className="py-md flex gap-4 justify-center">
            <li>
              <CvModal cv={cv} />
            </li>
            <SocialLinkList socialLinks={socialLinks} />
          </ul>
        </div>
        <div className="grid-intro-card p-sm">
          <section className="min-h-[50dvh] h-full flex flex-col items-center justify-around xxl:flex-row xxl:min-h-[unset] xxl:pt-lg xxl:pb-lg">
            <HighlightsList
              title="Tech & Tools"
              items={tech}
              sectionId="tech-and-tools"
              listClassName="tech-list"
            />
            <HighlightsList
              title="Skills"
              items={skills}
              sectionId="skills"
              listClassName="skill-list-colored"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default Introduction;
