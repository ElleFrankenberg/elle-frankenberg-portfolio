import Introduction from "./components/introduction/Introduction";
import ErrorInformation from "./components/global/ErrorInformation";
import { fetchData } from "../lib/fetchData";

export default async function Home() {
  try {
    const content = await fetchData("content");

    if (!content) {
      throw new Error(`Not found`);
    }

    return (
      <main>
        <Introduction
          name={content.name}
          occupationTitle={content.occupationTitle}
          extraWorkTitle={content.extraWorkTitle}
          description={content.description}
          cv={content.cv}
          socialLinks={content.socialLinks}
          profileImage={content.profileImage}
          tech={content.tech}
          skills={content.skills}
        />
      </main>
    );
  } catch (error) {
    return (
      <main className="error flex justify-center items-center text-darkBlue ">
        <ErrorInformation errorText="Error loading data." />
      </main>
    );
  }
}
