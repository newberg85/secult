import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Slide from "@/Components/Slide";


export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16">
      <Header />
      <Slide />
      <Footer />
    </div>
  );
}
