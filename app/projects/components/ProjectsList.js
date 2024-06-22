import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <>
      <ul className="costum-grid p-0 grid grid-cols-project-list relative">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
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
