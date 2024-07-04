"use client";

import axiosAPI from "@/lib/api";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface BooksProviderProps {
  children: ReactNode;
}
export interface IRecentReview {
  id: string;
  rating: number;
  createdAt: string;
  user: {
    avatarUrl: string;
    name: string;
  };
  book: {
    author: {
      name: string;
    };
    coverUrl: string;
    description: string;
    name: string;
  };
}

interface IBook {
    id: string;
    name: string;
    coverUrl: string;
    description?: string;
    authorId?: string;
    averageRating: number;
  }

interface BooksContextType {
  recentReviews: IRecentReview[];
  userLastReview: IRecentReview | null;
  popularBooks: IBook[];
  
}

export const BooksContext = createContext<BooksContextType>({
  recentReviews: [],
  userLastReview: null,
  popularBooks: []
});

export const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  const [recentReviews, setRecentReviews] = useState<IRecentReview[]>([]);
  const [userLastReview, setUserLastReviews] = useState<IRecentReview | null>(
    null,
  );

  useEffect(() => {
    const getRecentReviews = async () => {
      try {
        const { data } = await axiosAPI.get("/recent-reviews");

        const recentReviews = data.recentReviews;
        const userLastReview = recentReviews[recentReviews.length - 1];

        setUserLastReviews(userLastReview);
        setRecentReviews(recentReviews);
      } catch (error) {
        console.log(error);
      }
    };

    getRecentReviews();
  }, []);


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
    <BooksContext.Provider value={{ recentReviews, userLastReview, popularBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
