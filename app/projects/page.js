import ProjectsList from "./components/ProjectsList";

import { promises as fs } from "fs";

export default async function ProjectsPage() {
  const file = await fs.readFile(
    process.cwd() + "/app/lib/projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);

  return <main>{<ProjectsList projects={projects.projects} />}</main>;
}
