import React from "react";
import CalcoCard from "./calcoCardAdmin";
import CalcoCardEmpty from "./calcoCardEmpty";
import { fetchCalcos, fetchOfertas } from "../../firebase/firebase";
import promoImagen from "../../public/promo.png";

async function StickerGridAdmin() {
  const ofertas = await fetchOfertas();
  const calcos = await fetchCalcos();
  console.log(ofertas);

  return (
    <div className="w-full grid grid-cols-7 px-20 gap-x-5 h-full animate-fade-up animate-once animate-duration-300 animate-ease-linear">
      {ofertas.map((oferta) => (
        <div
          key={oferta.id}
          className="h-96 w-full flex flex-col justify-center items-center bg-white"
        >
          <h2 className="text-black text-2xl">{oferta.data.categoria}</h2>
          <img
            src={
              "https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-promo-label-png-768x512.png"
            }
            alt="Oferta"
          />
          <h2 className="text-black text-6xl">{oferta.data.nombre}</h2>
        </div>
      ))}
      {calcos.map((calco) => (
        <CalcoCard calco={calco.data} id={calco.id} key={calco.id} />
      ))}
      <CalcoCardEmpty />
    </div>
  );
}

export default StickerGridAdmin;
