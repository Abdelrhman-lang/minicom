import Image from "next/image";

const imgStyle =
  "object-cover w-full h-auto cursor-pointer transition-transform duration-1500 ease-in-out hover:scale-110";

const containDivStyle = "overflow-hidden rounded-2xl";

function ImageBox({ imgSrc = "", imageAlt = "" }) {
  return (
    <div className={containDivStyle}>
      <Image src={imgSrc} alt={imageAlt} className={imgStyle} />
    </div>
  );
}

export default ImageBox;
