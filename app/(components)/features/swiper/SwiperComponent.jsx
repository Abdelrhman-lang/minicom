"use client";
import { Swiper } from "swiper/react";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";
function SwiperComponent({ setSwiperInstance, children }) {
  const swiperVarienst = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.1 },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={swiperVarienst}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className="w-full h-full"
      >
        <Swiper
          className="swiper"
          onSwiper={setSwiperInstance}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={25}
          slidesPerGroupAuto={false}
          speed={800}
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 25,
            },
          }}
        >
          {children}
        </Swiper>
      </motion.div>
    </AnimatePresence>
  );
}

export default SwiperComponent;
