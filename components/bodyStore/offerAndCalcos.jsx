"use client";
import React, { useState } from "react";
import Offer from "./offer";
import GridCalcos from "./gridCalcos";
import CalcosSelected from "./calcosSelected";


const OfferAndCalcos = ({ calcos }) => {
  const [promoSelected, setPromoSelected] = useState(null);

  return (
    <div>
      <Offer changePromo={setPromoSelected} />
      <GridCalcos calcos={calcos} promoSelected={promoSelected}/>
      <CalcosSelected promo={promoSelected}/>
    </div>
  );
};

export default OfferAndCalcos;
