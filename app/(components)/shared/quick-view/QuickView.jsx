"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import MainButton from "../main-btn/MainButton";

const btnStyle =
  "w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-primary transition-colors duration-200 hover:bg-secondary cursor-pointer";
export function QuickView({ product }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <button className={`${btnStyle}`}>
              <MdOutlineRemoveRedEye size={20} />
            </button>
          }
        />
        <DialogContent className="md:max-w-179 lg:max-w-200 xl:max-w-237.5">
          <DialogHeader>
            <DialogTitle className={"text-center"}>
              Quick View For {product.title}
            </DialogTitle>
            <DialogDescription className={"text-center"}>
              Here You Can Make a Quick View For Products
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mt-10">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="rounded-[10px] w-full"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-[16px] lg:text-lg font-bold text-primary pr-4">
                {product.title}
              </h3>
              <p className="text-2xl font-bold">${product.price}</p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="min-w-25 font-xs font-bold">SKU:</span>
                  <span className="text-muted text-xs font-extrabold">
                    {product.sku}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="min-w-25 font-xs font-bold">CATEGORY:</span>
                  <span className="text-muted text-xs font-extrabold">
                    {product.subCategory.name}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase">Quantity:</span>
                <div className="flex items-center gap-3 my-3.5">
                  <div className="border flex items-center justify-between min-w-30 min-h-12.5 px-3">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="text-lg text-muted cursor-pointer transition-colors duration-200 hover:text-secondary"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-lg text-muted cursor-pointer transition-colors duration-200 hover:text-secondary"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex-1">
                    <MainButton
                      title="Add To Bag"
                      className="bg-[#EDEDED] w-full min-h-12.5"
                      spanClassName="w-full h-full top-0 left-0"
                    />
                  </div>
                </div>
                <div>
                  <Button
                    className={"w-full min-h-12.5 cursor-pointer"}
                    variant="outline"
                  >
                    Buy It Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
