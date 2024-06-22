import { fetchProject } from "@/lib/fetchProject";
import Video from "../components/Video";
import InformationList from "../components/InformationList";
import { promises as fs } from "fs";

// export const dynamic = "force-dynamic";

export default async function ProjectPage({ params: { slug } }) {
  // const project = await fetchProject("projects", slug);
  const file = await fs.readFile(
    process.cwd() + "/app/lib/projects.json",
    "utf8"
  );
  const { projects } = JSON.parse(file);

  const project = projects.find((project) => project.slug === slug);

  return (
    <main className="project">
      <Video />
      <InformationList projectInfo={project} />
    </main>
  );
}
