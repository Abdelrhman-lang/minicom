"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ImageBox from "../../shared/image-box/ImageBox";

function SwiperComponent({ setSwiperInstance, slides }) {
  return (
    <Swiper
      className="swiper"
      onSwiper={setSwiperInstance}
      slidesPerView={3}
      slidesPerGroup={3}
      spaceBetween={25}
      slidesPerGroupAuto={false}
      speed={800}
      breakpoints={{
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 25,
        },
      }}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <ImageBox
              imgSrc={slide.imageSrc}
              imageAlt={slide.alt}
              text={slide.text}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperComponent;
