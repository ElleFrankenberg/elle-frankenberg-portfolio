import ProjectsList from "./components/ProjectsList";
import { fetchData } from "../../lib/fetchData";

export default async function ProjectsPage() {
  try {
    const projects = await fetchData("projects");

    if (!projects) {
      throw new Error(`Not found`);
    }

    return (
      <main>
        <ProjectsList projects={projects} />
      </main>
    );
  } catch (error) {
    return (
      <main>
        <p>Error loading projects.</p>
      </main>
    );
  }
}
