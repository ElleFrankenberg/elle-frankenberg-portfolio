const Introduction = ({
  firstName,
  lastName,
  occupationTitle,
  extraWorkTitle,
  description,
  cv,
  socialLinks,
}) => {
  return (
    <header className="">
      <section>
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
