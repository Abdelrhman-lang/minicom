"use client";
import { ShoppingCartIcon } from "@phosphor-icons/react";

function CartButton() {
  return (
    <button className="w-14 h-14 rounded-full flex items-center justify-center bg-primary relative">
      <span className="absolute top-0 right-0 bg-secondary w-5 h-5 rounded-full flex items-center justify-center text-xs">
        0
      </span>
      <ShoppingCartIcon size={25} className="text-white" />
    </button>
  );
}

export default CartButton;
