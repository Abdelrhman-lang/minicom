"use client";
import { ShoppingCartIcon } from "@phosphor-icons/react";

function CartIcon() {
  return (
    <div className="relative">
      <ShoppingCartIcon size={25} />
      <span className="absolute -top-4 left-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white text-xs">
        0
      </span>
    </div>
  );
}

export default CartIcon;
