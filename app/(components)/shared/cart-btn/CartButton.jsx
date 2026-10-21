"use client";
import { closeCart, openCart } from "@/RTK/slices/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../overlay/Overlay";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/services/cart";

function CartButton() {
  const dispatch = useDispatch();
  const { isCartOpen } = useSelector((state) => state.cart);
  const { isSignedIn } = useAuth();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: !!isSignedIn,
  });
  const cartItems = data?.items ?? [];
  return (
    <div>
      <button
        aria-label="Cart Button"
        onClick={() => dispatch(openCart())}
        className="lg:w-14 lg:h-14 cursor-pointer lg:rounded-full flex items-center justify-center lg:bg-primary text-primary lg:text-white relative transition-colors duration-200 hover:bg-secondary hover:text-primary"
      >
        <span className="absolute -top-4 lg:top-0 right-0 bg-secondary text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs ">
          {cartItems.length}
        </span>
        <FiShoppingCart size={25} />
      </button>
      <Overlay
        className={`${isCartOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
        fn={() => dispatch(closeCart())}
      />
    </div>
  );
}

export default CartButton;
