const TechList = ({ tech }) => {
  return (
    <section
      aria-labelledby="tech-and-tools"
      className="max-w-[65ch] mt-md lg:mt-0 "
    >
      <h2
        id="tech-and-tools"
        className="text-center mt-sm md:mt-0 font-bold leading-none "
      >
        <span className="block text-medium text-darkBlue md:text-[3.5vw]">
          Tech & Tools
        </span>
      </h2>
      <ul className="tech-list pt-md px-md flex flex-wrap gap-xs justify-center items-center">
        {tech.map((item) => (
          <li key={item} className=" text-small">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TechList;
