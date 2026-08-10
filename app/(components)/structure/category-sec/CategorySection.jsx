"use client";

import SectionHeader from "../../shared/section-header/SectionHeader";
import CategoryFilter from "../../features/category-filter/CategoryFilter";
import Chair from "@/public/imgs/chair.webp";
import CofeeTable from "@/public/imgs/cofee-table.webp";
import Lounge from "@/public/imgs/lounge.webp";
import Sofa from "@/public/imgs/sofa.webp";
import Storage from "@/public/imgs/storage.webp";
import TvStand from "@/public/imgs/tv-stand.webp";
import { useState } from "react";
import SwiperBtns from "../../shared/swiper-btns/SwiperBtns";
import SwiperComponent from "../../features/swiper/SwiperComponent";
const slides = [
  { id: 1, imageSrc: Chair, alt: "chair", text: "armchair" },
  { id: 2, imageSrc: CofeeTable, alt: "cofee-table", text: "cofee tables" },
  { id: 3, imageSrc: Lounge, alt: "lounge", text: "lounge chair" },
  { id: 4, imageSrc: Sofa, alt: "sofa", text: "sofa" },
  { id: 5, imageSrc: Storage, alt: "storage", text: "storage cabinets" },
  {
    id: 6,
    imageSrc: TvStand,
    alt: "tv-stand",
    text: "tv stands & media units",
  },
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
          <SwiperComponent
            setSwiperInstance={setSwiperInstance}
            slides={slides}
          />
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
