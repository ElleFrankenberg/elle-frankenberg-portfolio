import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <>
      <ul className="project-grid p-0 grid grid-cols-project-list border border-b-darkBlue relative">
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
