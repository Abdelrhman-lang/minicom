import Image from "next/image";
import React from "react";

function CartContent({ items }) {
  return (
    <div className="border-t">
      <div className="space-y-10 pt-10">
        <div className="flex items-center justify-center">
          <Image
            src={"/imgs/cart-empty.webp"}
            width={200}
            height={250}
            alt="cart-empty"
            className="object-cover"
          />
        </div>
        <div className="text-center">
          {items.length > 0 ? (
            <p>cart has items</p>
          ) : (
            <p className="text-xs text-muted">Your cart is currently empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartContent;
