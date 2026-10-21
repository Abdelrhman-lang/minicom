"use client";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { QuickView } from "../quick-view/QuickView";
import { addToCart } from "@/services/cart";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/toast";
const btnStyle =
  "w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-primary transition-colors duration-200 hover:bg-secondary cursor-pointer";
function ProductCard({ product }) {
  const queryClient = useQueryClient();
  const handelAddToCart = async () => {
    try {
      const result = await addToCart(product.id);
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        toast.add({
          type: "success",
          description: "Item added successfuly",
        });
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("ADD_TO_CART_CLIENT_ERROR:", error);
    }
  };
  return (
    <div>
      <div className="relative group cursor-pointer overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-[10px]"
        />
        <div className="absolute top-3 opacity-0 right-3 transition-all duration-300 -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex flex-col gap-2">
            <button className={`${btnStyle}`}>
              <IoIosStarOutline size={20} />
            </button>
            <div className="hidden md:flex">
              <QuickView product={product} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 transition-all duration-300 ease-out opacity-0 translate-x-8 translate-y-8 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
          <button
            onClick={handelAddToCart}
            className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center transition-colors duration-200 hover:bg-secondary cursor-pointer"
          >
            <MdOutlineShoppingBag size={20} />
          </button>
        </div>
      </div>
      <div className="pt-6">
        <div className="space-y-2.5">
          <p className="text-primary text-xs md:text-sm">{product.title}</p>
          <span className="font-bold text-xs md:text-sm text-primary">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
