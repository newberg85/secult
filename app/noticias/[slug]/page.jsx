import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function NoticiaPage({ params }) {
  const { slug } = params;

  const q = query(collection(db, "noticias"), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return <div>Notícia não encontrada.</div>;
  }

  const noticia = snapshot.docs[0].data();

  return (
    <div className="max-w-3xl mx-auto py-10">
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
  );
}
