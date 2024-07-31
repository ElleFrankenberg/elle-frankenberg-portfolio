"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

const ProjectVideo = ({ video }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

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
          playsinline={true}
        />
      </figure>
    </section>
  );
};

export default ProjectVideo;
