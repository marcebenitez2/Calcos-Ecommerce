"use client"

import Image from "next/image";
import React, {useEffect, useState } from "react";
import offerImg from "../../public/oferta.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { offers } from "@/exports/offers";

const Offer = ({changePromo}) => {
  const [offer, setOffer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOffer(offers);
  }, []);

  useEffect(() => {
    setLoading(false)
  }, [offer]);

  function promoSelected(cantidad){
    changePromo(cantidad)
    toast.warn(`Ha seleccionado la promo de ${cantidad}`)
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-3xl">Ofertas disponibles:</h1>
      {loading ? (
        <p>Cargando ofertas...</p>
      ) : (
        <div className="w-full grid grid-cols-4 place-items-center 2xln:grid-cols-4 xln:grid-cols-3 lgn:grid-cols-2 smn:flex smn:flex-col smn:items-center gap-8 animate-fade-up animate-once animate-duration-300">
          {offer.map((x) => (
            <div className="card-calco cursor-pointer" key={x.id}  onClick={()=>promoSelected(x.cantidad)}>
              <div className="card-info">
                <Image src={offerImg} className="offer-image" />
                <span className="text-2xl">{x.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Offer;