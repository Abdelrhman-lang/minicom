"use client";

import { useState } from "react";

const categoryList = [
  { id: 1, title: "living room furniture", value: "living" },
  { id: 2, title: "dining room furniture", value: "dining" },
  { id: 3, title: "office furniture", value: "office" },
  { id: 4, title: "outdoor furniture", value: "outdoor" },
  { id: 5, title: "sofas & seating", value: "safas" },
  { id: 6, title: "tables & disks", value: "tabels" },
];
function CategoryFilter() {
  const [activeCategory, setActiveCatigory] = useState("living");
  return (
    <ul className="flex flex-col gap-5">
      {categoryList.map((item) => {
        return (
          <li key={item.id} className="w-full">
            <button
              onClick={() => setActiveCatigory(item.value)}
              className={`${activeCategory === item.value ? "bg-secondary" : "bg-[#f3f3f3]"} group overflow-hidden z-1 relative w-full text-start px-5 py-2 rounded-full h-13 text-sm capitalize font-bold cursor-pointer`}
            >
              <span className="absolute inset-0 w-full h-full bg-secondary rounded-full top-0 -z-1 scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100 group-hover:origin-bottom"></span>
              {item.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryFilter;
