import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/Components/Header";
import { Article } from "@/Components/Article";

export default async function NoticiaPage({ params }) {
  const { slug } = await params;

  // Função para formatar a data completa
  const formatFullDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // --- Buscar notícia atual ---
  const q = query(collection(db, "noticias"), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return <div>Notícia não encontrada.</div>;

  const noticiaRaw = snapshot.docs[0].data();

  const noticia = {
    ...noticiaRaw,
    publishedAt:
      noticiaRaw.publishedAt?.toDate?.() ?? new Date(noticiaRaw.publishedAt),
  };

  // --- Buscar últimas notícias (exceto a atual) ---
  const ultimasQuery = query(
    collection(db, "noticias"),
    orderBy("publishedAt", "desc"),
    limit(5)
  );

  const ultimasSnap = await getDocs(ultimasQuery);

  const ultimas = ultimasSnap.docs
    .map((doc) => {
      const d = doc.data();
      return {
        ...d,
        publishedAt: d.publishedAt?.toDate?.() ?? new Date(d.publishedAt),
      };
    })
    .filter((news) => news.slug !== slug)
    .slice(0, 3); // garantir 4 notícias

  return (
    <div className="grid-rows-[20px_1fr_20px] items-center min-h-screen font-[Montserrat]">
      <Header />

      <div className="flex w-full px-10 py-4 justify-between">
        {/* Conteúdo principal */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>

          <p className="text-gray-600 text-sm mb-4">
            Publicado em: {formatFullDate(noticia.publishedAt)}
          </p>

          {noticia.image && (
            <img
              src={noticia.image}
              alt={noticia.titulo}
              className="w-full rounded-lg mb-6"
            />
          )}

          <p className="text-lg leading-relaxed">{noticia.descricao}</p>
        </div>

        {/* Sidebar */}
        <aside className="w-1/4 border-l py-8">
          <h1 className="text-xl font-semibold mb-4 ml-4">Últimas notícias</h1>

          <div className="flex flex-col gap-4 w-full md:w-[350px] mt-4">
            {ultimas.map((article, index) => (
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
        </aside>
      </div>
    </div>
  );
}
