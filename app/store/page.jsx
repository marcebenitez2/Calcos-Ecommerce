import React from "react";
import { BsFillPersonFill } from "../../node_modules/react-icons/bs";
import Link from "next/link";
import { fetchCalcos } from "@/firebase/firebase";
import OfferAndCalcos from "@/components/bodyStore/offerAndCalcos";

async function getCalcos() {
  const calcos = await fetchCalcos();
  return calcos;
}

const Page = async () => {
  const calcos = await getCalcos();

  return (
    <div className="w-full h-full flex flex-col items-center py-7 gap-8 mdn:py-16">
      <Link href={"/admin"}>
        <BsFillPersonFill
          size={"60px"}
          className="fixed left-10 bottom-10 smn:left-0"
          fill="#ffde59"
        />
      </Link>
      <h1 className="text-5xl font-semibold text-[#ffde59]">Bienvenido</h1>
      <div className="w-full h-96 bg-[#ffde59] flex justify-center items-center text-black">
        Aca imagen grande
      </div>
      <OfferAndCalcos calcos={calcos}/>
    </div>
  );
};

export default Page;
