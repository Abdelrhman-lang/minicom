"use client";
import SectionSubHeader from "../../shared/section-subHeader/SectionSubHeader";
import SectionHeader from "../../shared/section-header/SectionHeader";
import SwiperBtns from "../../shared/swiper-btns/SwiperBtns";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "@/services/getReviews";
import SwiperComponent from "../../features/swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "../../features/review-card/ReviewCard";
import { Spinner } from "@/components/ui/spinner";

function ReviewSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner className={"size-14"} />
      </div>
    );
  }
  return (
    <section className="bg-[#f5f5f5] py-30">
      <div className="container">
        <div className="space-y-4">
          <SectionSubHeader text={"5.00 from 123 reviews"} />
          <div className="flex items-center justify-between">
            <SectionHeader title="what customars say" />
            <SwiperBtns swiper={swiperInstance} />
          </div>
        </div>
        <div className="mt-14">
          <SwiperComponent
            setSwiperInstance={setSwiperInstance}
            slidesPerViewLarge={2}
            slidesPerViewSmall={1}
            slidesPerGroupSmall={1}
            slidesPerGroupLarge={2}
          >
            {/* <button onClick={() => console.log(data.reviews)}>click</button> */}
            {data.reviews?.map((review) => {
              return (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              );
            })}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
