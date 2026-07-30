"use client";
import { motion } from "framer-motion";
import CartButton from "../../shared/cart-btn/CartButton";
import Search from "../../features/search/Search";
import { FaRegStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
const actions = [
  { id: 2, icon: FiUser, label: "Login / Sign Up" },
  { id: 3, icon: FaRegStar, label: "Faviouate" },
];
function HeaderActions() {
  return (
    <div className="flex">
      <ul className="lg:flex items-center gap-9 me-9 hidden">
        <li>
          <Search />
        </li>
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
                <action.icon size={24} />
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
