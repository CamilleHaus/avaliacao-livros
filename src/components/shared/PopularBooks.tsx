"use client" 

import Image from "next/image";
import StarRating from "./StarRating";
import { ChevronRight } from "lucide-react";
import axiosAPI from "@/lib/api";
import { useEffect, useState } from "react";

interface IBook {
  id: string;
  name: string;
  coverUrl: string;
  description?: string;
  authorId?: string;
  averageRating: number;
}

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getPopularBooks = async () => {
      try {
        const { data } = await axiosAPI.get("/popular-books");

        const topRatedBooks = data.topRatedBooks;

        setPopularBooks(topRatedBooks);
      } catch (error) {
        console.log(error);
      }
    };

    getPopularBooks();
  }, []);

  return (
    <div className="mt-16 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-sm text-gray-200">Livros Populares</p>
        <button className="flex items-center text-sm text-stars">
          Ver todos <ChevronRight strokeWidth={1} />
        </button>
      </div>
      {popularBooks.map((book) => (
        <li key={book.id} className="flex gap-6 rounded-md bg-first p-4">
          <div className="relative h-24 w-16">
            <Image
              src={book.coverUrl}
              alt="Image of book"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-bold">{book.name}</p>
              <p className="text-sm text-gray-300">{book.name}</p>
            </div>
            <div>
              <StarRating size={16} rating={book.averageRating} />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default PopularBooks;
