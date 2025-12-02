import Image from "next/image";
import React from "react";
import { TbClockHour4 } from "react-icons/tb";

export const Article = ({
  author,
  title,
  description,
  url,
  imageUrl,
  sourceName,
  publishedAt,
  isMain = false,
  className,
}) => {
  const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
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
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-sm">{author}</h3>
            <small className="flex items-center gap-1 text-xs">
              <TbClockHour4 /> {formatTime(publishedAt)}
            </small>
          </div>

          <span className="font-bold text-[23px] leading-snug">{title}</span>
        </a>

        {description && <p className="mt-2 text-sm">{description}</p>}
      </div>
    </div>
  ) : (
    <div className={`flex items-center ml-5 border-l-7 border-[#10783B] pl-3 ${className}`}>
      {/* miniatura */}
      {imageUrl && (
        <div className="relative w-24 h-20 rounded-md overflow-hidden mr-3">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="100px"
          />
        </div>
      )}

      <div className="flex flex-col">
        <a href={url}>
          <div className="flex items-center gap-4 mb-1">
            <h3 className="text-sm">{author}</h3>
            <small className="flex items-center gap-1 text-xs">
              <TbClockHour4 /> {formatTime(publishedAt)}
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
