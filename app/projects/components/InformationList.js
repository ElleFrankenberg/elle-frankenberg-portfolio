const InformationList = ({ projectInfo }) => {
  return (
    <dl className="grid grid-cols-1  md:grid-cols-[auto,1fr] ml-sm mr-sm">
      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Project:
      </dt>
      <dd className="font-bold text-reg uppercase text-darkBlue pb-sm md:p-sm border-b border-b-darkBlue">
        <h1>{projectInfo.title}</h1>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        {projectInfo.urls.length > 1 ? "Links:" : "Link:"}
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <ul className="flex ">
          {projectInfo.urls[0] && (
            <li className="mr-sm" key={projectInfo.urls[0]}>
              <a
                target="_blank"
                className="inline-block p-1 hover:text-darkBlue "
                href={projectInfo.urls[0]}
              >
                View it live
              </a>
            </li>
          )}
          {projectInfo.urls[1] && (
            <li key={projectInfo.urls[1]}>
              <a
                target="_blank"
                className="inline-block p-1 hover:text-darkBlue"
                href={projectInfo.urls[1]}
              >
                View the code
              </a>
            </li>
          )}
        </ul>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Year:
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <p>{projectInfo.year}</p>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Description:
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <p className="max-w-[65ch]">{projectInfo.description}</p>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Technologies:
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <ul className="flex flex-wrap">
          {projectInfo.technologies.map((technologie) => (
            <li key={technologie} className="mr-sm">
              {technologie}
            </li>
          ))}
        </ul>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Design by:
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <a className="hover:text-darkBlue" href={projectInfo.designBy[1]}>
          {projectInfo.designBy[0]}
        </a>
      </dd>
    </dl>
  );
};
export default InformationList;
