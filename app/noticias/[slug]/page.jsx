import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/Components/Header";

export default async function NoticiaPage({ params }) {
  const { slug } = params;

  const q = query(collection(db, "noticias"), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return <div>Notícia não encontrada.</div>;
  }
  const noticia = snapshot.docs[0].data();

  return (
    <div className="grid-rows-[20px_1fr_20px] items-center min-h-screen font-[Montserrat]">
      <Header />
      <div className="flex w-full px-10 py-4 justify-between">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>

          <p className="text-gray-600 text-sm mb-4">
            Publicado em:{" "}
            {new Date(noticia.publishedAt).toLocaleDateString("pt-BR")}
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

        <aside className="w-1/4 pl-8 border-l">
          <h1>Ultimas noticias</h1>
        </aside>
      </div>
    </div>
  );
}
