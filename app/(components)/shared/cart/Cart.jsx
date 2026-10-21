"use client";
import CartHeader from "../cart-header/CartHeader";
import CartContent from "../cart-content/CartContent";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/services/cart";
import { useAuth } from "@clerk/nextjs";

function Cart() {
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
    <div
      className={`fixed z-50 top-0 ${isCartOpen ? "right-0" : "-right-full"} transition-all duration-500 ease-in-out bg-white shadow-md w-full md:max-w-sm h-full`}
    >
      <CartHeader dispatch={dispatch} items={cartItems} />
      <CartContent items={cartItems} />
    </div>
  );
}

export default Cart;
