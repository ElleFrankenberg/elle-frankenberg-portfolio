import InformationList from "../components/InformationList";
import ProjectVideo from "../components/ProjectVideo";
import ProjectSwiper from "../components/ProjectSwiper";
import { fetchProject } from "../../../lib/fetchProject";
import ProjectCoverImage from "../components/ProjectCoverImage";

export default async function ProjectPage({ params: { slug } }) {
  try {
    const project = await fetchProject("projects", slug);

    if (!project) {
      throw new Error(`Not found`);
    }

    return (
      <main className="project ">
        {project.image && <ProjectCoverImage image={project.image} />}
        {project.images && <ProjectSwiper images={project.images} />}
        {project.video && <ProjectVideo video={project.video} />}

        <InformationList projectInfo={project} />
      </main>
    );
  } catch (error) {
    return (
      <main>
        <p>Error loading project.</p>
      </main>
    );
  }
}
