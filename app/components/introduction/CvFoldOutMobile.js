"use client";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FaArrowCircleDown } from "react-icons/fa";

const CvFoldOut = ({ cv }) => {
  console.log(cv);

  const [cvIsOpen, setCvIsOpen] = useState(false);
  const nodeRef = useRef(null);
  return (
    <>
      <div className="pl-[--gap-small]">
        <button
          ref={nodeRef}
          className="bg-darkBlue text-white text-small font-medium leading-normal pr-5 pl-[8px] rounded-[40px] flex items-center"
          onClick={() => setCvIsOpen(!cvIsOpen)}
        >
          <span className="mr-[8px]">
            <FaArrowCircleDown size="22" />
          </span>
          <span>CV</span>
        </button>
      </div>
      <CSSTransition
        in={cvIsOpen}
        nodeRef={nodeRef}
        timeout={700}
        classNames="cv-list"
        unmountOnExit
      >
        <section ref={nodeRef}>
          <section className="p-[--container-p-mobile]">
            <h2 className="text-darkBlue text-medium font-bold leading-normal pb-[--gap-mini]">
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
          <section className="p-[--container-p-mobile]">
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
                      <span className="font-bold mr-[5px] after:content-[','] md:after:content-[''] md:block md:mr-0">
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
            </ul>
          </section>
        </section>
      </CSSTransition>
    </>
  );
};

export default CvFoldOut;