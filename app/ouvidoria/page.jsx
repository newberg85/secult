import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Ouvidoria from "@/Components/Ouvidoria";
 

export default function Home() {

  return (
    <div className=" grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 font[Montserrat]">
      <Header />
      <Ouvidoria />
      <Footer />
    </div>
  );
}
