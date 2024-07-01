import { Star } from "lucide-react";
import React from "react";

const StarRating = ({ rating, size }: { rating: number, size: number }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
  
    return (
        <div className="flex">
          {Array(fullStars)
            .fill(null)
            .map((_, index) => (
              <Star key={index} strokeWidth={0.5} className="text-stars fill-current" size={size} />
            ))}
          {halfStars === 1 && (
            <Star
              className="text-stars"
              strokeWidth={0.5}
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}
              size={size}
            />
          )}
          {Array(emptyStars)
            .fill(null)
            .map((_, index) => (
              <Star key={index + fullStars + halfStars} strokeWidth={0.5} className="text-stars" size={size} />
            ))}
        </div>
      );
        };
        
  
  export default StarRating;
