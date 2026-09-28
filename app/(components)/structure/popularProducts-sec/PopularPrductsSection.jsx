"use client";
import { useState } from "react";
import SectionHeader from "../../shared/section-header/SectionHeader";
import SwiperBtns from "../../shared/swiper-btns/SwiperBtns";
import BoxForImage from "../../shared/box-for-image/BoxForImage";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/getProducts";
import { Spinner } from "@/components/ui/spinner";
import SwiperComponent from "../../features/swiper/SwiperComponent";
import ProductCard from "../../shared/product-card/ProductCard";
import { SwiperSlide } from "swiper/react";

const PopularPrductsSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner className={"size-10"} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-2xl text-red-500 font-bold">Faild To Get Data</div>
    );
  }
  return (
    <section className="pb-30">
      <div className="flex flex-col gap-y-5 items-center md:flex-row justify-between">
        <SectionHeader title="most popular products" />
        <SwiperBtns swiper={swiperInstance} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10">
        <div className="md:col-span-5">
          <BoxForImage />
        </div>
        <div className="md:col-span-7">
          {/* <button onClick={() => console.log(data.products)}>click</button> */}
          <SwiperComponent
            setSwiperInstance={setSwiperInstance}
            slidesPerViewLarge={3}
            slidesPerViewSmall={2}
            slidesPerGroupSmall={2}
            slidesPerGroupLarge={3}
          >
            {data.products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
};

export default PopularPrductsSection;
