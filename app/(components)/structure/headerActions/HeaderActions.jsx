"use client";
import { motion } from "framer-motion";
import CartButton from "../../shared/cart-btn/CartButton";
import Search from "../../features/search/Search";
import { FaRegStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
const actions = [{ id: 3, icon: FaRegStar, label: "Faviouate" }];
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

        <li>
          <Show when={"signed-out"}>
            <SignInButton>
              <FiUser size={28} className="cursor-pointer" />
            </SignInButton>
          </Show>
          <Show when={"signed-in"}>
            <UserButton />
          </Show>
        </li>
      </ul>

      <CartButton />
    </div>
  );
}

export default HeaderActions;
