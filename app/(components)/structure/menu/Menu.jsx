"use client";
import { closeMenu, openMenu } from "@/RTK/slices/menuSlice";
import { ListIcon, XCircleIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../shared/overlay/Overlay";
import { useEffect } from "react";

function Menu() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menu);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return (
    <div className="lg:hidden">
      <Overlay
        fn={() => dispatch(closeMenu())}
        className={`${isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
      />
      <button aria-label="Open Menu" onClick={() => dispatch(openMenu())}>
        <ListIcon size={30} />
      </button>
      <div
        className={`bg-white pt-10 px-5 pb-5 shadow-md z-50 w-3/4 max-w-xs h-full fixed top-0 ${isMenuOpen ? "left-0" : "-left-full"} transition-all duration-300`}
      >
        <button
          aria-label="Close Menu"
          onClick={() => dispatch(closeMenu())}
          className="absolute right-5"
        >
          <XCircleIcon size={25} />
        </button>
      </div>
    </div>
  );
}

export default Menu;
