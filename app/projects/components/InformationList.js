const InformationList = ({ projectInfo }) => {
  return (
    <dl className="grid grid-cols-[auto,1fr] border-t border-t-darkBlue ml-sm mr-sm">
      <dt className="pt-sm pb-sm border-b border-b-darkBlue">Project:</dt>
      <dd className="font-bold text-reg uppercase text-darkBlue p-sm border-b border-b-darkBlue">
        <h1>{projectInfo.title}</h1>
      </dd>

      <dt className="pt-sm pb-sm border-b border-b-darkBlue">Year:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <p>{projectInfo.year}</p>
      </dd>

      <dt className="pt-sm pb-sm border-b border-b-darkBlue">Description:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <p className="max-w-[65ch]">{projectInfo.description}</p>
      </dd>

      <dt className="pt-sm pb-sm border-b border-b-darkBlue">Technologies:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <ul className="flex">
          {projectInfo.technologies.map((technologie) => (
            <li key={technologie} className="mr-sm">
              {technologie}
            </li>
          ))}
        </ul>
      </dd>

      <dt className="pt-sm pb-sm border-b border-b-darkBlue">Design by:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <a className="hover:text-darkBlue" href={projectInfo.designBy[1]}>
          {projectInfo.designBy[0]}
        </a>
      </dd>

      <dt className="pt-sm pb-sm border-b border-b-darkBlue">Links:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <ul className="flex">
          {projectInfo.urls[0] && (
            <li className="mr-sm">
              <a
                target="_blank"
                className="hover:text-darkBlue"
                href={projectInfo.urls[0]}
              >
                Live Demo
              </a>
            </li>
          )}
          {projectInfo.urls[1] && (
            <li>
              <a
                target="_blank"
                className="hover:text-darkBlue"
                href={projectInfo.urls[0]}
              >
                View the code
              </a>
            </li>
          )}
        </ul>
      </dd>
    </dl>
  );
};
export default InformationList;
