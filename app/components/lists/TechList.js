const TechList = ({ tech }) => {
  return (
    <div className="max-w-[65ch]">
      <h2 className="text-center text-lg font-bold text-darkBlue leading-none ">
        Tech
      </h2>
      <ul className="tech-list pt-md px-md flex flex-wrap gap-xs justify-center items-center">
        {tech.map((item) => (
          <li key={item} className=" text-small">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TechList;
