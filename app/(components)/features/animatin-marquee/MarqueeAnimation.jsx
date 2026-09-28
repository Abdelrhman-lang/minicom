import React from "react";

function MarqueeAnimation({ children, fromColor }) {
  return (
    <div className="w-full overflow-hidden flex  py-4 relative group">
      <div
        className={`absolute left-0 top-0 w-20 bottom-0 bg-linear-to-r ${fromColor} to-transparent z-10 pointer-events-none`}
      ></div>
      <div
        className={`absolute right-0 top-0 w-20 bottom-0 bg-linear-to-l ${fromColor} to-transparent z-10 pointer-events-none`}
      ></div>

      <div className="flex items-center  shrink-0 w-max animate-marquee">
        {children}
      </div>
    </div>
  );
}

export default MarqueeAnimation;
