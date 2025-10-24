"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "./Article";

export const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=brasil&language=pt&pageSize=10&apiKey=d5bbcab384a44b4a9a3c0212c6c692f4`
      );

      const { articles: fetchedArticles } = response.data;

      const sortedArticles = fetchedArticles.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );

      setArticles(sortedArticles);
    } catch (error) {
      console.error("Erro ao buscar noticias:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const skeletonArray = Array.from({ length: 5 });

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="flex flex-col md:flex-row gap-6 my-8 mx-4 w-full max-w-7xl">
        <div className="flex-1">
          <h2 className="text-[#486284] font-semibold text-xl mb-4 sm:text-lg">
            Últimas Notícias
          </h2>

          {loading ? (
            <div className="flex flex-col gap-4">
              {/* artigo principal */}
              <div className="h-64 bg-gray-300 rounded-lg animate-pulse w-full"></div>
            </div>
          ) : (
            <Article
              title={articles[0].title}
              author={articles[0].author}
              description={articles[0].description}
              url={articles[0].url}
              urlToImage={articles[0].urlToImage}
              sourceName={articles[0].source.name}
              publishedAt={articles[0].publishedAt}
              isMain={true}
            />
          )}
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[350px] mt-6 md:mt-9">
          {loading
            ? skeletonArray.slice(1).map((_, idx) => (
                <div
                  key={idx}
                  className="h-20 bg-gray-300 rounded-lg animate-pulse w-full"
                ></div>
              ))
            : articles.slice(1, 5).map((article, index) => (
                <Article
                  key={index}
                  author={article.author}
                  title={article.title}
                  url={article.url}
                  sourceName={article.source.name}
                  publishedAt={article.publishedAt}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
