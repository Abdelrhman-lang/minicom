import Image from "next/image";
import PopularImage from "@/public/imgs/popular-image.webp";
import CountdownTimer from "../../features/countdown-timer/CountdownTimer";
import MainButton from "../../shared/main-btn/MainButton";

function BoxForImage() {
  return (
    <div className="bg-image pt-8 xl:pt-14 pb-5 px-5 xl:h-112.5">
      <div className="flex flex-col justify-between h-full">
        <div className="mb-9">
          <span className="text-[10px] md:text-xs text-secondary uppercase ">
            flash deals
          </span>
          <p className="text-white text-sm uppercase font-bold max-w-62.5 leading-loose">
            DON'T MISS 70% OFF ALL SALE! NO CODE NEEDED!
          </p>
        </div>
        <div className="flex flex-col gap-y-5 xl:flex-row justify-between ">
          <CountdownTimer />
          <MainButton
            title="learn more"
            className="bg-white w-31.5 xl:w-35 h-10.25"
            spanClassName="inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default BoxForImage;
