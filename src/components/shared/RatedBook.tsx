"use client";

import Image from "next/image";
import { useState } from "react";
import StarRating from "./StarRating";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import { BooksContext } from "@/context/booksContext";


const RatedBook = () => {

  const booksContext = React.useContext(BooksContext)

  const recentReviews = booksContext?.recentReviews

  console.log(recentReviews)
  
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});


  const truncateText = (text: string, maxLength: number) => {
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength) + "...";
  };

  const toggleExpanded = (id: string) => {
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  

  return (
    <div className="mt-4 flex flex-col gap-4">
      <p className="text-sm text-gray-200">Avaliações mais recentes</p>
      {recentReviews.map((review) => (
        <li
          key={review.id}
          className="flex w-[100%] max-w-[650px] flex-col gap-6 rounded-md bg-first p-6"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-4 pb-4">
              <img
                src={review.user.avatarUrl}
                alt="Image of author"
                width={50}
                height={20}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p>{review.user.name}</p>
                <p className="text-sm">
                  {formatDistanceToNow(new Date(review.createdAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>
              </div>
            </div>
            <StarRating size={24} rating={review.rating} />
          </div>
          <div className="flex gap-6">
            <div className="relative h-36 w-24">
              <Image
                src={review.book.coverUrl}
                alt="Image of book"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <p className="pb-4">{review.book.name}</p>
              <div>
                <p>
                  {isExpanded[review.id]
                    ? review.book.description
                    : truncateText(review.book.description, 100)}
                </p>
                <button
                  onClick={() => toggleExpanded(review.id)}
                  className="text-blue-500"
                >
                  {isExpanded[review.id] ? "Ver Menos" : "Ver Mais"}
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
