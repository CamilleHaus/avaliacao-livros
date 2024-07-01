import Image from "next/image";
import StarRating from "./StarRating";
import { useState } from "react";

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

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  return (
    <div>
      <div className="flex w-[100%] max-w-[650px] gap-10 rounded-md bg-first p-6">
        <div className="relative h-36 w-[20%]">
          <Image
            src="/assets/Book.png"
            alt="Image of book"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between gap-4 pb-4">
            <p>Hà dois dias</p>
            <StarRating size={24} rating={3} />
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div>
              <p>Título do Livro</p>
              <p className="text-sm">Autor</p>
            </div>
            <div>
              <p>{isExpanded ? description : truncateText(description, 100)}</p>
              <button onClick={toggleExpanded} className="text-blue-500">
                {isExpanded ? "Ver Menos" : "Ver Mais"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastRead;
