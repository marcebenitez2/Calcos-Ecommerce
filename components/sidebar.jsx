import React from "react";
import Image from "next/image";
import { categories } from "@/exports/categories";
import Link from "next/link";
import Logo from "./../public/logo.jpg";
import { BiSolidUser } from "./../node_modules/react-icons/bi";

const SideBarView = ({ isSideBarOpen }) => {

  return (
    <div className={`${isSideBarOpen ? "w-screen h-screen" : ""}`}>
      <aside
        className={`fixed top-0 left-0 z-50 w-52 h-screen p-4 transition-transform ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#ffde59] md:translate-x-0 flex flex-col justify-between `}
      >
        <div className="h-full">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" className="w-48" priority />
          </Link>
          <div className="flex-col gap-4">
            {categories.map((x) => (
              <div key={x.id} className="text-center text-black bold">
                <Link href={x.name}>{x.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <Link href={"/login"}>
          <BiSolidUser size={"50px"} fill="black" className="m-auto" />
        </Link>
      </aside>
    </div>
  );
};

export default SideBarView;
