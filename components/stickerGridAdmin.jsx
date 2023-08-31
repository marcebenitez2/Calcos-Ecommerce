import React from "react";
import CalcoCard from "./calcoCardAdmin";
import CalcoCardEmpty from "./calcoCardEmpty";
import { fetchCalcos } from "../firebase/firebase";

async function StickerGridAdmin() {
  const calcos = await fetchCalcos();

  return (
    <div className="w-full grid grid-cols-7 px-20 gap-x-5 h-full animate-fade-up animate-once animate-duration-300 animate-ease-linear">
      {calcos.map((calco) => (
        <CalcoCard calco={calco.data} id={calco.id} key={calco.id} />
      ))}
      <CalcoCardEmpty />
    </div>
  );
}

export default StickerGridAdmin;
