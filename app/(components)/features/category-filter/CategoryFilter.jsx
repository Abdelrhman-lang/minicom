function CategoryFilter({ categoryList, activeCategory, setActiveCatigory }) {
  return (
    <ul className="flex flex-col gap-5">
      {categoryList.map((item) => {
        return (
          <li key={item.id} className="w-full">
            <button
              onClick={() => setActiveCatigory(item.slug)}
              className={`${activeCategory === item.slug ? "bg-secondary" : "bg-[#f3f3f3]"} group overflow-hidden z-1 relative w-full text-start px-5 py-2 rounded-full h-13 text-sm capitalize font-bold cursor-pointer`}
            >
              <span className="absolute inset-0 w-full h-full bg-secondary rounded-full top-0 -z-1 scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100 group-hover:origin-bottom"></span>
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryFilter;
