"use client";
import { closeMenu, openMenu } from "@/RTK/slices/menuSlice";
import {
  FacebookLogoIcon,
  ListIcon,
  TiktokLogoIcon,
  XCircleIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../shared/overlay/Overlay";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "products", href: "/products" },
  { id: 3, title: "about", href: "/about" },
  { id: 4, title: "blog", href: "/blog" },
  { id: 5, title: "contact us", href: "/contact" },
];
const socialMediaIcons = [
  { id: 1, icon: FacebookLogoIcon, href: "#" },
  { id: 2, icon: YoutubeLogoIcon, href: "#" },
  { id: 3, icon: XLogoIcon, href: "#" },
  { id: 4, icon: TiktokLogoIcon, href: "#" },
];
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
      <button
        aria-label="Open Menu"
        className="flex items-center justify-center"
        onClick={() => dispatch(openMenu())}
      >
        <ListIcon size={30} />
      </button>
      <div
        className={`bg-white pt-10 px-5 pb-5 shadow-md z-50 w-3/4 max-w-xs h-full fixed top-0 ${isMenuOpen ? "left-0" : "-left-full"} transition-all duration-700 ease-in-out`}
      >
        <button
          aria-label="Close Menu"
          onClick={() => dispatch(closeMenu())}
          className="absolute right-5 top-3"
        >
          <XCircleIcon size={25} />
        </button>

        <div className="flex flex-col justify-between h-full">
          <div className="pt-10">
            <ul className="flex flex-col">
              {links.map((link) => {
                return (
                  <li className="py-3.5" key={link.id}>
                    <Link
                      className={`uppercase text-sm font-semibold ${pathname === link.href ? "text-secondary" : "text-primary"}`}
                      href={link.href}
                      onClick={() => dispatch(closeMenu())}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-2.5 text-xs text-muted">
            <div>
              <p>Call Us: +(123)-456-789</p>
            </div>
            <div>
              <p>Email: abdokhaled766@gmail.com</p>
            </div>

            <div>
              <ul className="flex items-center gap-3">
                {socialMediaIcons.map((icon) => {
                  return (
                    <li
                      key={icon.id}
                      className="w-8 h-8 flex items-center justify-center bg-[#f3f3f3] text-primary"
                    >
                      <a
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <icon.icon size={16} weight="fill" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
