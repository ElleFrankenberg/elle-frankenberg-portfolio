// "use client";

// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const ProjectSwiper = ({ images }) => {
//   return (
//     <section className="pt-sm pb-sm md:pt-md md:pb-md relative mr-[15px] ml-[17px] overflow-hidden">
//       <Swiper
//         className=""
//         loop={true}
//         speed={0}
//         centeredSlides={true}
//         modules={[Navigation]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//       >
//         {images.map((imageUrl) => (
//           <SwiperSlide className="">
//             <figure className="max-h-[70vh] w-full flex justify-center items-center">
//               <Image
//                 src={imageUrl}
//                 width="1200"
//                 height="1200"
//                 className="w-full md:w-[70%] h-full object-contain"
//               />
//             </figure>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ProjectSwiper;

"use client";

import { useState, useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectSwiper = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className=" pt-sm pb-sm md:pt-md md:pb-md relative mr-[15px] ml-[16px] overflow-hidden">
      <Swiper
        loop={true}
        speed={0}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        // autoplay={
        //   isMobile ? { delay: 2500, disableOnInteraction: false } : false
        // }
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide className="" key={index}>
            <figure className="md:h-[70vh] w-full flex justify-center items-center">
              <Image
                src={imageUrl}
                width="1200"
                height="1200"
                className="w-full md:w-[70%] h-full object-contain"
                alt={`Project image ${index}`}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectSwiper;
