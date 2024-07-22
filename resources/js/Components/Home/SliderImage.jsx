import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import TextImage from "./TextImage";

const SliderImage = ({ posts }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={2000}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {posts.map((post, index) => (
        <SwiperSlide key={index}>
          <TextImage post={post} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderImage;
