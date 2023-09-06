"use client";
import React, { useContext, useEffect, useState } from "react";
import Offer from "./offer";
import GridCalcos from "./gridCalcos";
import CalcosSelected from "./calcosSelected";
import { CartContext } from "@/context/cartContext";


const OfferAndCalcos = ({ calcos }) => {
  const {cart,setCart,promo,setPromo,enRegla,setEnRegla} = useContext(CartContext);

  useEffect(() => {
    if(cart.length === promo) setEnRegla(true)
    if(cart.length > promo) setEnRegla(false)
  }, [cart]);
  

  return (
    <div>
      <Offer cart={cart} changePromo={setPromo} setEnRegla={setEnRegla}/>
      <GridCalcos calcos={calcos} promoSelected={promo} cart={cart} setCart={setCart} />
      <CalcosSelected cart={cart} setCart={setCart} promo={promo} enRegla={enRegla}/>
    </div>
  );
};

export default OfferAndCalcos;
