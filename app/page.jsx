import Header from "@/Components/Header";
import Slide from "@/Components/Slide";


export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center min-h-screen pb-20 gap-16">
      <Header />
      <Slide />
    </div>
  );
}
