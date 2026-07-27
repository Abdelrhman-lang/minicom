import { Button } from "@/components/ui/button";
import React from "react";
import MainButton from "../../shared/main-btn/MainButton";

function HeroBottomSec() {
  return (
    <div className="absolute bottom-5 w-full">
      <div className="container">
        <div className="flex items-center justify-between pt-9 border-t">
          <div className="space-y-2.5 max-w-[550px]">
            <h6 className="font-semibold text-[10px] tracking-[1px] uppercase text-white">
              TIMELESS ARTISTRY IN EVERY PIECE
            </h6>
            <h2 className="uppercase text-lg md:text-2xl lg:text-3xl font-semibold leading-normal text-white">
              HANDCRAFTED WOODEN COLLECTION
            </h2>
          </div>
          <div>
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBottomSec;
