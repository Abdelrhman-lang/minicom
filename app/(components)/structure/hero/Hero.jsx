import React from "react";
import HeroTitle from "./HeroTitle";
import HeroBottomSec from "./HeroBottomSec";

function Hero() {
  return (
    <div className="sticky z-10 min-h-screen inset-0">
      <video
        className="w-full h-screen object-cover object-center"
        autoPlay
        loop
        muted
      >
        <source
          src="https://nov-minicom.myshopify.com/cdn/shop/videos/c/vp/2ab84b2421fa4f7e83f70795019d6b4a/2ab84b2421fa4f7e83f70795019d6b4a.HD-1080p-7.2Mbps-51401320.mp4?v=0."
          type="video/mp4"
        ></source>
      </video>
      <HeroTitle />
      <HeroBottomSec />
    </div>
  );
}

export default Hero;
