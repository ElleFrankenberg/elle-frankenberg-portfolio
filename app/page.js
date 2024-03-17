import Introduction from "./components/Introduction";
import { fetchData } from "@/lib/fetchData";

export default async function Home() {
  const content = await fetchData();

  console.log(content);

  return (
    <>
      <Introduction
        firstName={content.firstName}
        lastName={content.lastName}
        occupationTitle={content.occupationTitle}
        extraWorkTitle={content.extraWorkTitle}
        description={content.description}
        cv={content.cv}
        socialLinks={content.socialLinks}
      />
      <main>
        <h1>Main content</h1>
      </main>
    </>
  );
}
