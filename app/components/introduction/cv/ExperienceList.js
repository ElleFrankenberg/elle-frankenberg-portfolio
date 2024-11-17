import Link from "next/link";

const ExperienceList = ({ experiences }) => {
  return (
    <ul className="">
      {experiences.map((experience, i) => (
        <li key={i} className="pb-md grid grid-col-1 md:grid-cols-2">
          <div>
            <h3 className="text-reg font-bold text-darkBlue">
              <span>{experience.title}</span>
              {experience.degree && <span>, {experience.degree}</span>}
            </h3>
            <h4 className="text-darkGray flex flex-wrap">
              <span className="font-bold mr-[5px] after:content-[','] mr-xs">
                {experience.placeTitle}
              </span>
              <span>
                {experience.from} - {experience.to}
              </span>
            </h4>
            {experience.website && (
              <Link
                className="hover:text-darkBlue"
                href={experience.website[0]}
                aria-label={`Link to ${experience.website[1]}`}
              >
                {experience.website[1]}
              </Link>
            )}
          </div>
          <div>
            <p className=" mt-[--gap-small] md:mt-0">
              {experience.description}
            </p>
            {experience.selectedProjects && (
              <>
                <h4 className="text-darkBlue mt-1 font-bold">
                  {experience.selectedProjects.headline}
                </h4>
                <ul>
                  {experience.selectedProjects.projects.map(
                    (project, index) => (
                      <li key={index}>
                        <Link
                          aria-label={`Link to ${project.title}`}
                          href={project.url}
                        >
                          <h5 className="text-darkGray hover:text-darkBlue mt-1 font-bold before:content-['•'] before:text-darkBlue before:mr-2">
                            {project.title}
                          </h5>
                        </Link>
                        <p className="ml-4"> {project.description}</p>
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
