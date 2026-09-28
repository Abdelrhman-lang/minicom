import SectionSubHeader from "../../shared/section-subHeader/SectionSubHeader";
import MarqueeAnimation from "../../features/animatin-marquee/MarqueeAnimation";
import Image from "next/image";
const boxs = [
  { id: 1, imgSrc: "/imgs/brand/brand-1.webp" },
  { id: 2, imgSrc: "/imgs/brand/brand-2.webp" },
  { id: 3, imgSrc: "/imgs/brand/brand-3.avif" },
  { id: 4, imgSrc: "/imgs/brand/brand-4.webp" },
  { id: 5, imgSrc: "/imgs/brand/brand-5.avif" },
  { id: 6, imgSrc: "/imgs/brand/brand-6.webp" },
  { id: 7, imgSrc: "/imgs/brand/brand-7.avif" },
  { id: 8, imgSrc: "/imgs/brand/brand-8.avif" },
  { id: 9, imgSrc: "/imgs/brand/brand-9.webp" },
  { id: 10, imgSrc: "/imgs/brand/brand-10.webp" },
  { id: 11, imgSrc: "/imgs/brand/brand-11.webp" },
  { id: 12, imgSrc: "/imgs/brand/brand-12.webp" },
];
const PartnersSection = () => {
  const loobBoxs = [...boxs, ...boxs];
  return (
    <section className="py-30 bg-[#f3f3f3]">
      <div className="container">
        <div className="flex items-center justify-center mb-14">
          <SectionSubHeader text={"powerfull partners"} />
        </div>

        <MarqueeAnimation fromColor={"from-[#f3f3f3]"}>
          {loobBoxs.map((box, index) => {
            return (
              <div
                className="bg-white rounded-[5px] py-10 px-5 shrink-0 mr-5 w-[220px] h-[140px] flex items-center justify-center"
                key={`${box.id} - ${index}`}
              >
                <Image
                  src={box.imgSrc}
                  alt="brand-img"
                  width={220}
                  height={65}
                  className="object-cover w-[100px]"
                />
              </div>
            );
          })}
        </MarqueeAnimation>
      </div>
    </section>
  );
};

export default PartnersSection;
