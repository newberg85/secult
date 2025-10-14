"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "./Article";

export const LatestNews = () => {
  const [articles, setArticles] = useState([]);

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
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (articles.length === 0) {
    return <p className="text-center p-4">Carregando notícias...</p>;
  }

  const [mainArticle, ...sideArticles] = articles;

  return (
    <div className="flex flex-col md:flex-row gap-6 my-8 mx-4 md:mx-12 lg:mx-40">
      {/* artigo em destaque */}
      <div className="flex-1">
        <h2 className="text-[#486284] font-semibold text-xl mb-4 sm:text-lg">
          Últimas Notícias
        </h2>
        <Article
          title={mainArticle.title}
          author={mainArticle.author}
          description={mainArticle.description}
          url={mainArticle.url}
          urlToImage={mainArticle.urlToImage}
          sourceName={mainArticle.source.name}
          publishedAt={mainArticle.publishedAt}
          isMain={true}
        />
      </div>

      {/* próximos 4 artigos */}
      <div className="flex flex-col gap-4 w-full md:w-[350px] mt-6 md:mt-9">
        {sideArticles.slice(0, 4).map((article, index) => (
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
  );
};
