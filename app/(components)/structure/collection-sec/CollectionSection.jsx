"use client";
import { motion } from "framer-motion";
import SectionSubHeader from "../../shared/section-subHeader/SectionSubHeader";
import Hotel from "@/public/imgs/hotel.svg";
import ArmChair from "@/public/imgs/armchair.svg";
import PottedPlanet from "@/public/imgs/potted-plant.svg";
import Lamp from "@/public/imgs/lamp.svg";
import CoffeTable from "@/public/imgs/coffee-table.svg";
import Shelf from "@/public/imgs/shelf.svg";
import Image from "next/image";
const boxs = [
  { id: 1, imgSrc: Hotel, title: "bedromms furniture" },
  { id: 2, imgSrc: ArmChair, title: "sofas & seating" },
  { id: 3, imgSrc: PottedPlanet, title: "Flower Pots & Planters" },
  { id: 4, imgSrc: Lamp, title: "Lighting & Lamps" },
  { id: 5, imgSrc: CoffeTable, title: "Tables & Desks" },
  { id: 6, imgSrc: Shelf, title: "Storage & Organization" },
];
function CollectionSection() {
  return (
    <section className="py-20">
      <SectionSubHeader text={"find the perfect piece for every space"} />

      <div className="mt-10 relative">
        <span className="absolute"></span>
        <div className="w-full overflow-hidden flex py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-5 shrink-0"
          >
            {[...boxs, ...boxs].map((box, index) => {
              return (
                <div
                  key={`${box.id}-${index}`}
                  className="bg-[#f3f3f3] py-2 px-4 rounded-full shrink-0"
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
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;
