// "use client";
// import ReactPlayer from "react-player";
// import { useState, useEffect } from "react";
// import Spinner from "./Spinner";

// const ProjectVideo = ({ video }) => {
//   const [mounted, setMounted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleReady = () => {
//     setLoading(false);
//   };

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <>
//       {loading && (
//         <section className="p-lg flex items-center justify-center ">
//           <Spinner />
//         </section>
//       )}

//       <section
//         className=" flex items-center justify-center mr-[15px] ml-[16px]"
//         style={{ display: loading ? "none" : "block" }}
//       >
//         <figure className=" w-full p-sm aspect-video flex items-center justify-center">
//           <ReactPlayer
//             width="90%"
//             height="auto"
//             muted={true}
//             playing={true}
//             loop={true}
//             url={video}
//             playsinline={true}
//             onReady={handleReady}
//           />
//         </figure>
//       </section>
//     </>
//   );
// };

// export default ProjectVideo;

"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
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
        style={{ display: loading ? "none" : "block" }}
      >
        <figure className="lg:relative w-full p-sm aspect-video flex flex-col items-center justify-center">
          <ReactPlayer
            width="90%"
            height="auto"
            muted={true}
            playsinline={true}
            playing={isPlaying}
            loop={true}
            url={video}
            onReady={handleReady}
          />
          <div className="mt-4 lg:mt-0 lg:absolute bottom-0 right-4 lg:transform lg:translate-y-[-50%] lg:z-10">
            <Button
              isLink={false}
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <FaRegPauseCircle
                  className="w-[37px] h-[37px] "
                  aria-hidden="true"
                />
              ) : (
                <FaPlayCircle
                  className="w-[37px] h-[37px] "
                  aria-hidden="true"
                />
              )}

              <span className="ml-2">
                {isPlaying ? "Pause Video" : "Play Video"}
              </span>
            </Button>
          </div>
        </figure>
      </section>
    </>
  );
};

export default ProjectVideo;
