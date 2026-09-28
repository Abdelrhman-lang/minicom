"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "../../layout/header/Header";
import Landing from "../../structure/landing/Landing";
import Services from "../../structure/services-sec/Services";
import CategorySection from "../../structure/category-sec/CategorySection";
import DiscoverSection from "../../structure/discover-sec/DiscoverSection";
import CollectionSection from "../../structure/collection-sec/CollectionSection";
import PopularPrductsSection from "../../structure/popularProducts-sec/PopularPrductsSection";
import LookSection from "../../structure/look-sec/LookSection";
import ReviewSection from "../../structure/review-sec/ReviewSection";
import PartnersSection from "../../structure/partners-sec/PartnersSection";
import OurStorySection from "../../structure/ourStory-sec/OurStorySection";
function StickyContent() {
  const stickyContentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyContentRef,
    offset: ["start end", "start start"],
  });

  const borderRadious = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["50px", "50px", "0px"],
  );
  return (
    <motion.section
      ref={stickyContentRef}
      style={{
        borderTopLeftRadius: borderRadious,
        borderTopRightRadius: borderRadious,
      }}
      className="relative z-40 bg-white shadow-md min-h-screen"
    >
      <Header />
      <div className="container">
        <Landing />
        <Services />
        <CategorySection />
      </div>
      <DiscoverSection />
      <div className="container">
        <CollectionSection />
        <PopularPrductsSection />
        <LookSection />
      </div>
      <ReviewSection />
      <PartnersSection />
      <OurStorySection />
    </motion.section>
  );
}

export default StickyContent;
