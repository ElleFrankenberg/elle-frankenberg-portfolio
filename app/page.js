import Introduction from "./components/introduction/Introduction";

export default async function Home() {
  const URL = process.env.MAIN_CONTENT_URL;

  try {
    // Fetch the JSON file from GitHub
    const response = await fetch(URL);

    // Check if the response is okay (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const content = await response.json();

    console.log(content);

    if (!content) {
      throw new Error(`Project with slug "${slug}" not found`);
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
      <main>
        <p>Error loading data.</p>
      </main>
    );
  }
}
