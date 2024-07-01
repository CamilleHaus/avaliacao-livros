import ExploreBooks from "@/components/shared/ExploreBooks";
import SideBar from "@/components/shared/SideBar";
import { Search, Telescope } from "lucide-react";

const Explore = () => {
  const categoriesList = [
    "Tudo",
    "Computação",
    "Educação",
    "Fantasia",
    "Ficção Científica",
    "Horror",
    "HQs",
    "Suspense",
  ];

  return (
    <div className="w-full mb-6">
      <div className="flex w-[95%] gap-16">
        <SideBar />
        <div className="mt-2 flex w-[80%] flex-col">
          <div className="mb-8 mt-10 flex items-center justify-between">
            <h2 className="flex gap-4 text-2xl">
              <Telescope size={32} className="text-icons" />
              Explorar
            </h2>
            <div className="flex w-[40%] items-center justify-around rounded-md border border-stars px-2">
              <input
                className="w-[90%] bg-back py-3"
                placeholder="Buscar livro ou autor"
              />
              <Search strokeWidth={1} />
            </div>
          </div>
          <ul className="flex gap-4 text-sm text-stars">
            {categoriesList.map((item, index) => (
              <li
                key={index}
                className="rounded-full border border-stars px-5 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
          <div>
           <ExploreBooks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
