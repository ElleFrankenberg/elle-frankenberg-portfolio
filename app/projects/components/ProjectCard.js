import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  id,
  cover,
  title,
  slug,
  year,
  description,
  technologies,
  url,
}) => {
  return (
    <li key={id} className="costum-grid-card p-sm ">
      <Link className="flex flex-col " href={`/projects/${slug}`}>
        <figure className="aspect-square flex items-center">
          <Image
            width={600}
            height={800}
            src={cover}
            alt="Project cover"
            className="object-contain  h-[auto] w-full"
          />
        </figure>

        <div className="mt-2">
          <h3 className="font-bold text-reg uppercase text-darkGary">{year}</h3>
          <h2 className="font-bold text-reg uppercase text-darkBlue">
            {title}
          </h2>
          {/* <div className=" uppercase text-xsm">
          </div>
          <h2 className="leading-[1.2] text-reg-serif font-serif">{title}</h2> */}
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
