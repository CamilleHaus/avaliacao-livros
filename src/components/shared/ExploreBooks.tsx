import { exploreBooks } from "@/dbMock/exploreBooks";
import Image from "next/image";
import StarRating from "./StarRating";
import { ChevronRight } from "lucide-react";

const ExploreBooks = () => {
  return (
    <div className="mt-16">
      <div className="mb-4 flex justify-between">
        <p className="text-sm text-gray-200">Livros Populares</p>
        <button className="flex items-center text-sm text-stars">
          Ver todos <ChevronRight strokeWidth={1} />
        </button>
      </div>
      <ul className="grid grid-cols-3 gap-4">
        {exploreBooks.map((book, index) => (
          <li key={index} className="flex gap-6 rounded-md bg-first p-4">
            <div className="relative h-24 w-16">
              <Image
                src={book.bookImg}
                alt="Image of book"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-bold">{book.name}</p>
                <p className="text-sm text-gray-300">{book.title}</p>
              </div>
              <div>
                <StarRating size={16} rating={book.rating} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreBooks;
