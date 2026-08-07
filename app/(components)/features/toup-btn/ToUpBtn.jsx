"use client";
import { useEffect, useState } from "react";
import { CgArrowLongUp } from "react-icons/cg";

function ToUpBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll To Top"
        className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg border border-stone-100 text-primary hover:text-secondary transition-colors cursor-pointer group"
      >
        <CgArrowLongUp
          size={22}
          className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
}

export default ToUpBtn;
