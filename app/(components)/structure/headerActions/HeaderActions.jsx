"use client";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon, StarIcon, UserIcon } from "@phosphor-icons/react";
import CartButton from "../../shared/cart-btn/CartButton";

const actions = [
  { id: 1, icon: MagnifyingGlassIcon, label: "Search" },
  { id: 2, icon: UserIcon, label: "Login / Sign Up" },
  { id: 3, icon: StarIcon, label: "Faviouate" },
];
function HeaderActions() {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-9 me-9">
        {actions.map((action) => {
          return (
            <li className="" key={action.id}>
              <motion.button
                whileHover={{
                  scale: [1, 1.2, 1],
                }}
                aria-label={action.label}
                className="cursor-pointer "
              >
                <action.icon size={25} />
              </motion.button>
            </li>
          );
        })}
      </ul>

      <CartButton />
    </div>
  );
}

export default HeaderActions;
