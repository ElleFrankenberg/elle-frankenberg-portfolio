"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

const ProjectSwiper = ({ images }) => {
  return (
    <section className="bg-darkBlue flex items-center justify-center mr-[15px] ml-[16px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((imageUrl) => (
          <SwiperSlide>
            <Image src={imageUrl} width="300" height="300" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectSwiper;
