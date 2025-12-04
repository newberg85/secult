import Image from "next/image";
import React from "react";
import { TbClockHour4 } from "react-icons/tb";

export const Article = ({
  title,
  description,
  category,
  url,
  imageUrl,
  sourceName,
  publishedAt,
  isMain = false,
  className,
}) => {
  const formatFullDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

  return isMain ? (
    <div className={`relative flex ${className}`}>
      {/* imagem principal */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="h-[420px] w-full object-cover rounded-lg"
        />
      )}

      {/* Gradiente */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

      {/* Conteúdo */}
      <div className="absolute bottom-5 left-5 z-20 text-white p-3 rounded-md w-4/5">
        <a href={url}>
          <div className="flex items-center justce mb-2">
            <small className="flex items-center gap-1 text-xs">
              <span className="text-xl font-bold">{category}</span>
              <TbClockHour4 /> {formatFullDate(publishedAt)}
            </small>
          </div>

          <span className="font-bold text-[23px] leading-snug">{title}</span>
        </a>

        {/* {description && <p className="mt-2 text-sm">{description}</p>} */}
      </div>
    </div>
  ) : (
    <div
      className={`flex items-center ml-5 border-l-7 border-[#10783B] pl-3 ${className}`}
    >

      <div className="flex flex-col">
        <a href={url}>
          <div className="flex items-center mb-1">
            <small className="flex items-center gap-1 text-xs">
              <span className="font-semibold text-green-800">{category}</span>
              <TbClockHour4 /> {formatFullDate(publishedAt)}
            </small>
          </div>

          <p className="font-bold text-lg leading-snug">{title}</p>
          {/* <p className="text-sm leading-snug">{description}</p> */}
        </a>

        <small className="text-gray-500">{sourceName}</small>
      </div>
    </div>
  );
};
