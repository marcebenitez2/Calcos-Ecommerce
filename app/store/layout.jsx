import LogoAndCart from "@/components/logoAndCart";
import React from "react";
import { CartProvider } from "@/context/cartContext";

const Layout = ({ children }) => {
  
  return (
    <CartProvider>
      <div>
        <LogoAndCart />
        <div className="w-4/6 m-auto lgn:w-5/6 ">{children}</div>
      </div>
    </CartProvider>
  );
};

export default Layout;
