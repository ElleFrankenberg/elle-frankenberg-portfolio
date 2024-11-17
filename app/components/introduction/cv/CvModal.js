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
        aria-controls="popup-1"
        aria-expanded={modalIsOpen ? "true" : "false"}
        tabIndex="0"
        onClick={() => setModalIsOpen((modalIsOpen) => !modalIsOpen)}
        className="bg-darkGray hover:bg-darkBlue transition-colors w-[33px] h-[32px] rounded-full text-white uppercase font-bold "
      >
        CV
      </button>
      <Popup open={modalIsOpen} closeOnDocumentClick onClose={closeModal}>
        <section
          aria-label="Elle Frankenberg's cv"
          aria-hidden={modalIsOpen ? "false" : "true"}
          className="h-[92vh] overflow-auto"
        >
          <header className="border-b border-b-darkBlue pb-sm flex gap-4 flex-col md:flex-row md:items-center">
            {/* <h2>Download CV</h2> */}
            <a
              href="/Elle_Frankenberg_CV_eng.pdf"
              download="Elle_Frankenberg_CV_eng.pdf"
              className="flex items-center hover:text-darkBlue  order-3"
              aria-label="Download CV in English"
            >
              <FaFileDownload className="w-[30px] h-[30px] text-darkBlue mr-1" />
              Download CV in English
            </a>
            <a
              href="/Elle_Frankenberg_CV_sve.pdf"
              download="Elle_Frankenberg_CV_sve.pdf"
              className="flex items-center hover:text-darkBlue  order-2"
              aria-label="Download CV in Swedish"
            >
              <FaFileDownload className="w-[30px] h-[30px] text-darkBlue mr-1" />
              Download CV in Swedish
            </a>
            <button
              className="ml-auto cursor-pointer order-1 md:order-3"
              aria-label="close modal"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  closeModal();
                }
              }}
              onClick={closeModal}
            >
              <IoCloseCircle className="w-[32px] h-[32px] text-darkBlue " />
            </button>
          </header>
          <section className="pt-sm grid grid-cols-1 md:grid-flow-row-dense md:grid-cols-3 border-b border-b-darkBlue pb-sm">
            <div className="md:border-r md:border-r-darkBlue md:pr-sm md:col-span-2">
              <h1 className="md:mt-0 font-bold leading-none">
                <span className="block text-medium text-darkGray">
                  {cv.name}
                </span>
                <span className="block text-reg text-darkBlue mt-xs ">
                  {cv.occupationTitle} | {cv.extraWorkTitle}
                </span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-sm md:hidden">
                <Contact
                  email={cv.email}
                  phone={cv.phone}
                  address={cv.address}
                  country={cv.country}
                  links={cv.links}
                />
              </div>
              <div>
                <h2 className="sr-only">Introduction</h2>
                <p className="pt-sm max-w-[65ch]">
                  I’m a self-motivated and creative frontend developer with a
                  background in arts and motion graphic design. This background
                  has given me a strong eye for detail and the ability to think
                  outside the box, transforming me into a creative problem
                  solver who loves to learn by exploring new things and taking
                  on new tasks and technologies.
                </p>
                <p className="pt-sm max-w-[65ch]">
                  Additionally, my years in tech have made me value structure
                  and I'm always aiming to write high-quality code. Something I
                  love doing together with colleagues who are just like me -
                  positive, easygoing and curious, with a “can-do” attitude,
                  strong communication skills and above all, share the same joy
                  of writing really good code.
                </p>
              </div>
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
