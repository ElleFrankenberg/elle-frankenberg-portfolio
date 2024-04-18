"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "reactjs-popup";
import { FaFileDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Contact from "./Contact";
import WorkExperience from "../../lists/WorkExperience";

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
              <section className="grid grid-cols-2 gap-sm mt-sm md:hidden">
                <Contact
                  email={cv.email}
                  phone={cv.phone}
                  address={cv.address}
                  country={cv.country}
                  links={cv.links}
                />
              </section>
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
          <section className="pt-sm border-b-2 border-b-darkBlue">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineWork}
            </h2>
            <WorkExperience jobs={cv.jobs} />
          </section>
          <section className="pt-sm">
            <h2 className="pb-sm font-bold leading-none text-medium text-darkGray">
              {cv.headlineEducation}
            </h2>
            <WorkExperience jobs={cv.jobs} />
          </section>

          {/* <h2 className="text-darkBlue text-medium font-bold leading-normal pb-[--gap-mini]">
            {cv.headlineWork}
          </h2>
         
        </section>
        <section className="py-[--gap-small]">
          <h2 className="text-darkBlue text-medium font-bold leading-normal pb-[--gap-mini]">
            {cv.headlineEducation}
          </h2>
          <ul>
            {cv.educations.map((education, i) => (
              <li
                key={i}
                className="pt-[--gap-mini] pb-[--gap-mini] border-t-2 border-t-darkBlue grid md:grid-cols-[20ch_1fr_1fr]"
              >
                <div>
                  <h3 className="text-black text-small font-bold">
                    {education.educationTitle}
                  </h3>
                </div>
                <div className="md:contents">
                  <h4 className="text-darkGray ">
                    <span className="font-bold block ">
                      {education.schoolTitle}
                    </span>
                    <span>
                      {education.from} - {education.to}
                    </span>
                  </h4>
                  <p className="font-serif text-reg-serif mt-[--gap-small] md:mt-0">
                    {education.description}
                  </p>
                </div>
              </li>
            ))}
          </ul> */}
        </section>
      </Popup>
    </>
  );
};

export default CvModal;
