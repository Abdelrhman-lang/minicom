import React from "react";
import CartHeader from "../cart-header/CartHeader";
import CartContent from "../cart-content/CartContent";

function Cart({ isCartOpen, dispatch, closeCart, items }) {
  return (
    <div
      className={`fixed z-50 top-0 ${isCartOpen ? "right-0" : "-right-full"} transition-all duration-500 ease-in-out bg-white shadow-md w-full md:max-w-sm h-full`}
    >
      <CartHeader dispatch={dispatch} closeCart={closeCart} items={items} />
      <CartContent items={items} />
    </div>
  );
}

export default Cart;
