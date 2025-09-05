import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Slide from "@/Components/Slide";
import { LatestNews } from "@/Components/LatestNews";
import Images from "@/Components/Images";


export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16">
      <Header />
      <Slide />
      <LatestNews />
      <Images />
      <Footer />
    </div>
  );
}
