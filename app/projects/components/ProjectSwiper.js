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
import "swiper/css/autoplay";

const ProjectSwiper = ({ images }) => {
  return (
    <>
      <section className="swiper-desktop h-[40vh] md:h-[70vh]  pt-sm pb-sm pt-md pb-md relative mr-[15px] ml-[16px] overflow-hidden">
        <Swiper
          loop={true}
          speed={500}
          centeredSlides={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
        >
          {images.map((imageUrl) => (
            <SwiperSlide
              className="w-full flex justify-center items-center"
              key={imageUrl}
            >
              {/* <figure className=" w-full flex justify-center items-center"> */}
              <Image
                src={imageUrl}
                width="1200"
                height="1200"
                className="w-[75%] h-full object-contain"
                alt={`Project image ${images.length}`}
              />
              {/* </figure> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* <section className="max-h-[70vh] swiper-mobile pt-sm  mr-[15px] ml-[16px] overflow-hidden">
        <Swiper
          className="h-full w-full"
          loop={true}
          speed={500}
          centeredSlides={true}
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {images.map((imageUrl) => (
            <SwiperSlide key={imageUrl}>
              <figure className="h-full w-full flex justify-center items-center">
                <Image
                  src={imageUrl}
                  width="1200"
                  height="1200"
                  className="w-full  h-full object-contain"
                  alt={`Project image ${images.length}`}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
    </>
  );
};

export default ProjectSwiper;
