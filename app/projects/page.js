import ProjectsList from "./components/ProjectsList";
import { fetchData } from "../../lib/fetchData";

export const metadata = {
  title: "Elle Frankenberg - Portfolio - Projects",
  description:
    "This is the portfolio of Elle Frankenberg, she is a frontend developer focusing on React and Next.js ",
};

export default async function ProjectsPage() {
  try {
    const projects = await fetchData("projects");

    if (!projects) {
      throw new Error(`Not found`);
    }

    const sortedProjects = projects.sort((a, b) => {
      return parseInt(b.year) - parseInt(a.year);
    });

    return (
      <main>
        <h1 className="sr-only">Projects</h1>
        <ProjectsList projects={sortedProjects} />
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
