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

    title: "Solid Wood Frame",
    desc: "Crafted from carefully selected solid wood, the frame provides exceptional strength and long-lasting support, ensuring your sofa stands the test of time.",
  },
  {
    id: 2,
    top: "20%",
    left: "55%",
    x: "right-[45px]",
    xArrow: "-right-6",
    arrowDirc:
      "border-l-white border-t-transparent border-b-transparent border-r-transparent",
    title: "Premium Fabric",
    desc: "Our sofa is upholstered in high-quality fabric that’s soft to the touch, breathable, and resistant to wear—bringing comfort and durability to your everyday living.",
  },
  {
    id: 3,
    top: "40%",
    left: "93%",
    x: "right-[45px]",
    xArrow: "-right-6",
    arrowDirc:
      "border-l-white border-t-transparent border-b-transparent border-r-transparent",
    title: "Sturdy Armrests",
    desc: "Designed with well-built armrests that offer both structural stability and everyday comfort—perfect for relaxing, reading, or unwinding in style.",
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
                contentTitle={item.title}
                contentDesc={item.desc}
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
