"use client";

import React, { useContext } from "react";
import logo from "../public/logoStore.png";
import Image from "next/image";
import Link from "next/link";
import { BsCartFill } from "react-icons/bs";
import { CartContext } from "@/context/cartContext";

const LogoAndCart = () => {
  const { enRegla } = useContext(CartContext);

  return (
    <div className="w-screen fixed flex justify-between py-7 px-10 mdn:px-1">
      <Link href={"/store"}>
        <Image src={logo} width={75} alt="Logo" />
      </Link>
      <Link href={enRegla ? "/cart" : "#"}>
        <BsCartFill
          fill={enRegla ? "#ffde59" : "#ccc"}
          className={`text-5xl mdn:text-4xl`}
        />
      </Link>
    </div>
  );
};

export default LogoAndCart;
