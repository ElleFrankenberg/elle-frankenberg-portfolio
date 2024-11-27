import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import Button from "@/app/components/ui/Button";

const InformationList = ({ projectInfo }) => {
  return (
    <dl className="grid grid-cols-1  md:grid-cols-[auto,1fr] ml-sm mr-sm">
      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Project:
      </dt>
      <dd className="font-bold text-reg uppercase text-darkBlue pb-sm md:p-sm border-b border-b-darkBlue">
        <h1 className="md:mt-1 ">{projectInfo.title}</h1>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        {projectInfo.urls.length > 1 ? "Links:" : "Link:"}
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <ul className="flex flex-wrap gap-4">
          {projectInfo.urls[0] && (
            <li>
              <Button
                isLink={true}
                href={projectInfo.urls[0]}
                label="View the project live."
              >
                <BsGlobe className="w-[30px] h-[30px] " aria-hidden="true" />
                <span className="ml-2">View it live</span>
              </Button>
            </li>
          )}
          {projectInfo.urls[1] && (
            <li>
              <Button
                isLink={true}
                href={projectInfo.urls[1]}
                label="View the project code on Github."
              >
                <FaGithub className="w-[30px] h-[30px] " aria-hidden="true" />
                <span>View the code</span>
              </Button>
            </li>
          )}
        </ul>
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
        <ul className="flex flex-wrap gap-4">
          {projectInfo.technologies.map((technologie) => (
            <li key={technologie} className="">
              {technologie}
            </li>
          ))}
        </ul>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Year:
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <p>{projectInfo.year}</p>
      </dd>

      <dt className="pt-sm pb-xs md:pb-sm md:border-b md:border-b-darkBlue">
        Design by:
      </dt>
      <dd className="pb-sm md:p-sm border-b border-b-darkBlue">
        <a
          className="lg:hover:text-darkBlue"
          aria-label={` Link to ${projectInfo.designBy[0]}. The link opens in a new tab`}
          href={projectInfo.designBy[1]}
        >
          {projectInfo.designBy[0]}
        </a>
      </dd>
    </dl>
  );
};
export default InformationList;
