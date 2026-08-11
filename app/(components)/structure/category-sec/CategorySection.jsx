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
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/getCategories";
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
  const [activeCategory, setActiveCatigory] = useState("livingRoomFurniture");
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <p className="p-4">جاري التحميل...</p>;
  if (isError || !data.success)
    return <p className="p-4 text-red-500">حدث خطأ في الجلب</p>;
  return (
    <div className="py-15 lg:py-25 border-t">
      <div className="flex flex-col md:flex-row gap-y-6 items-center justify-between">
        <SectionHeader title="shop by category" />
        <SwiperBtns swiper={swiperInstance} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 pt-14">
        <div className="md:w-1/3 lg:w-1/4 shrink-0 hidden md:block">
          <CategoryFilter
            categoryList={data.categories}
            activeCategory={activeCategory}
            setActiveCatigory={setActiveCatigory}
          />
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
