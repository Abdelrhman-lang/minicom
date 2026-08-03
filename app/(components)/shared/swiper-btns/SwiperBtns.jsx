import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const btnStyle =
  "cursor-pointer transition-colors duration-300 hover:text-secondary";
function SwiperBtns({ swiper }) {
  return (
    <div className="flex items-center gap-3 ">
      <button
        className={btnStyle}
        aria-label="Previous slides"
        onClick={() => swiper?.slidePrev()}
      >
        <CgArrowLongLeft size={35} />
      </button>
      <button
        className={btnStyle}
        aria-label="Next slides"
        onClick={() => swiper?.slideNext()}
      >
        <CgArrowLongRight size={35} />
      </button>
    </div>
  );
}

export default SwiperBtns;
