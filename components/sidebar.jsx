"use client";
import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import Image from "next/image";
import { categories } from "@/exports/categories";
import Link from "next/link";
import Logo from "./../public/logo.jpg";
import { GiHamburgerMenu } from "./../node_modules/react-icons/gi";
import { BiSolidUser } from "./../node_modules/react-icons/bi";

const SideBarView = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 h-12 z-40 w-full  border-b-yellow-600 flex flex-row justify-between px-6 items-center md:bg-[#1f1f1f] bg-[#ffde59]">
        <GiHamburgerMenu
          size={"33px"}
          color="black"
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
        <input
          className="md:w-2/6 w-3/6 py-1 px-2 text-[#1f1f1f]"
          placeholder="Buscar"
        />
        <BsCartFill
          size={"33px"}
          className="md:text-white text-[#1f1f1f]"
        ></BsCartFill>
      </nav>
      <div className={`${isSideBarOpen ? "w-screen h-screen" : ""}`}>
        <aside
          className={`fixed top-0 left-0 z-50 w-52 h-screen p-4 transition-transform ${
            isSideBarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-[#ffde59] md:translate-x-0 border-b-yellow-600 flex flex-col justify-between`}
        >
          <div className="h-full">
            <Link href={'/'}>
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
    </div>
  );
};

export default SideBarView;
