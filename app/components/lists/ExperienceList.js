const ExperienceList = ({ experiences }) => {
  return (
    <ul className="">
      {experiences.map((experience, i) => (
        <li key={i} className="pb-md grid grid-col-1 md:grid-cols-2">
          <div>
            <h3 className="text-reg font-bold text-darkBlue">
              {experience.title}
            </h3>
            <h4 className="text-darkGray flex">
              <span className="font-bold mr-[5px] after:content-[','] mr-xs">
                {experience.placeTitle}
              </span>
              <span>
                {experience.from} - {experience.to}
              </span>
            </h4>
          </div>
          <div className="">
            <p className="font-serif text-small-serif mt-[--gap-small] md:mt-0">
              {experience.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
