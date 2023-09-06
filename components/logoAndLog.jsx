import React from "react";
import logo from "../public/logoStore.png";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from "../node_modules/react-icons/bs";
import { BsCartFill } from "../node_modules/react-icons/bs";

const LogoAndCart = () => {
  return (
    <div className="w-screen fixed flex justify-between py-7 px-10 mdn:px-1">
      <Link href={"/store"}>
        <Image src={logo} width={75} alt="Logo"/>
      </Link>
      <Link href={'/cart'}>
        <BsCartFill fill="#ffde59" className="text-5xl mdn:text-4xl"/>
      </Link>
    </div>
  );
};

export default LogoAndCart;
