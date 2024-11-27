import InformationList from "../components/InformationList";
import ProjectVideo from "../components/ProjectVideo";
import ProjectSwiper from "../components/ProjectSwiper";
import { fetchProject } from "../../../lib/fetchProject";
import ProjectCoverImage from "../components/ProjectCoverImage";
import ErrorInformation from "@/app/components/global/ErrorInformation";

export async function generateMetadata({ params: { slug } }) {
  const project = await fetchProject("projects", slug);

  if (!project) {
    return;
  }

  return {
    title: `Elle Frankenberg - Portfolio - ${project.title} `,
    description: project.description,
  };
}

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
      <main className="error flex justify-center items-center text-darkBlue ">
        <ErrorInformation errorText="Error loading project." />
      </main>
    );
  }
}
