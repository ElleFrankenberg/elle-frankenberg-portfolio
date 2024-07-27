// import ProjectVideo from "../components/ProjectVideo";
// import InformationList from "../components/InformationList";
// import { Suspense } from "react";
// import { promises as fs } from "fs";

// export default async function ProjectPage({ params: { slug } }) {
//   const file = await fs.readFile(
//     process.cwd() + "/app/lib/projects.json",
//     "utf8"
//   );
//   const { projects } = JSON.parse(file);

//   const project = projects.find((project) => project.slug === slug);

//   // https://github.com/ElleFrankenberg/elle-frankenberg-portfolio/blob/main/app/lib/projects.json

//   return (
//     <main className="project">
//       {project.video && (
//         <Suspense fallback={<p>Loading video...</p>}>
//           <ProjectVideo video={project.video} />
//         </Suspense>
//       )}
//       <InformationList projectInfo={project} />
//     </main>
//   );
// }

import ProjectVideo from "../components/ProjectVideo";
import InformationList from "../components/InformationList";
import { Suspense } from "react";

export default async function ProjectPage({ params: { slug } }) {
  const URL = process.env.PROJECTS_URL;

  try {
    // Fetch the JSON file from GitHub
    const response = await fetch(URL);

    // Check if the response is okay (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    const { projects } = data;

    // Find the project with the specified slug
    const project = projects.find((project) => project.slug === slug);

    if (!project) {
      throw new Error(`Project with slug "${slug}" not found`);
    }

    return (
      <main className="project">
        {project.video && <ProjectVideo video={project.video} />}
        <InformationList projectInfo={project} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching project data:", error);
    return (
      <main>
        <p>Error loading project data.</p>
      </main>
    );
  }
}
