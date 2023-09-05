"use client";
import React, { useEffect, useState } from "react";
import Offer from "./offer";
import GridCalcos from "./gridCalcos";

const OfferAndCalcos = ({ calcos }) => {
  const [promoSelected, setPromoSelected] = useState(null);

  useEffect(() => {
    console.log(promoSelected);
  }, [promoSelected]);

  return (
    <div>
      <Offer changePromo={setPromoSelected} />
      <GridCalcos calcos={calcos} />
    </div>
  );
};

export default OfferAndCalcos;
