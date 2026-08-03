import React from "react";

export default function MainButton({ className = "", title = "" }) {
  return (
    <button
      className={`text-[10px] relative z-1 uppercase font-bold outline-0 border-0 overflow-hidden group ${className}`}
    >
      <span className="absolute w-[150%] h-[200%] rounded-[50%] bg-secondary -z-1 scale-y-0 transition-transform duration-500 ease-in-out origin-top group-hover:scale-y-100 group-hover:origin-bottom"></span>
      {title}
    </button>
  );
}
