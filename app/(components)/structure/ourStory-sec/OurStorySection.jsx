import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionSubHeader from "../../shared/section-subHeader/SectionSubHeader";
import SectionHeader from "../../shared/section-header/SectionHeader";
import { IoIosArrowDown } from "react-icons/io";
function OurStorySection() {
  const [isTextShowed, setIsTextShowed] = useState(false);
  return (
    <section className="pb-20 bg-[#f3f3f3]">
      <div className="container">
        <div className="flex flex-col gap-3 items-center justify-center mb-6.25">
          <SectionSubHeader text={"our story"} />
          <SectionHeader title="explore minicom store" />
        </div>

        <div className="relative">
          {!isTextShowed && (
            <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-b from-transparent to-[#f2f2f2]"></div>
          )}

          <motion.div
            initial={false}
            animate={{ height: isTextShowed ? "auto" : 160 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed mb-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quam risus lacus risus posuere quis hendrerit vestibulum ut
              sagittis sit amet tortor. Mauris mauris lectus, ornare vel erat
              non, imperdiet consectetur leo. Nulla non turpis eget ligula
              ullamcorper tincidunt eget ac orci. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sagittis tincidunt mi at sagittis. Cras dui justo, tristique a
              posuere a, dapibus in quam. Quisque a quam euismod, interdum erat
              ut, commodo lectus. Nullam eget luctus est, sit amet viverra
              ligula. Suspendisse potenti. Vestibulum in tortor non elit congue
              placerat sit amet non risus. Maecenas lacinia euismod faucibus.
              Suspendisse feugiat orci sapien, ac commodo sapien consequat sit
              amet. Pellentesque semper eu nunc nec convallis. Maecenas aliquet
              velit quis est rhoncus vehicula. Sed pretium sed nisl at
              porttitor.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Curabitur vulputate suscipit dolor, vel congue nisi varius eget.
              In tempor lacus nec ultrices sollicitudin. Duis posuere, est in
              tempor pretium, arcu tellus euismod lorem, in gravida turpis enim
              a odio. Fusce iaculis blandit ligula in finibus. Vestibulum
              pellentesque, ante sit amet vehicula posuere, eros neque rutrum
              magna, at eleifend urna nunc at libero. Pellentesque molestie
              finibus ligula ac tincidunt. Phasellus massa mauris, sollicitudin
              eget erat id, tincidunt euismod quam. Fusce vel tempor dolor, sed
              vulputate dolor. Nulla facilisi. Aliquam pharetra nisl sapien, id
              congue nulla dictum id. Phasellus ut risus bibendum, dignissim est
              a, cursus elit. Proin at nisl ac nibh ultrices dapibus eget vel
              ex. In accumsan orci justo, sit amet egestas lorem ultrices id.
              Morbi posuere eleifend suscipit. Donec ut odio egestas, sagittis
              mi a, volutpat nulla. Vivamus placerat, dui in auctor faucibus,
              augue erat congue diam, consectetur porttitor tellus erat molestie
              diam.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => setIsTextShowed(!isTextShowed)}
            className="text-xs uppercase font-bold transition-colors duration-200 cursor-pointer hover:text-secondary flex items-center gap-2"
          >
            {isTextShowed ? "see less" : "see more"}
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
