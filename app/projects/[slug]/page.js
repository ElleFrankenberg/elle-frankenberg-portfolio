import ProjectVideo from "../components/ProjectVideo";
import InformationList from "../components/InformationList";
import { Suspense } from "react";
import { promises as fs } from "fs";

export default async function ProjectPage({ params: { slug } }) {
  const file = await fs.readFile(
    process.cwd() + "/app/lib/projects.json",
    "utf8"
  );
  const { projects } = JSON.parse(file);

  const project = projects.find((project) => project.slug === slug);

  return (
    <main className="project">
      {project.video && (
        <Suspense fallback={<p>Loading video...</p>}>
          <ProjectVideo video={project.video} />
        </Suspense>
      )}
      <InformationList projectInfo={project} />
    </main>
  );
}
