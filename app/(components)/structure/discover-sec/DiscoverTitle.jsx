import React from "react";
import MainButton from "../../shared/main-btn/MainButton";

function DiscoverTitle() {
  return (
    <div>
      <h3 className="text-[clamp(20px,4vw,24px)] text-primary font-bold max-w-230 leading-[1.7] uppercase text-center">
        DISCOVER OUR SOFA COLLECTION INSPIRED BY SCANDINAVIAN SIMPLICITY AND
        MODERN FORM, THOUGHTFULLY CRAFTED TO BRING BOTH ELEGANCE AND COMFORT TO
        YOUR LIVING SPACE.
      </h3>

      <div className="my-10 flex items-center justify-center">
        <MainButton
          title="view our sofas collection"
          className="bg-white w-[clamp(197px,15vw,220px)] h-13"
          spanClassName="w-full h-full inset-0"
        />
      </div>
    </div>
  );
}

export default DiscoverTitle;
