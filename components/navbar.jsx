import React from "react";
import { GiHamburgerMenu } from "../node_modules/react-icons/gi";
import { BsCartFill } from "../node_modules/react-icons/bs";

const Navbar = ({ toggleSidebar }) => {
  return (
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
  );
};

export default Navbar;
