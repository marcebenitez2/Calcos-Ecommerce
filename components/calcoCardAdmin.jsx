"use client";

import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { categories } from "@/exports/categories";
import { actualizarCalco } from "@/firebase/firebase";

const CalcoCardAdmin = ({ calco, id }) => {
  const [edit, setEdit] = useState(false);
  const [updateImage, setupdateImage] = useState(null);
  const [updateName, setupdateName] = useState(calco.nombre);
  const [updateCategory, setupdateCategory] = useState(calco.categoria);

  const startEdit = () => {
    setEdit(!edit);
  };

  const changeImage = (file) => {
    setupdateImage(file);
  };

  return (
    <div className="h-96">
      {edit ? (
        <div className="w-full h-full flex flex-col justify-evenly px-8 bg-zinc-600 animate-fade animate-once animate-duration-300 animate-ease-linear animate-alternate animate-fill-forwards ">
          <input
            type="file"
            onChange={(e) => {
              changeImage(e.target.files[0]);
            }}
          />
          <div className="flex flex-col ">
            <label>Nombre</label>
            <input
              value={updateName}
              type="text"
              className="w-full text-black"
              onChange={(e) => setupdateName(e.target.value)}
            />
          </div>
          <div>
            <label>Categorias</label>
            <select
              className="text-black"
              value={updateCategory}
              onChange={(e) => setupdateCategory(e.target.value)}
            >
              {categories.map((x) => (
                <option key={x.id}>{x.name}</option>
              ))}
            </select>
          </div>
          <button
            className="bg-[#ffde59] text-black h-8"
            onClick={() =>
              actualizarCalco(id, updateImage, updateName, updateCategory)
            }
          >
            Guardar Cambios
          </button>
          <button onClick={startEdit}>Cancelar</button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col bg-white ">
          <img src={calco.imagen} className="h-4/5" />
          <div className="w-full h-1/5 pb-2 px-2 justify-between items-end bg-gradient-to-b from-white via-black to-black flex">
            <h3>{calco.nombre}</h3>
            <FiEdit2
              size={"25px"}
              onClick={startEdit}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalcoCardAdmin;