import Introduction from "./components/introduction/Introduction";
import { fetchData } from "@/lib/fetchData";

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
        <h1>Main content</h1>
      </main>
    </>
  );
}
