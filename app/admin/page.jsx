import StickerGrid from "@/components/admin/stickerGridAdmin";
import React from "react";
import { AiOutlineArrowLeft } from "../../node_modules/react-icons/ai";
import Link from "next/link";

export const metadata = {
  title: "Admin",
};

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full bg-[#ffde59]">
        <Link href={"/store"}>
          <AiOutlineArrowLeft
            fill="black"
            size={"40px"}
            className="absolute top-6 left-6"
          />
        </Link>
        <h1 className="text-5xl pt-3 text-center text-black font-semibold">
          Bienvenido Martin!
        </h1>
        <p className="text-center text-black">Gestionar catalogo</p>
      </div>
      <div className="w-full h-full pt-10">
        <StickerGrid />
      </div>
    </div>
  );
};

export default Page;
