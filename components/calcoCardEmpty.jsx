import Link from "next/link";
import { AiOutlineFileAdd } from "./../node_modules/react-icons/ai";

const CalcoCardEmpty = () => {
  return (
    <div className="h-96 flex flex-col bg-white items-center justify-center">
      <Link href={'/admin/add'}>
        <AiOutlineFileAdd fill="black" size={"100px"} />
      </Link>
    </div>
  );
};

export default CalcoCardEmpty;
