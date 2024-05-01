import Image from "next/image";
import ProjectCard from "../cards/ProjectCard";

const FeaturedProjectsList = ({ featuredProjects }) => {
  console.log(featuredProjects);
  return (
    <section className="pt-lg pb-lg">
      <h2 className="text-center text-lg font-bold text-darkBlue leading-none ">
        Featured Projects
      </h2>
      <ul className=" flex justify-center">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project.cover}
            title={project.title}
            description={project.description}
            year={project.year}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjectsList;
