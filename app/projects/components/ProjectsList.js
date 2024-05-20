import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <>
      <ul className="costum-grid p-0 grid grid-cols-project-list relative">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            cover={project.cover}
            title={project.title}
            slug={project.slug}
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
