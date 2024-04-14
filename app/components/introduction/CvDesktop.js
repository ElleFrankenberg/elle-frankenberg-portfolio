import SocialLinkList from "../lists/SocialLinkList";

const CvDesktop = ({ cv, socialLinks }) => {
  return (
    <>
      <section className="py-[--gap-small]">
        <h2 className="text-darkBlue text-medium font-bold leading-normal pb-[--gap-mini]">
          {cv.headlineWork}
        </h2>
        <ul>
          {cv.jobs.map((job, i) => (
            <li
              key={i}
              className="pt-[--gap-mini] pb-[--gap-mini] border-t-2 border-t-darkBlue grid md:grid-cols-[20ch_1fr_1fr]"
            >
              <div>
                <h3 className="text-black text-small font-bold">
                  {job.occupationTitle}
                </h3>
              </div>
              <div className="md:contents">
                <h4 className="text-darkGray ">
                  <span className="font-bold mr-[5px] after:content-[','] md:after:content-[''] md:block md:mr-0">
                    {job.workplaceTitle}
                  </span>
                  <span>
                    {job.from} - {job.to}
                  </span>
                </h4>
                <p className="font-serif text-reg-serif mt-[--gap-small] md:mt-0">
                  {job.jobDescription}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="py-[--gap-small]">
        <h2 className="text-darkBlue text-medium font-bold leading-normal pb-[--gap-mini]">
          {cv.headlineEducation}
        </h2>
        <ul>
          {cv.educations.map((education, i) => (
            <li
              key={i}
              className="pt-[--gap-mini] pb-[--gap-mini] border-t-2 border-t-darkBlue grid md:grid-cols-[20ch_1fr_1fr]"
            >
              <div>
                <h3 className="text-black text-small font-bold">
                  {education.educationTitle}
                </h3>
              </div>
              <div className="md:contents">
                <h4 className="text-darkGray ">
                  <span className="font-bold block ">
                    {education.schoolTitle}
                  </span>
                  <span>
                    {education.from} - {education.to}
                  </span>
                </h4>
                <p className="font-serif text-reg-serif mt-[--gap-small] md:mt-0">
                  {education.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CvDesktop;
