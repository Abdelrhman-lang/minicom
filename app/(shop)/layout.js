import React from "react";
import Header from "../(components)/layout/header/Header";

function ShopLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default ShopLayout;
