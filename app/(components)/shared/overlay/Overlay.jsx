import React from "react";

function Overlay({ className, fn }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${className}`}
      onClick={fn}
      aria-hidden="true"
    ></div>
  );
}

export default Overlay;
