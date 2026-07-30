import { CiSearch } from "react-icons/ci";

function SearchContent({ isSearchOpen, inputRef }) {
  return (
    <div
      className={`flex items-center justify-center top-14 lg:fixed lg:-top-2 lg:left-0 lg:shadow-md lg:py-14 z-50  absolute ${isSearchOpen ? "opacity-100 translate-y-2 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"} transition-all duration-300 ease-in-out left-0 bg-white  border-t border-b px-4 h-15 w-full `}
    >
      <div className="container">
        <div className="relative flex items-center justify-center">
          <input
            name="input"
            ref={inputRef}
            className="placeholder:text-sm lg:placeholder:text-xs border-none focus:outline-0 lg:border lg:border-[#eaeaea] lg:shadow-lg lg:bg-white lg:w-full lg:h-12.5 lg:px-4 lg:rounded-full "
            placeholder="Make Your Search..."
          ></input>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary hidden lg:flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white">
            <CiSearch size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
