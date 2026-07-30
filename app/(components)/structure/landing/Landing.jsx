import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const imgStyle =
  "object-cover w-full h-full cursor-pointer transition-transform duration-1500 ease-in-out hover:scale-110";

const containDivStyle = "overflow-hidden rounded-2xl";

const flexImgs = [
  { id: 1, src: "/imgs/landing-image-3.webp" },
  { id: 2, src: "/imgs/landing-image-4.webp" },
];
function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4">
      <div className="flex flex-col gap-5">
        <div className={`${containDivStyle} relative`}>
          <img
            src="/imgs/landing-image-1.webp"
            loading="lazy"
            alt="landing-img"
            className={imgStyle}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          {flexImgs.map((image) => {
            return (
              <div key={image.id} className={containDivStyle}>
                <img
                  src={image.src}
                  alt="landing-image"
                  loading="lazy"
                  className={imgStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={containDivStyle}>
        <img
          loading="lazy"
          src={"/imgs/landing-image-2.webp"}
          alt="landing-image"
          className={imgStyle}
        />
      </div>
    </div>
  );
}

export default Landing;
