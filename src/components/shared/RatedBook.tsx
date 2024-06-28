"use client";

import { books } from "@/dbMock/dbBooks";
import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-col gap-10 mt-6">
      {books.map((book) => (
        <li className="flex flex-col gap-6 max-w-[600px] bg-sky-950 p-6 rounded-md">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center pb-4">
              <Image
                src={book.authorImg}
                alt="Image of author"
                width={50}
                height={20}
                className="rounded-full object-cover w-12 h-12"
              />
              <div>
                <p>{book.name}</p>
                <p>{book.date}</p>
              </div>
            </div>
            <p>{book.rating}</p>
          </div>
          <div className="flex gap-6">
            <div className="relative w-24 h-36">
              <Image
                src={book.bookImg}
                alt="Image of book"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
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