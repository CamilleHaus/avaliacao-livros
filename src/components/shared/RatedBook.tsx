"use client";

import { books } from "@/dbMock/dbBooks";
import Image from "next/image";
import { useState } from "react";
import StarRating from "./StarRating";

const RatedBook = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength) + "...";
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      <p className="text-sm text-gray-200">Avaliações mais recentes</p>
      {books.map((book) => (
        <li className="flex w-[100%] max-w-[650px] flex-col gap-6 rounded-md bg-first p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 pb-4">
              <Image
                src={book.authorImg}
                alt="Image of author"
                width={50}
                height={20}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p>{book.name}</p>
                <p>{book.date}</p>
              </div>
            </div>
            <StarRating size={24} rating={book.rating} />
          </div>
          <div className="flex gap-6">
            <div className="relative h-36 w-24">
              <Image
                src={book.bookImg}
                alt="Image of book"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <p className="pb-4">{book.title}</p>
              <div>
                <p>
                  {isExpanded
                    ? book.description
                    : truncateText(book.description, 100)}
                </p>
                <button onClick={toggleExpanded} className="text-blue-500">
                  {isExpanded ? "Ver Menos" : "Ver Mais"}
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default RatedBook;
