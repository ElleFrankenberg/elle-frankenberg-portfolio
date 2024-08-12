import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ id, cover, title, slug, year }) => {
  return (
    <li key={id} className="costum-grid-card">
      {/* <li key={id} className="costum-grid-card p-sm max-w-full"> */}
      <Link className="flex flex-col min-h-full" href={`/projects/${slug}`}>
        <figure className="sm:aspect-square flex items-center">
          <Image
            width={600}
            height={800}
            src={cover}
            alt="Project cover"
            className="object-contain  h-[auto] w-full"
          />
        </figure>

        <div className="mt-2 grow flex flex-col justify-end">
          <h3 className="font-bold text-reg uppercase text-darkGary">{year}</h3>
          <h2 className="font-bold text-reg uppercase text-darkBlue">
            {title}
          </h2>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
