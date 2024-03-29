"use client";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FaArrowCircleDown } from "react-icons/fa";

const CvFoldOut = ({ cv }) => {
  console.log(cv.jobs);
  console.log(cv.educations);

  const [cvIsOpen, setCvIsOpen] = useState(false);
  const nodeRef = useRef(null);
  return (
    <section className="">
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
        <div ref={nodeRef}>
          <div className="p-[--container-p-mobile]">
            <h3 className="text-darkBlue">{cv.headlineWork}</h3>
            <ul className="">
              {cv.jobs.map((job, i) => (
                <li key={i}>
                  <div> {job.occupationTitle}</div>
                  {/* <div className={styles.group}>
                    <div> {education.education_title}</div>
                    <div> {education.education_institution}</div>
                    <div> {education.education_location}</div>
                  </div> */}
                </li>
              ))}
            </ul>
            <h3 className="text-darkBlue">{cv.headlineEducation}</h3>
            <ul className="">
              {cv.educations.map((education, i) => (
                <li key={i}>
                  <div> {education.educationTitle}</div>
                  {/* <div className={styles.group}>
                    <div> {education.education_title}</div>
                    <div> {education.education_institution}</div>
                    <div> {education.education_location}</div>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
};

export default CvFoldOut;
