import Introduction from "./components/introduction/Introduction";
import { fetchData } from "@/lib/fetchData";
import FeaturedProjectsList from "./components/lists/FeaturedProjectsList";

export default async function Home() {
  const content = await fetchData();

  console.log(content);

  return (
    <>
      <Introduction
        name={content.name}
        occupationTitle={content.occupationTitle}
        extraWorkTitle={content.extraWorkTitle}
        description={content.description}
        cv={content.cv}
        socialLinks={content.socialLinks}
        profileImage={content.profileImage}
        tech={content.tech}
      />
      <main>
        <FeaturedProjectsList featuredProjects={content.featuredProjects} />
      </main>
    </>
  );
}
