'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SideBar from '@/Components/AdminComponents/Sidebar';



export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      router.push('/admin/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.tipo !== 'admin') {
        router.push('/admin/login');
        return;
      }
      setUser(parsedUser);
    } catch (err) {
      console.error('Erro ao ler user:', err);
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/admin/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center font-[Montserrat]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50">
      <div className="max-w-[90%] mx-auto">
        <header className="bg-white shadow rounded-lg p-6 mb-6 flex justify-between items-center">

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Sair
          </button>
        </header>

        <SideBar />
      </div>
    
    </div>
  );
}
