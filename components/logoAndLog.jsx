import React from "react";
import logo from "../public/logoStore.png";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from "../node_modules/react-icons/bs";
import { BsCartFill } from "../node_modules/react-icons/bs";

const LogoAndLog = () => {
  return (
    <div className="w-screen fixed flex justify-between py-7 px-10 mdn:px-1">
      <Link href={"/store"}>
        <Image src={logo} width={75}/>
      </Link>
      <Link href={'/cart'}>
        <BsCartFill size={"50px"} fill="#ffde59" className="trans" />
      </Link>
    </div>
  );
};

export default LogoAndLog;
