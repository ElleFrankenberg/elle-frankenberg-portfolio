"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const ProjectVideo = ({ video }) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReady = () => {
    setLoading(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {loading && (
        <section className="p-lg flex items-center justify-center ">
          <Spinner />
        </section>
      )}

      <section
        className="bg-darkBlue flex items-center justify-center mr-[15px] ml-[16px]"
        style={{ display: loading ? "none" : "block" }}
      >
        <figure className=" w-full p-sm aspect-video flex items-center justify-center">
          <ReactPlayer
            width="90%"
            height="auto"
            muted={true}
            playing={true}
            loop={true}
            url={video}
            playsinline={true}
            onReady={handleReady}
          />
        </figure>
      </section>
    </>
  );
};

export default ProjectVideo;
