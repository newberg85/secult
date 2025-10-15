import Sidebar from "@/Components/AdminComponents/Sidebar";
import { FaUser } from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                <h3 className="font-medium">Painel do Administrador</h3>
                <FaUser className="font-3xl"/>
            </div>
            {children}
        </div>
      </div>
    </>
  );
}
