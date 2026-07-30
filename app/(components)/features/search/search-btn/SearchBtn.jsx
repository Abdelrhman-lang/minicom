import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
function SearchBtn({ isSearchOpen, setIsSearchOpen }) {
  return (
    <div>
      <motion.button
        whileHover={{
          scale: [1, 1.2, 1],
        }}
        className="flex items-center justify-center cursor-pointer"
        aria-label={isSearchOpen ? "Close Search" : "Open Search"}
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        {isSearchOpen ? <IoMdClose size={30} /> : <CiSearch size={30} />}
      </motion.button>
    </div>
  );
}

export default SearchBtn;
