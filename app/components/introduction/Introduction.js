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
  socialLinks,
  profileImage,
}) => {
  return (
    <>
      <section className=" costum-grid p-0 grid grid-cols-1 lg:grid-cols-2  relative">
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
          <p className="pt-md font-serif text-reg-serif max-w-[65ch]">
            {description}
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
            <SkillList tech={tech} />
          </section>
        </div>
      </section>
    </>
  );
};

export default Introduction;
