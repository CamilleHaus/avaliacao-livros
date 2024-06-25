import { Book, LineChart, LogIn, Telescope } from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-[15%] h-[95vh] flex flex-col justify-between items-center mt-6 ml-4 bg-gradient bg-cover rounded-md">
      <div className="flex flex-col gap-10 items-center pt-10">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Book size={24} /> Bookwise
        </h3>
        <div className="flex flex-col gap-4 w-full">
          <Link href={"/"} className="flex gap-2 pl-2 hover:border-l-2 hover:border-white">
            <LineChart size={24} />
            Inicio
          </Link>
          <Link href={"/explorar"} className="flex gap-2 pl-2 hover:border-l-2 hover:border-white">
            <Telescope />
            Explorar
          </Link>
        </div>
      </div>
      <Link href={"/login"} className="flex gap-2 pb-4">
        <LogIn />
        Fazer Login
      </Link>
    </div>
  );
};

export default SideBar;
