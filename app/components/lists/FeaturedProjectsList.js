import ProjectCard from "../cards/ProjectCard";

const FeaturedProjectsList = ({ featuredProjects }) => {
  console.log(featuredProjects);
  return (
    <section className="max-w-[75rem] my-0 mx-auto px-md">
      <h2 className="pt-lg text-center text-lg font-bold text-darkBlue leading-none ">
        Featured Projects
      </h2>
      <ul className="flex justify-center ">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project.cover}
            title={project.title}
            description={project.description}
            year={project.year}
            technologies={project.technologies}
            urls={project.urls}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjectsList;
