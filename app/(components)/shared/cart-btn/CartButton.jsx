"use client";
import { closeCart, openCart } from "@/RTK/slices/cartSlice";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Overlay from "../overlay/Overlay";

function CartButton() {
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector((state) => state.cart);
  return (
    <div>
      <button
        aria-label="Cart Button"
        onClick={() => dispatch(openCart())}
        className="w-14 h-14 cursor-pointer rounded-full flex items-center justify-center bg-primary text-white relative transition-colors duration-200 hover:bg-secondary hover:text-primary"
      >
        <span className="absolute top-0 right-0 bg-secondary text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs ">
          0
        </span>
        <ShoppingCartIcon size={25} />
      </button>
      <Overlay
        className={`${isCartOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
        fn={() => dispatch(closeCart())}
      />
      <Cart
        closeCart={closeCart}
        dispatch={dispatch}
        isCartOpen={isCartOpen}
        items={items}
      />
    </div>
  );
}

export default CartButton;
