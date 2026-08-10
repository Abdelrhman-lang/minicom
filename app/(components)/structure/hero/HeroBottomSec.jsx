import { Button } from "@/components/ui/button";
import React from "react";
import MainButton from "../../shared/main-btn/MainButton";

function HeroBottomSec() {
  return (
    <div className="absolute bottom-10 w-full">
      <div className="container">
        <div className="flex items-center justify-between pt-9 border-t">
          <div className="space-y-2.5 max-w-137.5">
            <h6 className="font-semibold text-[10px] tracking-[1px] uppercase text-white">
              TIMELESS ARTISTRY IN EVERY PIECE
            </h6>
            <h2 className="uppercase text-lg md:text-2xl lg:text-3xl font-semibold leading-normal text-white">
              HANDCRAFTED WOODEN COLLECTION
            </h2>
          </div>
          <div>
            <MainButton
              className="bg-white px-4 w-[clamp(126px,15vw,140px)] h-10.25 rounded-[3px] flex items-center justify-center cursor-pointer"
              title="shop now"
              spanClassName="w-[150%] h-[200%] rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBottomSec;
