const BulletList = ({ skills }) => {
  return (
    <ul className="skill-list flex flex-wrap">
      {skills.map((skill, i) => (
        <li key={i}>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
