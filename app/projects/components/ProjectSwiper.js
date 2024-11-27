"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const ProjectSwiper = ({ images }) => {
  return (
    <section className="swiper-desktop h-[30vh] md:h-[60vh]  pt-sm md:pt-md md:pb-md relative mr-[15px] ml-[16px] overflow-hidden">
      <Swiper
        loop={true}
        speed={0}
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
            <Image
              src={imageUrl}
              width="1200"
              height="1200"
              className="w-[75%] h-full object-contain"
              alt={`Project image ${images.length}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectSwiper;
