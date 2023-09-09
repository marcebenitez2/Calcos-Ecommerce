import React from "react";

const TitleAndHero = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-5">
      <h1 className="text-5xl font-semibold text-[#ffde59] mdn:text-3xl">Bienvenido</h1>
      <div className="w-full h-96 bg-[#ffde59] flex justify-center items-center text-black">
        Aca imagen grande
      </div>
    </div>
  );
};

export default TitleAndHero;
