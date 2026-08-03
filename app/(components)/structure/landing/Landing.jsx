import Image from "next/image";
import LandingImage1 from "@/public/imgs/landing-image-1.webp";
import LandingImage2 from "@/public/imgs/landing-image-2.webp";
import LandingImage3 from "@/public/imgs/landing-image-3.webp";
import LandingImage4 from "@/public/imgs/landing-image-4.webp";
const imgStyle =
  "object-cover w-full h-full cursor-pointer transition-transform duration-1500 ease-in-out hover:scale-110";

const containDivStyle = "overflow-hidden rounded-2xl";

const flexImgs = [
  { id: 1, src: LandingImage3 },
  { id: 2, src: LandingImage4 },
];
function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4">
      <div className="flex flex-col gap-5">
        <div className={`${containDivStyle} relative`}>
          <Image
            src={LandingImage1}
            alt="landing-img"
            className={imgStyle}
            priority
          />
          <div className="absolute px-5 lg:px-10 top-1/2 -translate-y-1/2">
            <div className="space-y-4">
              <p className="text-[10px] uppercase text-[#b7b7b7] tracking-wider">
                step to buy - simple & hassle - free{" "}
              </p>
              <h3 className="text-primary text-sm md:text-lg lg:text-2xl font-bold uppercase leading-normal max-w-30 md:max-w-50 lg:max-w-60">
                elegant living room lamps
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {flexImgs.map((image) => {
            return (
              <div key={image.id} className={`${containDivStyle} w-full `}>
                <Image
                  src={image.src}
                  alt="landing-image"
                  className={imgStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={containDivStyle}>
        <Image src={LandingImage2} alt="landing-image" className={imgStyle} />
      </div>
    </div>
  );
}

export default Landing;
