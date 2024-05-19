import OtherProjectCard from "../cards/OtherProjectCard";

const OtherProjectsList = ({ otherProjects }) => {
  return (
    <section>
      {/* <h2 className="py-lg text-center lg:text-start px-md 2xl:px-0 text-lg font-bold text-darkBlue leading-none ">
        Other Projects
      </h2> */}
      <ul className="px-md 2xl:px-0 pb-md gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherProjects.map((project) => (
          <OtherProjectCard
            key={project.id}
            cover={project.cover}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
          />
        ))}
      </ul>
    </section>
  );
};

export default OtherProjectsList;
