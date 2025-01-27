"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Image } from "@heroui/react";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <Image
            alt="HeroUI hero Image with delay"
            src="/images/banner-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="HeroUI hero Image with delay"
            src="/images/banner-2.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
