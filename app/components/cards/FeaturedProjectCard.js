import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const FeaturedProjectCard = ({
  year,
  title,
  cover,
  description,
  technologies,
  urls,
  backgroundColor,
}) => {
  return (
    <li
      style={{ backgroundColor: backgroundColor }}
      className="p-md grid grid-cols-1 md:grid-cols-2 gap-4 min-h-content"
    >
      <figure className="row-span-2 md:mb-0 md:mt-0  h-full">
        <Image
          width={800}
          height={600}
          className="aspect-video object-cover w-full h-full  "
          src={cover}
          alt="project cover"
        />
      </figure>
      <div className="text-darkGray">
        <time dateTime={year}>{year}</time>
        <h3 className="font-bold leading-[1] text-medium mt-2">{title}</h3>
      </div>
      <div className="self-end ">
        <p className="text-reg-serif mt-2">{description}</p>
        <ul className="flex flex-wrap gap-xs pt-sm">
          {technologies.map((technologie) => (
            <li
              key={technologie}
              className="border border-darkGray  text-darkGray px-xs"
            >
              {technologie}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-sm pt-sm">
          <li>
            <Link
              target="_blank"
              href={urls[0]}
              className="group flex pl-2 pr-3 py-2 rounded-full items-center bg-darkGray  text-lightGray lg:hover:bg-darkBlue lg:hover:text-white transition-colors"
            >
              <FaGithub className="w-[32px] h-[32px] text-lightGray lg:group-hover:text-white mr-xs" />
              View the code
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={urls[0]}
              className="group flex pl-2 pr-3 py-2 rounded-full items-center bg-darkGray  text-lightGray lg:hover:bg-darkPink lg:hover:text-white transition-colors"
            >
              <FaArrowAltCircleRight className=" -rotate-45 w-[32px] h-[32px] text-lightGray lg:group-hover:text-white mr-xs" />
              Live demo
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default FeaturedProjectCard;
