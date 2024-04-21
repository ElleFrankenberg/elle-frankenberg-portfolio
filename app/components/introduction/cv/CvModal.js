"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "reactjs-popup";
import { FaFileDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Contact from "./Contact";
import ExperienceList from "../../lists/ExperienceList";
import EducationExperienceList from "../../lists/EducationExperienceList";
import BulletList from "../../lists/BulletList";

const CvModal = ({ cv }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button
        onClick={() => setModalIsOpen((modalIsOpen) => !modalIsOpen)}
        className="bg-darkBlue w-[33px] h-[32px] rounded-full text-white uppercase font-bold "
      >
        CV
      </button>
      <Popup open={modalIsOpen} closeOnDocumentClick onClose={closeModal}>
        <section className="h-[92vh] overflow-auto mb-md">
          <header className="border-b-2 border-b-darkBlue pb-sm flex items-center">
            <Link href="#" className="flex items-center">
              <FaFileDownload className="w-[30px] h-[30px] text-darkBlue mr-1" />
              Download CV
            </Link>
            <IoCloseCircle
              onClick={closeModal}
              className="w-[32px] h-[32px] text-darkBlue ml-auto cursor-pointer"
            />
          </header>
          <section className="pt-sm grid grid-cols-1 md:grid-flow-row-dense md:grid-cols-3 border-b-2 border-b-darkBlue pb-sm">
            <div className="md:border-r-2 md:border-r-darkBlue md:pr-sm md:col-span-2">
              <h2 className="md:mt-0 font-bold leading-none">
                <span className="block text-medium text-darkGray">
                  {cv.name}
                </span>
                <span className="block text-reg text-darkBlue mt-xs ">
                  {cv.occupationTitle} | {cv.extraWorkTitle}
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-sm mt-sm md:hidden">
                <Contact
                  email={cv.email}
                  phone={cv.phone}
                  address={cv.address}
                  country={cv.country}
                  links={cv.links}
                />
              </div>
              <p className="pt-sm font-serif text-small-serif max-w-[65ch]">
                {cv.description}
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
          <section className="pt-sm pb-sm border-b-2 border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              Tech & Tools
            </h2>
            <BulletList skills={cv.techAndTools} />
          </section>
          <section className="pt-sm pb-sm border-b-2 border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              Skills
            </h2>
            <BulletList skills={cv.skills} />
          </section>
          <section className="pt-sm border-b-2 border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineWork}
            </h2>
            <ExperienceList experiences={cv.jobs} />
          </section>
          <section className="pt-sm pb-sm">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineEducation}
            </h2>
            <ExperienceList experiences={cv.educations} />
          </section>
        </section>
      </Popup>
    </>
  );
};

export default CvModal;
