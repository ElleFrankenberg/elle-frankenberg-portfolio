"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "reactjs-popup";
import { FaFileDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Contact from "./Contact";

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
          <section className="pt-sm grid grid-cols-1 md:grid-flow-row-dense md:grid-cols-3">
            <div className="md:border-r-2 md:border-r-darkBlue md:pr-sm md:col-span-2">
              <h2 className="md:mt-0 font-bold leading-none">
                <span className="block text-medium text-darkGray">
                  {cv.name}
                </span>
                <span className="block text-reg text-darkBlue mt-xs ">
                  {cv.occupationTitle} | {cv.extraWorkTitle}
                </span>
              </h2>
              <div className="block mt-sm md:hidden">
                <Contact
                  email={cv.email}
                  phone={cv.phone}
                  address={cv.address}
                  country={cv.country}
                />
              </div>
              <p className="pt-sm font-serif text-reg-serif max-w-[65ch]">
                {cv.description}
              </p>
            </div>
            <div className="hidden md:block pl-sm">
              <Contact
                email={cv.email}
                phone={cv.phone}
                address={cv.address}
                country={cv.country}
              />
            </div>
          </section>

          {/* <h2 className="text-darkBlue text-medium font-bold leading-normal pb-[--gap-mini]">
            {cv.headlineWork}
          </h2>
          <ul>
            {cv.jobs.map((job, i) => (
              <li
                key={i}
                className="pt-[--gap-mini] pb-[--gap-mini] border-t-2 border-t-darkBlue grid md:grid-cols-[20ch_1fr_1fr]"
              >
                <div>
                  <h3 className="text-black text-small font-bold">
                    {job.occupationTitle}
                  </h3>
                </div>
                <div className="md:contents">
                  <h4 className="text-darkGray ">
                    <span className="font-bold mr-[5px] after:content-[','] md:after:content-[''] md:block md:mr-0">
                      {job.workplaceTitle}
                    </span>
                    <span>
                      {job.from} - {job.to}
                    </span>
                  </h4>
                  <p className="font-serif text-reg-serif mt-[--gap-small] md:mt-0">
                    {job.jobDescription}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
