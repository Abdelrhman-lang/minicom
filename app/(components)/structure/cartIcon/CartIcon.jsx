"use client";
import { closeCart, openCart } from "@/RTK/slices/cartSlice";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../../shared/overlay/Overlay";
import CartHeader from "../../shared/cart-header/CartHeader";
import CartContent from "../../shared/cart-content/CartContent";
import Cart from "../../shared/cart/Cart";

function CartIcon() {
  const dispatch = useDispatch();
  const { isCartOpen, items } = useSelector((state) => state.cart);
  return (
    <div className="relative lg:hidden">
      <button
        aria-label="Cart Button"
        className="flex items-center justify-center"
        onClick={() => dispatch(openCart())}
      >
        <ShoppingCartIcon size={25} />
      </button>
      <span className="absolute -top-4 left-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white text-xs">
        {items.length}
      </span>
      <Overlay
        className={`${isCartOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
        fn={() => dispatch(closeCart())}
      />
      <Cart
        closeCart={closeCart}
        dispatch={dispatch}
        items={items}
        isCartOpen={isCartOpen}
      />
    </div>
  );
}

export default CartIcon;
