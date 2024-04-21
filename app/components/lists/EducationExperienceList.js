const EducationExperienceList = ({ educations }) => {
  console.log(educations);
  return (
    <ul className="">
      {educations.map((education, i) => (
        <li key={i} className="pb-md ">
          <h3 className="text-reg font-bold text-darkBlue">
            {education.educationTitle}
          </h3>
          <h4 className="text-darkGray flex flex-col">
            <span className="font-bold">{education.schoolTitle}</span>
            <span>
              {education.from} - {education.to}
            </span>
          </h4>
          <p className="font-serif text-small-serif mt-[--gap-small] md:mt-0">
            {education.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default EducationExperienceList;
