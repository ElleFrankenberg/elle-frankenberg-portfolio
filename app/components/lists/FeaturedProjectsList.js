import Image from "next/image";

const FeaturedProjectsList = ({ featuredProjects }) => {
  console.log(featuredProjects);
  return (
    <section className="px-md pt-lg">
      <h2 className="text-center text-lg font-bold text-darkBlue leading-none ">
        Featured Projects
      </h2>
      <ul className="">
        {featuredProjects.map((project) => (
          <li key={project.id} className="pt-md flex">
            <Image
              className="md:mr-md lg:w-[9.3rem] lg:h-[9.3rem]"
              src={project.cover}
              width={200}
              height={200}
              alt="cover"
            />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjectsList;
