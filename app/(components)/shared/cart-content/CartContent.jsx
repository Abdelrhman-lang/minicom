"use client";
import {
  decrementQuantity,
  deleteItemFromCart,
  incrementQuantity,
} from "@/services/cart";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { IoTrash } from "react-icons/io5";
function CartContent({ items }) {
  const queryClient = useQueryClient();
  const handleCartChange = async (action, itemId) => {
    try {
      const result = await action(itemId);
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("FAILED_TO_CHANGE_QUANTITY", error);
    }
  };
  return (
    <div className="border-t relative">
      <div className="space-y-10 pt-5">
        <div className="px-5">
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <div key={item.id} className="flex items-start gap-5 mb-5">
                  <div>
                    <Image
                      src={item.product.image}
                      alt="product-image"
                      width={110}
                      height={135}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-5 text-xs">
                    <h4 className="font-bold  text-primary">
                      {item.product.title}
                    </h4>
                    <p className="font-extrabold">${item.product.price}</p>
                    <div className="flex gap-5">
                      <div className="w-25 flex items-center justify-between">
                        <button
                          onClick={() =>
                            handleCartChange(decrementQuantity, item.id)
                          }
                          className="w-6 h-6 flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleCartChange(incrementQuantity, item.id)
                          }
                          className="w-6 h-6 flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            handleCartChange(deleteItemFromCart, item.id)
                          }
                          className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer bg-[#e6e6e6] transition-colors duration-200 hover:bg-secondary"
                        >
                          <IoTrash size={15} className="text-muted" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center">
              <div>
                <Image
                  src={"/imgs/cart-empty.webp"}
                  width={200}
                  height={250}
                  alt="cart-empty"
                  className="object-cover"
                />
                <p className="text-xs text-muted text-center">
                  Your cart is currently empty.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
{
  /*  */
}
export default CartContent;
