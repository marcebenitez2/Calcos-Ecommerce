import { CartContext } from "@/context/cartContext";
import React, { useContext } from "react";
import { TiDelete } from "../../node_modules/react-icons/ti";

const CalcosSelected = () => {
  const { cart, setCart } = useContext(CartContext);

  const counts = cart.reduce((acc, curr) => {
    acc[curr.data.nombre] = (acc[curr.data.nombre] || 0) + 1;
    return acc;
  }, {});

  const addOne = (nombre) => {
    const itemToAdd = cart.find((item) => item.data.nombre === nombre);
    setCart([...cart, itemToAdd]);
  };

  const removeOne = (nombre) => {
    const indexToRemove = cart.findIndex((item) => item.data.nombre === nombre);
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1);
      setCart(newCart);
    }
  };

  return cart.length !== 0 ? (
    <div className="h-80 w-72 fixed flex flex-col bottom-10 right-5 border border-[#ffde59] rounded px-2 animate-jump-in animate-once animate-duration-200 animate-ease-linear">
      <h1 className="text-lg text-[#ffde59]">Seleccionadas:</h1>
      <ul>
        {Object.entries(counts).map(([nombre, count], index) => (
          <li className="w-full flex justify-between items-center " key={index}>
            {nombre} x {count}
            <div className="flex gap-3 text-4xl">
              {count > 1 ? (
                <button className="cursor-pointer" onClick={() => removeOne(nombre)}>-</button>
              ) : (
                <TiDelete className="cursor-pointer" fill="red" onClick={() => removeOne(nombre)} />
              )}
              <button className="cursor-pointer" onClick={() => addOne(nombre)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default CalcosSelected;
