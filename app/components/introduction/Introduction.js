import Image from "next/image";
import SocialLinkList from "../lists/SocialLinkList";
import TechList from "../lists/TechList";
import CvModal from "./cv/CvModal";
import SkillList from "../lists/SkillList";

const Introduction = ({
  name,
  occupationTitle,
  extraWorkTitle,
  description,
  cv,
  tech,
  skills,
  socialLinks,
  profileImage,
}) => {
  return (
    <>
      <section className="costum-grid p-0 grid grid-cols-1 lg:grid-cols-2  relative">
        <div className="costum-grid-card p-sm pt-lg md:flex md:flex-col md:items-center">
          <div className="md:flex items-center justify-center">
            <Image
              className="mx-auto rounded-full md:mr-md lg:w-[9.3rem] lg:h-[9.3rem]"
              src={profileImage}
              width={200}
              height={200}
              alt="profile"
            />
            <h1 className="text-center mt-sm md:mt-0 font-bold leading-none lg:text-left">
              <span className="block text-medium text-darkBlue md:text-[3.5vw]">
                {name}
              </span>
              <span className="block text-reg text-darkGray  mt-xs ">
                {occupationTitle} | {extraWorkTitle}
              </span>
            </h1>
          </div>
          <p className="pt-md  max-w-[65ch]">
            I’m a self-motivated and creative frontend developer with a
            background in arts and motion graphic design. This background has
            given me a strong eye for detail and the ability to think outside
            the box, transforming me into a creative problem solver who loves to
            learn by exploring new things and taking on new tasks and
            technologies.
          </p>
          <p className="pt-md  max-w-[65ch]">
            Additionally, my years in tech have made me value structure and I'm
            always aiming to write high-quality code. Something I love doing
            together with colleagues who are just like me - positive, easygoing
            and curious, with a “can-do” attitude, strong communication skills
            and above all, share the same joy of writing really good code.
          </p>
          <ul className="py-md flex gap-4 justify-center">
            <li>
              <CvModal cv={cv} />
            </li>
            <SocialLinkList socialLinks={socialLinks} />
          </ul>
        </div>
        <div className="costum-grid-card p-sm">
          <section className="min-h-[50dvh] h-full flex flex-col items-center justify-around">
            <TechList tech={tech} />
            <SkillList skills={skills} />
          </section>
        </div>
      </section>
    </>
  );
};

export default Introduction;
