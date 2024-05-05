import FeaturedProjectCard from "../cards/FeaturedProjectCard";

const FeaturedProjectsList = ({ featuredProjects }) => {
  return (
    <section>
      <h2 className="py-lg text-center lg:text-start px-md 2xl:px-0 text-lg font-bold text-darkBlue leading-none ">
        Featured Projects
      </h2>
      <ul className="flex justify-center ">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard
            key={project.id}
            cover={project.cover}
            title={project.title}
            description={project.description}
            year={project.year}
            technologies={project.technologies}
            urls={project.urls}
            backgroundColor={project.backgroundColor}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjectsList;
