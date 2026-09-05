"use client";
import { useState } from "react";
import SectionHeader from "../../shared/section-header/SectionHeader";
import SwiperBtns from "../../shared/swiper-btns/SwiperBtns";
import BoxForImage from "../../shared/box-for-image/BoxForImage";

const PopularPrductsSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <section className="pb-20">
      <div className="flex flex-col gap-y-5 items-center md:flex-row justify-between">
        <SectionHeader title="most popular products" />
        <SwiperBtns swiper={swiperInstance} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
        <div className="md:col-span-5">
          <BoxForImage />
        </div>
        <div className="md:col-span-7">slides</div>
      </div>
    </section>
  );
};

export default PopularPrductsSection;
