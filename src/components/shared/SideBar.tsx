import { LineChart, LogIn, Telescope } from "lucide-react";
import BookLogo from "../../../public/svgs/bookLogo.svg";
import BookWise from "../../../public/svgs/bookwise.svg";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="ml-4 mt-6 flex h-[95vh] w-[15%] flex-col items-center justify-between rounded-md bg-gradient bg-cover pb-4">
      <div className="flex flex-col items-center gap-10 pt-10">
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <BookLogo />
          <BookWise />
        </h3>
        <div className="flex w-full flex-col gap-4">
          <Link
            href={"/"}
            className="flex gap-2 pl-2 hover:border-l-2 hover:border-icons"
          >
            <LineChart size={24} />
            Inicio
          </Link>
          <Link
            href={"/explore"}
            className="flex gap-2 pl-2 hover:border-l-2 hover:border-icons"
          >
            <Telescope />
            Explorar
          </Link>
        </div>
      </div>
      <Link href={"/login"} className="flex gap-2 pb-4">
        <LogIn className="text-icons" />
        Fazer Login
      </Link>
    </div>
  );
};

export default SideBar;
