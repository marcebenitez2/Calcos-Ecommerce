import Image from "next/image";
import React from "react";
import logo from "../../public/logoOficial.png";
import PayCart from "./components/payCart";
import About from "./components/about";

const CartGrilla = () => {

  return (
    <div className="pay-card animate-flip-up animate-once animate-duration-[600ms] animate-ease-linear">
      <div className="pay-card-info  flex flex-col px-20 py-8 max-h-full">
        <div className="flex w-full justify-between">
          <h1 className="text-5xl tracking-tighter text-[#f7ba2b]">
            Finalizando compra...
          </h1>
          <Image
            src={logo}
            width={200}
            height={150}
            className="absolute right-8 top-3"
            alt="Logo oficial"
          />
        </div>
        <div className="w-full h-full flex py-10 ">
            <PayCart/>
            <About/>
        </div>
      </div>
    </div>
  );
};

export default CartGrilla;
