function CartFooter({ totlaPrice }) {
  return (
    <div className="absolute bottom-0 left-0 px-5 w-full">
      <div className="flex items-center justify-between">
        <div className="text-sm uppercase font-bold">total:</div>
        <div className="font-bold">${totlaPrice.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CartFooter;
