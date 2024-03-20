import Image from "next/image";

const Introduction = ({
  firstName,
  lastName,
  occupationTitle,
  extraWorkTitle,
  description,
  cv,
  socialLinks,
  profileImage,
}) => {
  return (
    <header className="">
      <section>
        <Image src={profileImage} width={200} height={200} />
        <h1>{firstName}</h1>
        <ul>
          <li>githublink</li>
          <li>linkedinlink</li>
        </ul>
      </section>
      <section>
        <h1>cv</h1>
      </section>
    </header>
  );
};

export default Introduction;
