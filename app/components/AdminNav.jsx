'use client';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const AdminNav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="relative bg-gray-50 p-4">
      {/* Barra superior com o botão hambúrguer */}
      <div className="flex items-center justify-between text-black px-4 py-3 shadow-md rounded-full">
        <h1 className="text-lg font-semibold"></h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu lateral (aparece em todas as telas) */}
      <aside
        className={`
          fixed top-0 left-0 z-40 w-64 h-[80px] text-white p-4 
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
        `}
      >
        <nav className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-8 text-black">Admin</h2>
          <ul className="flex-1">
            <li className="mb-4">
              <a
                href="/admin/dashboard"
                className="block text-black hover:text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </a>
            </li>
            {/* Adicione outros links aqui */}
          </ul>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full"
          >
            Sair
          </button>
        </nav>
      </aside>

      {/* Fundo escurecido ao abrir o menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-25 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminNav;
