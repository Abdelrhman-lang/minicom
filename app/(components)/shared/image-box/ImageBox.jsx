import Image from "next/image";

const imgStyle =
  "object-cover w-full h-auto cursor-pointer transition-transform duration-1500 ease-in-out hover:scale-110";

const containDivStyle = "overflow-hidden rounded-2xl";

function ImageBox({ imgSrc = "", imageAlt = "", text = "" }) {
  return (
    <div className={`${containDivStyle} relative`}>
      <Image src={imgSrc} alt={imageAlt} className={imgStyle} />

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
        <p className="text-[10px] uppercase font-semibold">{text}</p>
      </div>
    </div>
  );
}

export default ImageBox;
