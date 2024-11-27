import ProjectsList from "./components/ProjectsList";
import ErrorInformation from "../components/global/ErrorInformation";
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
      <main className="error flex justify-center items-center text-darkBlue ">
        <ErrorInformation errorText="Error loading projects." />
      </main>
    );
  }
}
