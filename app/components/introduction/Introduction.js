import Image from "next/image";
import Link from "next/link";
import SocialLinkList from "../lists/SocialLinkList";
import CvFoldOut from "./CvFoldOut";

const Introduction = ({
  name,
  occupationTitle,
  extraWorkTitle,
  description,
  cv,
  socialLinks,
  profileImage,
}) => {
  return (
    <>
      <header className="px-[--gap-small] grid grid-cols-1 lg:grid-cols-2">
        <section className=" pt-[--gap-medium] md:max-w-[40rem] m-auto lg:w-[100%] lg:m-0">
          <section className="flex flex-col md:flex-row  md:items-center">
            <div className="flex justify-center pb-[--gap-small] md:pb-[--gap-medium]">
              <Image
                className="rounded-full md:mr-[--gap-medium] "
                src={profileImage}
                width={200}
                height={200}
                alt="profile"
              />
            </div>
            <div>
              <h1>
                <span className="block text-darkBlue text-small font-bold leading-normal">
                  {name}
                </span>
                <span className="block text-black text-medium font-bold leading-normal">
                  {occupationTitle}
                </span>
                <span className="text-darkGray text-[1.5rem] leading-normal">
                  <span>+</span>
                  <span className="ml-[0.3rem]">{extraWorkTitle}</span>
                </span>
              </h1>
            </div>
          </section>
          <article className="font-serif text-reg-serif pb-[--gap-small] md:pb-[--gap-medium]">
            <p>{description}</p>
          </article>
          <ul className="sm:hidden lg:flex">
            <SocialLinkList socialLinks={socialLinks} />
          </ul>
        </section>
        <section className="md:w-[40rem] md:m-auto">
          <CvFoldOut cv={cv} socialLinks={socialLinks} />
        </section>

        {/* <section className="md:max-w-[45rem] m-auto lg:w-[100%] lg:m-0">
            <section className="flex flex-col pb-[--gap-small] md:flex-row md:items-center">
              <div className="flex justify-center pb-[--gap-small] md:mr-[--gap-medium]">
                <Image
                  className="rounded-full"
                  src={profileImage}
                  width={200}
                  height={200}
                  alt="profile"
                />
              </div>
              <div>
                <h1>
                  <span className="block text-darkBlue text-small font-bold leading-normal">
                    {name}
                  </span>
                  <span className="block text-black text-medium font-bold leading-normal">
                    {occupationTitle}
                  </span>
                  <span className="text-darkGray text-[1.5rem] leading-normal">
                    <span>+</span>
                    <span className="ml-[0.3rem]">{extraWorkTitle}</span>
                  </span>
                </h1>
              </div>
            </section>
            <article className="font-serif text-reg-serif pb-[--gap-small]">
              {description}
            </article>
         
         
        </section> */}
      </header>
    </>
  );
};

export default Introduction;
