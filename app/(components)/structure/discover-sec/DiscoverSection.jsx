"use client";
import DiscoverTitle from "./DiscoverTitle";
import Sofa from "@/public/imgs/sofa2.webp";
import Image from "next/image";
import AnimationPing from "../../features/animation-ping/AnimationPing";

const animation = [
  {
    id: 1,
    top: "60%",
    left: "30%",
    x: "left-[45px]",
    xArrow: "-left-6",
    arrowDirc:
      "border-r-white border-t-transparent border-b-transparent border-l-transparent",
  },
  {
    id: 2,
    top: "20%",
    left: "55%",
    x: "right-[45px]",
    xArrow: "-right-6",
    arrowDirc:
      "border-l-white border-t-transparent border-b-transparent border-r-transparent",
  },
  {
    id: 3,
    top: "40%",
    left: "93%",
    x: "right-[45px]",
    xArrow: "-right-6",
    arrowDirc:
      "border-l-white border-t-transparent border-b-transparent border-r-transparent",
  },
];
function DiscoverSection() {
  return (
    <section className="relative z-1">
      <div className="absolute top-0 left-0 w-full -z-1 bg-[#f5f5f5] h-[80%]"></div>
      <div className="container">
        <div className="pt-20 flex items-center justify-center">
          <DiscoverTitle />
        </div>

        <div className="flex items-center justify-center relative">
          {animation.map((item) => {
            return (
              <AnimationPing
                key={item.id}
                top={item.top}
                left={item.left}
                xPositionForContent={item.x}
                xPositionForArrow={item.xArrow}
                arrowDirction={item.arrowDirc}
              />
            );
          })}
          <Image src={Sofa} alt="discover-sofa" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export default DiscoverSection;
