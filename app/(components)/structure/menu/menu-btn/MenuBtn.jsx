import { openMenu } from "@/RTK/slices/menuSlice";
import { RiMenu2Fill } from "react-icons/ri";
function MenuBtn({ dispatch }) {
  return (
    <button
      aria-label="Open Menu"
      className="flex items-center justify-center"
      onClick={() => dispatch(openMenu())}
    >
      <RiMenu2Fill size={25} />
    </button>
  );
}

export default MenuBtn;
