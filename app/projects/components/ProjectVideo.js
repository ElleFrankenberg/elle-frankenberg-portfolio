"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Spinner from "../../components/ui/Spinner";
import Button from "@/app/components/ui/Button";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

const ProjectVideo = ({ video }) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReady = () => {
    setLoading(false);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {loading && (
        <section className="p-lg flex items-center justify-center">
          <Spinner />
        </section>
      )}

      <section
        className="flex flex-col items-center justify-center mr-[15px] ml-[16px] "
        style={{ display: loading ? "none" : "flex" }}
      >
        <figure className="lg:relative w-full py-sm lg:p-sm aspect-video flex flex-col items-center justify-center lg:w-[90%]">
          <ReactPlayer
            width="100%"
            height="auto"
            muted={true}
            playsinline={true}
            playing={isPlaying}
            loop={true}
            url={video}
            onReady={handleReady}
          />
        </figure>
        <div className="my-4">
          <Button
            isLink={false}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            isActive={isPlaying ? true : false}
          >
            {isPlaying ? (
              <FaRegPauseCircle
                className="w-[30px] h-[30px] "
                aria-hidden="true"
              />
            ) : (
              <FaPlayCircle className="w-[30px] h-[30px] " aria-hidden="true" />
            )}

            <span className="ml-2">
              {isPlaying ? "Pause video" : "Play video"}
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProjectVideo;
