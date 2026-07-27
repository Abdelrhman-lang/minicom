"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "products", href: "/products" },
  { id: 3, title: "about", href: "/about" },
  { id: 4, title: "blog", href: "/blog" },
  { id: 5, title: "contact us", href: "/contact" },
];
function Navbar() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block">
      <nav>
        <ul className="flex items-center">
          {links.map((link) => {
            return (
              <li key={link.id} className="px-6 cursor-pointer">
                <Link
                  href={link.href}
                  className={`uppercase  text-xs font-semibold hover:text-secondary transition-colors duration-300 ${pathname === link.href ? "text-secondary" : "text-primary"}`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
