import React from "react";
import { TbClockHour4 } from "react-icons/tb";

export const Article = ({
  author,
  title,
  description,
  url,
  urlToImage,
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
    <div
      className={`relative flex ${className}`}
    >
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="h-[420px] w-[600px] object-cover rounded-lg"
        />
      )}

      {/* Gradiente sobre a imagem */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 "></div>

      {/* Informações */}
      <div className="absolute bottom-5 left-5 z-20 text-white p-3 rounded-md w-4/5">
        <a href={url} target="_blank" rel="noopener noreferrer">
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
    <div
      className={`flex items-center ml-5 border-l-7 border-[#10783B] pl-3 ${className}`}
    >
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="max-w-[200px] max-h-[200px] w-auto h-auto rounded-lg mr-3"
        />
      )}
      <div className="flex flex-col">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-4 mb-1">
            <h3 className="text-sm">{author}</h3>
            <small className="flex items-center gap-1 text-xs">
              <TbClockHour4 /> {formatTime(publishedAt)}
            </small>
          </div>
          <p className="font-bold text-lg leading-snug">{title}</p>
        </a>
        <small className="text-gray-500">{sourceName}</small>
      </div>
    </div>
  );
};
