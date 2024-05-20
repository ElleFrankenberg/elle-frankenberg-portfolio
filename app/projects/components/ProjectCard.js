import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  cover,
  title,
  slug,
  description,
  technologies,
  url,
}) => {
  return (
    <li key={slug} className="costum-grid-card p-sm">
      <Link className="flex flex-col" href={`/projects/${slug}`}>
        <figure className="aspect-square relative">
          <Image
            width={600}
            height={800}
            src={cover}
            alt="Practice cover"
            className="object-cover absolute h-full w-full object-left-bottom"
          />
        </figure>
        <div className="mt-2  mt-2 ease-in-out duration-150 lg:group-hover:text-white">
          <div className=" uppercase text-xsm">
            <h3 className="font-normal inline-block mr-4">Format</h3>
            <h3 className="font-normal mb-2 inline-block">DAte</h3>
          </div>
          <h2 className="leading-[1.2] text-reg-serif font-serif">{title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
