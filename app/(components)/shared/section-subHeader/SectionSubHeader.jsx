import React from "react";

function SectionSubHeader({ text }) {
  return (
    <div>
      <p className="text-[10px] uppercase text-[#b7b7b7] tracking-[1.5]">
        {text}
      </p>
    </div>
  );
}

export default SectionSubHeader;
