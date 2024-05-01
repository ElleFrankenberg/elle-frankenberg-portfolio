import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ year, title, cover, description }) => {
  return (
    <li className="pt-lg px-md">
      <Link
        href={`/`}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-content"
      >
        <header>
          <h4 className="font-normal">{year}</h4>
          <h2 className="leading-[1] uppercase text-small lg:text-lg">
            {title}
          </h2>
        </header>
        <figure className="row-span-2 md:mb-0 md:mt-0  h-full">
          <Image
            width={800}
            height={600}
            className="aspect-video object-cover w-full h-full  "
            src={cover}
            alt="project cover"
          />
        </figure>
        <div className="self-end">
          <h2 className="text-reg font-bold uppercase">subtitle</h2>

          <p className=" text-reg-serif mt-2">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
