import InformationList from "../components/InformationList";
import ProjectVideo from "../components/ProjectVideo";
import { fetchProject } from "../../../lib/fetchProject";

export default async function ProjectPage({ params: { slug } }) {
  try {
    const project = await fetchProject("projects", slug);

    if (!project) {
      throw new Error(`Not found`);
    }

    return (
      <main className="project">
        <ProjectVideo />
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
