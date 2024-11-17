"use client";

import { useState } from "react";
import Popup from "reactjs-popup";
import { FaFileDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Contact from "./Contact";
import ExperienceList from "./ExperienceList";
import BulletList from "./BulletList";

const CvModal = ({ cv }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button
        aria-haspopup="dialog"
        aria-controls="cv-modal"
        aria-expanded={modalIsOpen ? "true" : "false"}
        tabIndex="0"
        onClick={() => setModalIsOpen((modalIsOpen) => !modalIsOpen)}
        className="bg-darkGray hover:bg-darkBlue transition-colors w-[33px] h-[32px] rounded-full text-white uppercase font-bold "
      >
        CV
      </button>
      <Popup
        id="cv-modal"
        role="dialog"
        aria-label="Elle Frankenberg's cv"
        aria-hidden={modalIsOpen ? "false" : "true"}
        open={modalIsOpen}
        closeOnDocumentClick
        onClose={closeModal}
      >
        <section className="h-[92vh] overflow-auto">
          <header className="border-b border-b-darkBlue pb-sm flex items-center">
            <h2> Download CV</h2>
            <a
              href="/Elle_Frankenberg_CV_eng.pdf"
              download="Elle_Frankenberg_CV_eng.pdf"
              className="flex items-center hover:text-darkBlue ml-3"
            >
              <FaFileDownload className="w-[30px] h-[30px] text-darkBlue mr-1" />
              Eng
            </a>
            <a
              href="/Elle_Frankenberg_CV_sve.pdf"
              download="Elle_Frankenberg_CV_sve.pdf"
              className="flex items-center hover:text-darkBlue ml-3"
            >
              <FaFileDownload className="w-[30px] h-[30px] text-darkBlue mr-1" />
              Swe
            </a>
            <IoCloseCircle
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  closeModal();
                }
              }}
              onClick={closeModal}
              className="w-[32px] h-[32px] text-darkBlue ml-auto cursor-pointer"
            />
          </header>
          <section className="pt-sm grid grid-cols-1 md:grid-flow-row-dense md:grid-cols-3 border-b border-b-darkBlue pb-sm">
            <div className="md:border-r md:border-r-darkBlue md:pr-sm md:col-span-2">
              <h2 className="md:mt-0 font-bold leading-none">
                <span className="block text-medium text-darkGray">
                  {cv.name}
                </span>
                <span className="block text-reg text-darkBlue mt-xs ">
                  {cv.occupationTitle} | {cv.extraWorkTitle}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-sm md:hidden">
                <Contact
                  email={cv.email}
                  phone={cv.phone}
                  address={cv.address}
                  country={cv.country}
                  links={cv.links}
                />
              </div>
              <p className="pt-sm max-w-[65ch]">
                I’m a self-motivated and creative frontend developer with a
                background in arts and motion graphic design. This background
                has given me a strong eye for detail and the ability to think
                outside the box, transforming me into a creative problem solver
                who loves to learn by exploring new things and taking on new
                tasks and technologies.
              </p>
              <p className="pt-sm max-w-[65ch]">
                Additionally, my years in tech have made me value structure and
                I'm always aiming to write high-quality code. Something I love
                doing together with colleagues who are just like me - positive,
                easygoing and curious, with a “can-do” attitude, strong
                communication skills and above all, share the same joy of
                writing really good code.
              </p>
            </div>
            <div className="hidden md:block pl-sm">
              <Contact
                email={cv.email}
                phone={cv.phone}
                address={cv.address}
                country={cv.country}
                links={cv.links}
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 border-b border-b-darkBlue md:pt-sm md:pb-sm">
            <div className="py-sm md:py-0 border-b border-b-darkBlue md:border-b-0  md:border-r md:border-r-darkBlue md:pr-sm ">
              <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
                Tech & Tools
              </h2>
              <BulletList skills={cv.techAndTools} />
            </div>
            <div className="py-sm md:py-0 md:pl-sm ">
              <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
                Skills
              </h2>
              <BulletList skills={cv.skills} />
            </div>
          </section>
          <section className="pt-sm border-b border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineWork}
            </h2>
            <ExperienceList experiences={cv.jobs} />
          </section>
          <section className="pt-sm pb-sm border-b border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineEducation}
            </h2>
            <ExperienceList experiences={cv.educations} />
          </section>
          <section className="pt-sm pb-sm border-b border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineCourses}
            </h2>
            <ExperienceList experiences={cv.courses} />
          </section>
          <section className="pt-sm pb-sm">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineOtherMerits}
            </h2>
            <ExperienceList experiences={cv.otherMerits} />
          </section>
        </section>
      </Popup>
    </>
  );
};

export default CvModal;
