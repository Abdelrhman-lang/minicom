"use client";
import LeavesImg from "@/public/imgs/leaves.svg";
import PenSlash from "@/public/imgs/pen-slash.svg";
import Recycle from "@/public/imgs/recycle.svg";
import Idea from "@/public/imgs/idea.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const boxs = [
  {
    id: 1,
    title: "Eco-friendly Materials",
    description:
      "We craft our furniture using responsibly sourced, environmentally friendly materials.",
    image: LeavesImg,
  },
  {
    id: 2,
    title: "Effortless Assembly",
    description:
      "Thoughtfully designed for quick setup, requiring minimal effort and no extra tools.",
    image: PenSlash,
  },
  {
    id: 3,
    title: "Giving Back To Nature",
    description:
      "Every purchase contributes to reforestation efforts, helping restore green spaces.",
    image: Recycle,
  },
  {
    id: 4,
    title: "Sustainable Production",
    description:
      "Dedicated to reducing waste and promoting eco-conscious manufacturing practices.",
    image: Idea,
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ServicesBox() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {boxs.map((box) => {
        return (
          <motion.div
            variants={boxVariants}
            key={box.id}
            className="flex md:flex-col items-start gap-6 group cursor-pointer"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="w-20 h-20 bg-[#f5f5f5] rounded-full flex items-center justify-center shrink-0"
            >
              <motion.div
                variants={{
                  rest: { x: 0, rotate: 0 },
                  hover: {
                    x: [0, 7, -5, 3, -2, 1, 0],
                    transition: { duration: 1.2, ease: "easeInOut" },
                  },
                }}
              >
                <Image
                  src={box.image}
                  alt="services-img"
                  className="object-cover w-8 h-8"
                />
              </motion.div>
            </motion.div>

            <div className="space-y-2.5">
              <h3 className="text-sm lg:text-lg text-primary font-bold">
                {box.title}
              </h3>
              <p className="text-muted text-[13px] lg:text-sm max-w-85 leading-[1.7]">
                {box.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ServicesBox;
