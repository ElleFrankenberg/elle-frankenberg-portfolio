"use client";
import ReactPlayer from "react-player";

const ProjectVideo = ({ video }) => {
  return (
    <section className="bg-darkBlue flex items-center justify-center mr-[15px] ml-[16px]">
      <figure className="max-h-[70vh] p-sm aspect-video  flex items-center justify-center">
        <ReactPlayer
          width="90%"
          height="auto"
          muted={true}
          onReady={() => true}
          playing={true}
          loop={true}
          url={video}
        />
      </figure>
    </section>
  );
};

export default ProjectVideo;
