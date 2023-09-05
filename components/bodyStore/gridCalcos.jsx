"use client";

import { categories } from "@/exports/categories";
import React, { useEffect, useState } from "react";

const GridCalcos = ({ calcos }) => {
  const [originalCalcos, setOriginalCalcos] = useState(calcos);
  const [calcosCopy, setCalcosCopy] = useState(calcos);
  const [inputSearch, setinputSearch] = useState("");

  const handleSearch = (e) => {
    setinputSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filteredCalcos = originalCalcos.filter((x) =>
      x.data.nombre.toLowerCase().includes(searchTerm)
    );
    setCalcosCopy(filteredCalcos);
  };

  const categoryFilter = (e) => {
    if (e.target.value === "Todos") {
      setCalcosCopy(originalCalcos);
    } else {
      const categoryCalcos = originalCalcos.filter(
        (x) => x.data.categoria === e.target.value
      );
      setCalcosCopy(categoryCalcos);
    }
  };

  return (
    <div className="w-full flex flex-col gap-7">
      <div className="w-full flex justify-between mdn:gap-4">
        <h1 className="text-4xl mdn:hidden">Catálogo:</h1>
        <input
          className="w-2/4 px-4 bg-transparent border border-[#ffde59] rounded mdn:w-2/3 mdn:h-8"
          placeholder="Buscar..."
          onChange={handleSearch}
          value={inputSearch}
        />
        <select
          className="w-1/6 px-4 bg-transparent border border-[#ffde59] mdn:w-1/3 rounded"
          onChange={categoryFilter}
        >
          {categories.map((x) => (
            <option key={x.id} className="text-black">
              {x.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-6 gap-y-4 gap-x-4 place-items-center 2xln:grid-cols-5 xln:grid-cols-4 lgn:grid-cols-3 mdn:grid-cols-2 mdn:px-10 smn:grid-cols-1">
        {calcosCopy.map((x) => (
          <div key={x.id} className="card cursor-pointer mdn:w-60">
            <div className="card-details">
              <img
                src={x.data.imagen}
                className="h-60 w-96"
                alt={x.data.descripcion}
              />
            </div>
            <button className="card-button">Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCalcos;
