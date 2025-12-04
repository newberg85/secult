"use client";

import { useEffect, useState } from "react";
import { Article } from "./Article";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const q = query(
        collection(db, "noticias"),
        orderBy("publishedAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => {
        const article = doc.data();

        // 🔥 Garantindo que a data é convertida corretamente:
        let publishedAt;

        if (article.publishedAt instanceof Timestamp) {
          publishedAt = article.publishedAt.toDate();
        } else {
          publishedAt = new Date(article.publishedAt);
        }

        return {
          id: doc.id,
          ...article,
          publishedAt,
        };
      });

      setArticles(data);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
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
        
        {/* PRIMEIRA NOTÍCIA (PRINCIPAL) */}
        <div className="flex-1">
          <h2 className="text-[#486284] font-semibold text-xl mb-4 sm:text-lg">
            Últimas Notícias
          </h2>

          {loading || articles.length === 0 ? (
            <div className="h-64 bg-gray-300 rounded-lg animate-pulse w-full"></div>
          ) : (
            <Article
              title={articles[0].titulo}
              description={articles[0].descricao}
              category={articles[0].categoria}
              url={`/noticias/${articles[0].slug}`}
              imageUrl={articles[0].image}
              sourceName={articles[0].sourceName}
              publishedAt={articles[0].publishedAt}
              isMain={true}
            />
          )}
        </div>

        {/* LISTA LATERAL */}
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
                  title={article.titulo}
                  description={article.descricao}
                  category={article.categoria}
                  url={`/noticias/${article.slug}`}
                  imageUrl={article.image}
                  sourceName={article.sourceName}
                  publishedAt={article.publishedAt}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
