import { closeMenu } from "@/RTK/slices/menuSlice";
import Link from "next/link";

const links = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "products", href: "/products" },
  { id: 3, title: "about", href: "/about" },
  { id: 4, title: "blog", href: "/blog" },
  { id: 5, title: "contact us", href: "/contact" },
];

function MenuLinks({ pathname, dispatch }) {
  return (
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
  );
}

export default MenuLinks;
