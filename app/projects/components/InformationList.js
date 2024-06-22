const InformationList = ({ projectInfo }) => {
  return (
    <dl className="grid grid-cols-[auto,1fr] border-t border-t-darkBlue ">
      <dt className="p-sm border-b border-b-darkBlue">Project:</dt>
      <dd className="font-bold text-reg uppercase text-darkBlue p-sm border-b border-b-darkBlue">
        <h1>{projectInfo.title}</h1>
      </dd>

      <dt className="p-sm border-b border-b-darkBlue">Year:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <p>{projectInfo.year}</p>
      </dd>

      <dt className="p-sm border-b border-b-darkBlue">Description:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <p className="max-w-[65ch]">{projectInfo.description}</p>
      </dd>

      <dt className="p-sm border-b border-b-darkBlue">Technologies:</dt>
      <dd className="p-sm border-b border-b-darkBlue">
        <ul className="flex">
          {projectInfo.technologies.map((technologie) => (
            <li key={technologie} className="mr-sm">
              {technologie}
            </li>
          ))}
        </ul>
      </dd>

      <dt className="p-sm ">Links:</dt>
      <dd className="p-sm">
        <ul className="flex">
          <li className="mr-sm">
            <a href={projectInfo.urls[0]}>Live Demo</a>
          </li>
          <li>
            <a href={projectInfo.urls[0]}>View the code</a>
          </li>
        </ul>
      </dd>
    </dl>
  );
};
export default InformationList;

// "id": "01",
//       "title": "Queer speed dating",
//
//       "cover": "https://res.cloudinary.com/mittbildmoln/image/upload/v1714589831/portfolio/queerspeeddating_u1ruro.png",
//       "year": "2023",
//       "description": "this is the projects description text",
//       "urls": [
//         "https://queer-speed-dating.vercel.app/",
//         "https://github.com/ElleFrankenberg/queer-speed-dating"
//       ],
//       "technologies": ["Next.js", "React"]
