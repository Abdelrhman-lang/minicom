"use client";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  StarIcon,
  UserIcon,
} from "@phosphor-icons/react";
import CartButton from "../../shared/cart-btn/CartButton";

const actions = [
  { id: 1, icon: MagnifyingGlassIcon },
  { id: 2, icon: UserIcon },
  { id: 3, icon: StarIcon },
];
function HeaderActions() {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-9 me-9">
        {actions.map((action) => {
          return (
            <li className="" key={action.id}>
              <action.icon size={26} className="text-primary cursor-pointer" />
            </li>
          );
        })}
      </ul>

      <CartButton />
    </div>
  );
}

export default HeaderActions;
