import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <>
      <ul className="grid-projects">
        {projects.map((project) => (
          <ProjectCard
            key={project._id.toString()}
            id={project._id.toString()}
            cover={project.cover}
            title={project.title}
            slug={project.slug}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
            url={project.url}
          />
        ))}
      </ul>
    </>
  );
};

export default ProjectsList;
