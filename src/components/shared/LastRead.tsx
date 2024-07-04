"use client"

import StarRating from "./StarRating";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import { BooksContext } from "@/context/booksContext";

const LastRead = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const booksContext = React.useContext(BooksContext)

  const userLastReview = booksContext?.userLastReview

  const truncateText = (text: string, maxLength: number) => {
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength) + "...";
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  
  if (!userLastReview) {
    return null;
  }
  
  console.log(userLastReview)

  return (
    <div>
        <li
          key={userLastReview?.id}
          className="flex w-[100%] max-w-[650px] gap-10 rounded-md bg-first p-6"
        >
          <div className="relative h-36 w-[20%]">
            <img
              src={userLastReview.user.avatarUrl}
              alt="Image of book"
            />
          </div>
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between gap-4 pb-4">
              <p className="text-sm">{formatDistanceToNow(new Date(userLastReview.createdAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}</p>
              <StarRating size={24} rating={userLastReview.rating} />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div>
                <p>{userLastReview!.book.name}</p>
                {/* <p className="text-sm">{userLastReview.book.author}</p> */}
              </div>
              <div>
                <p>
                  {isExpanded
                    ? userLastReview?.book.description
                    : truncateText(userLastReview.book.description, 100)}
                </p>
                <button onClick={toggleExpanded} className="text-blue-500">
                  {isExpanded ? "Ver Menos" : "Ver Mais"}
                </button>
              </div>
            </div>
          </div>
        </li>
    </div>
  );
};

export default LastRead;
