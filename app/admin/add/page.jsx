"use client";

import React, { useState } from "react";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState("calcomania");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderForm = () => {
    if (selectedOption === "calcomania") {
      return (
        <div className="h-full w-full flex flex-col items-center justify-evenly pt-6 gap-4">
          <div className="w-full flex justify-center gap-4">
            <input
              className="w-1/3 h-8 px-4"
              placeholder="Nombre de la calco"
            />
            <select className="text-black" defaultValue={"Anime"}>
              <option>Anime</option>
              <option>Amor</option>
              <option>Videojuegos</option>
              <option>Futbol</option>
              <option>Basquet</option>
              <option>Otros</option>
            </select>
          </div>
          <input type="file" />
          <button className="w-1/4 h-12 bg-[#1f1f1f]">Cargar</button>
        </div>
      );
    } else if (selectedOption === "oferta") {
      return (
        <div className="h-full w-full flex flex-col items-center pt-6 gap-8">
          <input className="w-1/2 h-8 px-4" placeholder="Nombre de la oferta" />
          <select className="text-black" defaultValue={"Anime"}>
              <option>Anime</option>
              <option>Amor</option>
              <option>Videojuegos</option>
              <option>Futbol</option>
              <option>Basquet</option>
              <option>Otros</option>
            </select>
            <button className="w-1/4 h-12 bg-[#1f1f1f]">Cargar</button>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-2/5 h-2/5 bg-[#ffde59] flex flex-col items-center p-6 rounded-xl">
        <h1 className="text-black text-4xl font-semibold">
          Añadir {selectedOption}
        </h1>
        {renderForm()}
        <div className="flex justify-center w-full gap-8 items-center">
          <div
            className={`${
              selectedOption === "calcomania"
                ? "bg-[#1f1f1f]"
                : "bg-white text-black"
            }  w-1/4 h-12 flex items-center justify-center text-2xl cursor-pointer `}
            onClick={() => handleOptionClick("calcomania")}
          >
            CALCOMANIA
          </div>
          <div
            className={`${
              selectedOption === "oferta"
                ? "bg-[#1f1f1f]"
                : "bg-white text-black"
            }  w-1/4 h-12 flex items-center justify-center text-2xl cursor-pointer `}
            onClick={() => handleOptionClick("oferta")}
          >
            OFERTA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


