// import Introduction from "./components/introduction/Introduction";

// export default async function Home() {
//   const URL = `https://raw.githubusercontent.com/ElleFrankenberg/elle-frankenberg-portfolio/main/app/lib/mainContent.json?token=${process.env.NEXT_PUBLIC_MAIN_CONTENT_TOKEN}`;

//   try {
//     const response = await fetch(URL);

//     // Check if the response is okay (status code 200)
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     // Parse the JSON data
//     const content = await response.json();

//     console.log(content);

//     if (!content) {
//       throw new Error(`Not found`);
//     }

//     return (
//       <main>
//         <Introduction
//           name={content.name}
//           occupationTitle={content.occupationTitle}
//           extraWorkTitle={content.extraWorkTitle}
//           description={content.description}
//           cv={content.cv}
//           socialLinks={content.socialLinks}
//           profileImage={content.profileImage}
//           tech={content.tech}
//           skills={content.skills}
//         />
//       </main>
//     );
//   } catch (error) {
//     return (
//       <main>
//         <p>Error loading data.</p>
//       </main>
//     );
//   }
// }

import Introduction from "./components/introduction/Introduction";
import { fetchData } from "../lib/fetchData";

export default async function Home() {
  try {
    // Fetch data from MongoDB
    const content = await fetchData("content");

    // Check if content is not empty
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
      <main>
        <p>Error loading data.</p>
      </main>
    );
  }
}
