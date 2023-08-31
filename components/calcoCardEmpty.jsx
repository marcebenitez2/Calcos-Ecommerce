import Link from "next/link";
import { AiOutlineFileAdd } from "./../node_modules/react-icons/ai";

const CalcoCardEmpty = () => {
  return (
    <div className="h-96 flex flex-col bg-white items-center justify-center">
      <Link href={"/admin/add"} className="w-full h-full flex justify-center items-center">
        <AiOutlineFileAdd fill="black" size={"100px"} />
      </Link>
    </div>
  );
};

export default CalcoCardEmpty;