import { CartContext } from "@/context/cartContext";
import React, { useEffect, useState } from "react";
import { TiDelete } from "../../node_modules/react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";

const CalcosSelected = ({ cart,setCart,promo,enRegla }) => {
  // const [esIncorrecto, setesIncorrecto] = useState(false);

  const counts = cart.reduce((acc, curr) => {
    acc[curr.data.nombre] = (acc[curr.data.nombre] || 0) + 1;
    return acc;
  }, {});

  const addOne = (nombre) => {
    if (cart.length < promo) {
      const itemToAdd = cart.find((item) => item.data.nombre === nombre);
      setCart([...cart, itemToAdd]);
    } else alert("Ya lo superaste picaron");
  };

  const removeOne = (nombre) => {
    const indexToRemove = cart.findIndex((item) => item.data.nombre === nombre);
    if (indexToRemove !== -1) {
      const newCart = [...cart];
      newCart.splice(indexToRemove, 1);
      setCart(newCart);
    }
  };


  return (
    <AnimatePresence>
      {cart.length !== 0 ? (
        <motion.div
          className={`h-80 w-72 fixed flex flex-col bottom-10 right-5 border-4  rounded px-2 ${
            enRegla ? "border-[#ffde59]" : "border-red-700"
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-2 items-center">
            <h1
              className={`text-lg  ${
                enRegla ? "text-[#ffde59]" : "text-red-700"
              }`}
            >
              Seleccionadas:
            </h1>
            {promo != 99 ? `promo de ${promo}` : ""}
          </div>
          <ul>
            {Object.entries(counts).map(([nombre, count], index) => (
              <li
                className="w-full flex justify-between items-center "
                key={index}
              >
                {nombre} x {count}
                <div className="flex gap-3 text-4xl">
                  {count > 1 ? (
                    <button
                      className="cursor-pointer"
                      onClick={() => removeOne(nombre)}
                    >
                      -
                    </button>
                  ) : (
                    <TiDelete
                      className="cursor-pointer"
                      fill="red"
                      onClick={() => removeOne(nombre)}
                    />
                  )}
                  <button
                    className={`cursor-pointer ${enRegla ? "enabled:" : "disabled" }`}
                    onClick={() => addOne(nombre)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CalcosSelected;
