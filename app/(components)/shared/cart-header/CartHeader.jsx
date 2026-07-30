import CloseBtn from "../close-btn/CloseBtn";
import { closeCart } from "@/RTK/slices/cartSlice";
import { IoMdClose } from "react-icons/io";
function CartHeader({ dispatch, items }) {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-5">
        <p className="text-sm font-semibold uppercase text-primary">my cart</p>
        <p className="px-2 h-6 flex items-center justify-center bg-secondary text-xs text-primary rounded-[3px] relative">
          <span className="absolute top-1/2 -left-3  -translate-y-1/2 border-[6px] border-t-transparent border-r-secondary border-l-transparent border-b-transparent"></span>
          {items?.length} items
        </p>
      </div>
      <div>
        <CloseBtn
          ariaLabel={`Close Cart`}
          fn={() => dispatch(closeCart())}
          className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center`}
          icon={<IoMdClose size={25} />}
        />
      </div>
    </div>
  );
}

export default CartHeader;
