import PopularBooks from "@/components/shared/PopularBooks";
import RatedBook from "@/components/shared/RatedBook"
import SideBar from "@/components/shared/SideBar"
import { LineChart } from "lucide-react";

const Home = () => {
    return (
            <div className='w-full bg-back h-[100vh]'>
                <div className="w-[95%] flex justify-between">
                    <SideBar />
                        <div className="mt-14 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <LineChart size={32} className="text-icons"/><h2 className="text-2xl">Início</h2>
                            </div>
                            <RatedBook />
                        </div>
                     <div className="mt-16 w-[25%]">
                        <PopularBooks />
                    </div>
                </div>
            </div>
        )
};

export default Home;