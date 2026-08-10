import Image from "next/image";
import React from "react";
import Hotel from "@/public/imgs/hotel.svg";
import ArmChair from "@/public/imgs/armchair.svg";
import PottedPlanet from "@/public/imgs/potted-plant.svg";
import Lamp from "@/public/imgs/lamp.svg";
import CoffeTable from "@/public/imgs/coffee-table.svg";
import Shelf from "@/public/imgs/shelf.svg";

const boxs = [
  { id: 1, imgSrc: Hotel, title: "bedromms furniture" },
  { id: 2, imgSrc: ArmChair, title: "sofas & seating" },
  { id: 3, imgSrc: PottedPlanet, title: "Flower Pots & Planters" },
  { id: 4, imgSrc: Lamp, title: "Lighting & Lamps" },
  { id: 5, imgSrc: CoffeTable, title: "Tables & Desks" },
  { id: 6, imgSrc: Shelf, title: "Storage & Organization" },
];
function MarqueeAnimation() {
  const loopBoxs = [...boxs, ...boxs];
  return (
    <div className="w-full overflow-hidden flex  py-4 relative group">
      <div className="absolute left-0 top-0 w-20 bottom-0 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 bottom-0 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex items-center shrink-0 w-max animate-marquee">
        {loopBoxs.map((box, index) => (
          <div
            key={`${box.id}-${index}`}
            className="bg-[#f3f3f3] py-2 px-4 mr-5 rounded-full shrink-0 transition-colors duration-300 hover:bg-primary hover:text-white cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <div className="w-12.5 h-12.5 bg-white flex items-center justify-center rounded-full shrink-0">
                <Image
                  src={box.imgSrc}
                  alt={"img"}
                  className="w-8 h-8 object-cover"
                />
              </div>
              <div>
                <p className="text-xs capitalize font-bold whitespace-nowrap">
                  {box.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeAnimation;
