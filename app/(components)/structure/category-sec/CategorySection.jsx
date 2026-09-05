"use client";
import SectionHeader from "../../shared/section-header/SectionHeader";
import CategoryFilter from "../../features/category-filter/CategoryFilter";
import { useState } from "react";
import SwiperBtns from "../../shared/swiper-btns/SwiperBtns";
import SwiperComponent from "../../features/swiper/SwiperComponent";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/getCategories";
import { Spinner } from "@/components/ui/spinner";
import ImageBox from "../../shared/image-box/ImageBox";
import { SwiperSlide } from "swiper/react";
function CategorySection() {
  const [activeCategory, setActiveCatigory] = useState("livingRoomFurniture");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isLoading)
    return (
      <div className={"flex items-center justify-center"}>
        <Spinner />
      </div>
    );
  if (isError || !data.success)
    return <p className="p-4 text-red-500">حدث خطأ في الجلب</p>;

  const selectedCategoryObj = data.categories?.find(
    (cat) => cat.slug === activeCategory,
  );

  const currentSubCategories = selectedCategoryObj.subCategories || [];
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
          {/* <button onClick={() => console.log(data.categories)}>click</button> */}
          <SwiperComponent setSwiperInstance={setSwiperInstance}>
            {currentSubCategories.map((item) => (
              <SwiperSlide key={item.id}>
                <ImageBox
                  imgSrc={item.image}
                  imageAlt={item.name}
                  text={item.name}
                />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
