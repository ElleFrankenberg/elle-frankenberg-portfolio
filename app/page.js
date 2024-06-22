import Introduction from "./components/introduction/Introduction";

import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/app/lib/mainContent.json",
    "utf8"
  );
  const content = JSON.parse(file);

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
}
