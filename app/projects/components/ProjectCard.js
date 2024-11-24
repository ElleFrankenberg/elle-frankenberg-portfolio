import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ id, cover, title, slug, year }) => {
  return (
    <li className="grid-projects-card">
      <Link
        className="flex flex-col min-h-full group"
        href={`/projects/${slug}`}
        aria-labelledby={`project-title-${id}`}
      >
        <p className="pb-sm font-bold text-xsm md:text-reg uppercase text-darkGray group-hover:text-darkBlue transition-colors">
          {year}
        </p>

        <figure className="sm:aspect-square flex items-center">
          <Image
            width={600}
            height={800}
            src={cover}
            alt={`Cover image for project: ${title}`}
            className="object-contain h-auto w-full"
          />
        </figure>
        <div className="pt-sm grow flex flex-col justify-end">
          <h2
            id={`project-title-${id}`}
            className="font-bold text-xsm md:text-reg uppercase text-darkGray group-hover:text-darkBlue transition-colors"
          >
            {title}
          </h2>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
