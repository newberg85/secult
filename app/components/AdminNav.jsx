'use client';
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const AdminNav = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <a href="/admin/dashboard" className="hover:text-gray-300">
              Dashboard
            </a>
          </li>
          {/* Adicione outros links aqui */}
        </ul>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Sair
        </button>
      </nav>
    </aside>
  );
};

export default AdminNav;
