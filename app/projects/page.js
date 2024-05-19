import { fetchData } from "@/lib/fetchData";
import ProjectsList from "./components/ProjectsList";

export default async function ProjectsPage() {
  const projects = await fetchData("projects");

  //   if (!allProjects) {
  //     return <NoDataFound />;
  //   }

  return (
    <main>
      <ProjectsList projects={projects} />
    </main>
  );
}
