import { LineChart, LogIn, Telescope } from 'lucide-react';
import BookLogo from  "../../../public/svgs/bookLogo.svg"
import BookWise from "../../../public/svgs/bookwise.svg";
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className="w-[15%] h-[95vh] flex flex-col justify-between items-center mt-6 ml-4 bg-gradient bg-cover rounded-md pb-4">
      <div className="flex flex-col gap-10 items-center pt-10">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <BookLogo /><BookWise />
        </h3>
        <div className="flex flex-col gap-4 w-full">
          <Link
            href={'/'}
            className="flex gap-2 pl-2 hover:border-l-2 hover:border-icons"
          >
            <LineChart size={24} />
            Inicio
          </Link>
          <Link
            href={'/explorar'}
            className="flex gap-2 pl-2 hover:border-l-2 hover:border-icons"
          >
            <Telescope />
            Explorar
          </Link>
        </div>
      </div>
      <Link href={'/login'} className="flex gap-2 pb-4">
        <LogIn  className="text-icons"/>
        Fazer Login
      </Link>
    </div>
  )
}

export default SideBar;
