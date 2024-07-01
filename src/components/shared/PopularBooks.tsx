import { books } from "@/dbMock/dbBooks";
import Image from "next/image";
import StarRating from "./StarRating";
import { ChevronRight } from "lucide-react";

const PopularBooks = () => {
    return (
    <div className="flex flex-col gap-4 mt-16">
        <div className="flex justify-between">
            <p className="text-sm text-gray-200">Livros Populares</p>
            <button className="text-sm flex items-center text-stars">Ver todos <ChevronRight strokeWidth={1} /></button>
        </div>
      {books.map((book) => (
        <li className="flex gap-6 bg-first p-4 rounded-md">
            <div className="relative w-16 h-24">
              <Image
                src={book.bookImg}
                alt="Image of book"
                layout="fill"
                objectFit="cover"
              />
            </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col flex-1 gap-1">
            <p className="font-bold">{book.name}</p>
            <p className="text-sm text-gray-300">{book.title}</p>
            </div>
            <div>
            <StarRating size={16} rating={book.rating}/>
            </div>
          </div>
        </li>
      ))}
    </div>
    )
};

export default PopularBooks;

