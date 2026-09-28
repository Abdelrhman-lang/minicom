import React from "react";
import SectionHeader from "../../shared/section-header/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import lookBook1 from "@/public/imgs/lookbook1.webp";
import lookBook2 from "@/public/imgs/lookbook2.webp";
import Image from "next/image";
function LookSection() {
  return (
    <section className="pb-30">
      <SectionHeader title="shop the look" />

      <h4 className="text-[#535353] text-sm max-w-150 leading-normal mt-4">
        Explore curated spaces styled to inspire. With Shop The Look, you can
        easily recreate your favorite room setups with matching furniture and
        décor—effortless style, all in one place.
      </h4>

      <div className="mt-14 md:hidden">
        <Swiper className="mySwiper" pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <Image
              src={lookBook1}
              alt="lookBook1"
              className="object-cover rounded-[20px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={lookBook2}
              alt="lookBook2"
              className="object-cover rounded-[20px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-7 mt-14 hidden">
        <div>
          <Image
            src={lookBook1}
            alt="lookBook1"
            className="object-cover rounded-[20px]"
          />
        </div>
        <div>
          <Image
            src={lookBook2}
            alt="lookBook2"
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}

export default LookSection;
