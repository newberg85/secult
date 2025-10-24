
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Slide from "@/Components/Slide";
import { LatestNews } from "@/Components/LatestNews";
import Images from "@/Components/Images";
import Videos from "@/Components/Videos";
import Formulario from "@/Components/Formulario";
import Perguntas from "@/Components/Perguntas";
import Localizacao from "@/Components/Localizacao"

export default function Home() {

  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 w-full">
      <Header />
      <Slide />
      <LatestNews />
      <Images />
      <Videos/>
      <Formulario />
      <Perguntas />
      <Localizacao />
      <Footer />
    </div>
  );
}
