"use client"

import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [promo, setPromo] = useState(99);
    const [enRegla, setEnRegla] = useState(true);

    return (
        <CartContext.Provider value={{cart,setCart,promo,setPromo,enRegla,setEnRegla}}>
            {children}
        </CartContext.Provider>
    )
}