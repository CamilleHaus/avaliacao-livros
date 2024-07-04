"use client"

import Image from "next/image";
import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import axiosAPI from "@/lib/api";
import { IRecentReview } from "./RatedBook";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const LastRead = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    return text.length <= maxLength
      ? text
      : text.substring(0, maxLength) + "...";
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const [userLastReview, setUserLastReviews] = useState<IRecentReview | null>(null);

  useEffect(() => {
    const getRecentuserLastReviews = async () => {
      try {
        const { data } = await axiosAPI.get("/recent-reviews");

        const recentReviews = data.recentReviews;
        const userLastReview = recentReviews[recentReviews.length - 1];

        setUserLastReviews(userLastReview);
      } catch (error) {
        console.log(error);
      }
    };

    getRecentuserLastReviews();
  }, []);

  
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
            <Image
              src={userLastReview.user.avatarURL}
              alt="Image of book"
              layout="fill"
              objectFit="cover"
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
