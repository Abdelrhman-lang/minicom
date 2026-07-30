"use client";
import { closeMenu } from "@/RTK/slices/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../shared/overlay/Overlay";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Search from "../../features/search/Search";
import MenuBtn from "./menu-btn/MenuBtn";
import MenuLinks from "./menu-links/MenuLinks";
import SocialmediaLinks from "../../shared/socialmedia-links/SocialmediaLinks";
import CloseBtn from "../../shared/close-btn/CloseBtn";
import { IoIosCloseCircleOutline } from "react-icons/io";
function Menu() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.menu);
  const pathname = usePathname();
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
      <div className="flex items-center gap-3">
        <MenuBtn dispatch={dispatch} />
        <Search />
      </div>

      <div
        className={`bg-white pt-10 px-5 pb-5 shadow-md z-50 w-3/4 max-w-xs h-full fixed top-0 ${isMenuOpen ? "left-0" : "-left-full"} transition-all duration-700 ease-in-out`}
      >
        <div className="absolute right-5 top-3">
          <CloseBtn
            ariaLabel={`Close Menu`}
            fn={() => dispatch(closeMenu())}
            icon={<IoIosCloseCircleOutline size={25} />}
          />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="pt-10">
            <MenuLinks pathname={pathname} dispatch={dispatch} />
          </div>

          <div className="space-y-2.5 text-xs text-muted">
            <p>Call Us: +(123)-456-789</p>
            <p>Email: abdokhaled766@gmail.com</p>
            <SocialmediaLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
