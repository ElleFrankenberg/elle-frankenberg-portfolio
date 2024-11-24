"use client";

import Image from "next/image";

const ProjectCoverImage = ({ image }) => {
  return (
    <section
      aria-labelledby="project-image-title"
      className=" pt-sm md:pb-sm md:pt-md md:pb-md relative mr-[15px] ml-[16px] overflow-hidden"
    >
      <h2 id="project-image-title" className="sr-only">
        Project Cover Image
      </h2>
      <figure className="w-full max-h-[70vh] flex justify-center items-center">
        <Image
          src={image}
          width="1200"
          height="1200"
          className="w-full md:w-[70%] h-[auto] object-contain"
          alt="Project cover image"
        />
      </figure>
    </section>
  );
};

export default ProjectCoverImage;
