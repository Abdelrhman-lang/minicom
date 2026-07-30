import React from "react";
import Header from "../(components)/layout/header/Header";
import Cart from "../(components)/shared/cart/Cart";

function ShopLayout({ children }) {
  return (
    <div>
      <Header />
      <Cart />
      <main>{children}</main>
    </div>
  );
}

export default ShopLayout;
