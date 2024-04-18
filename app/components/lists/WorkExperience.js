const WorkExperience = ({ jobs }) => {
  return (
    <ul className="">
      {jobs.map((job, i) => (
        <li key={i} className="pb-md grid grid-col-1 md:grid-cols-2">
          <div>
            <h3 className="text-reg font-bold text-darkBlue">
              {job.occupationTitle}
            </h3>
            <h4 className="text-darkGray flex">
              <span className="font-bold mr-[5px] after:content-[','] mr-xs">
                {job.workplaceTitle}
              </span>
              <span>
                {job.from} - {job.to}
              </span>
            </h4>
          </div>
          <div className="">
            <p className="font-serif text-small-serif mt-[--gap-small] md:mt-0">
              {job.jobDescription}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WorkExperience;
