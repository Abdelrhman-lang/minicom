"use client";
import { toast } from "@/components/ui/toast";
import { deleteItemFromCart } from "@/services/cart";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { IoTrash } from "react-icons/io5";
function CartContent({ items }) {
  const queryClient = useQueryClient();
  const handelRemoveFromCart = async (itemId) => {
    try {
      const result = await deleteItemFromCart(itemId);

      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        toast.add({
          type: "success",
          description: "item deleted",
        });
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("FAILD_REMOVING-ITEM", error);
    }
  };
  return (
    <div className="border-t">
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
                      <div className="w-[100px] flex items-center justify-between">
                        <button className="w-6 h-6 flex items-center justify-center cursor-pointer">
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="w-6 h-6 flex items-center justify-center cursor-pointer">
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => handelRemoveFromCart(item.id)}
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
