const SkillList = ({ skills }) => {
  return (
    <div className="max-w-[65ch] mt-lg mb-md lg:mt-0 lg:mb-0">
      <h2 className="text-center mt-sm md:mt-0 font-bold leading-none ">
        <span className="block text-medium text-darkBlue md:text-[3.5vw]">
          Skills
        </span>
      </h2>
      <ul className="tech-list pt-md px-md flex flex-wrap gap-xs justify-center items-center">
        {skills.map((item) => (
          <li key={item} className=" text-small">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillList;
