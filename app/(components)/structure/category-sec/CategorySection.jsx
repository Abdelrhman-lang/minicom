"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionHeader from "../../shared/section-header/SectionHeader";
import CategoryFilter from "../../features/category-filter/CategoryFilter";
import Chair from "@/public/imgs/chair.webp";
import CofeeTable from "@/public/imgs/cofee-table.webp";
import Lounge from "@/public/imgs/lounge.webp";
import Sofa from "@/public/imgs/sofa.webp";
import Storage from "@/public/imgs/storage.webp";
import TvStand from "@/public/imgs/tv-stand.webp";
import ImageBox from "../../shared/image-box/ImageBox";
import { useState } from "react";
import SwiperBtns from "../../shared/swiper-btns/SwiperBtns";
const slides = [
  { id: 1, imageSrc: Chair, alt: "chair" },
  { id: 2, imageSrc: CofeeTable, alt: "cofee-table" },
  { id: 3, imageSrc: Lounge, alt: "lounge" },
  { id: 4, imageSrc: Sofa, alt: "sofa" },
  { id: 5, imageSrc: Storage, alt: "storage" },
  { id: 6, imageSrc: TvStand, alt: "tv-stand" },
];
function CategorySection() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className="py-15 lg:py-25 border-t">
      <div className="flex flex-col md:flex-row gap-y-6 items-center justify-between">
        <SectionHeader title="shop by category" />
        <SwiperBtns swiper={swiperInstance} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 pt-14">
        <div className="md:w-1/3 lg:w-1/4 shrink-0 hidden md:block">
          <CategoryFilter />
        </div>
        <div className="flex-1 overflow-hidden">
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
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 22,
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
                  <ImageBox imgSrc={slide.imageSrc} imageAlt={slide.alt} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
