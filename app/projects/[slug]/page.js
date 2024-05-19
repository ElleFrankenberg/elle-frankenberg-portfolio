import { fetchProject } from "@/lib/fetchProject";

export const dynamic = "force-dynamic";

export default async function ProjectPage({ params: { slug } }) {
  const project = await fetchProject("projects", slug);

  return (
    <>
      <h1>{project.title}</h1>
    </>
  );
}
