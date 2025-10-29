'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SideBar from '@/Components/AdminComponents/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Users } from 'lucide-react';
import Image from "next/image";

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
    <div className="relative min-h-screen font-[Montserrat] bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700 overflow-hidden">
      {/* Fundo com efeito de vidro */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10"></div>

      <div className="relative max-w-[90%] mx-auto py-6">
        {/* Header com vidro */}
        <header className="bg-white/20 backdrop-blur-xl shadow-lg rounded-2xl p-6 mb-6 border border-white/30 flex justify-between items-center">
          <h1 className="font-semibold text-xl text-gray-800 drop-shadow-md">
            Bem-vindo ao Dashboard
          </h1>
          <div className="flex justify-center">
            <Image
              src="/secult.png"
              width={150}
              height={80}
              alt="Logo Positiva"
              className="drop-shadow-lg"
            />
          </div>
        </header>

        {/* Seção de Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[ 
            { titulo: 'Total de Divulgações', descricao: 'Total de divulgações em +30 dias', valor: '1.249' },
            { titulo: 'Número de Usuários', descricao: 'Total de usuários', valor: '120' },
            { titulo: 'Eventos Ativos', descricao: 'Em andamento neste mês', valor: '36' },
            { titulo: 'Parcerias', descricao: 'Instituições envolvidas', valor: '18' }
          ].map((item, i) => (
            <Card
              key={i}
              className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-[1.03]"
            >
              <CardHeader className="flex flex-col items-center justify-center text-center">
                <CardTitle className="text-lg sm:text-2xl text-gray-800 select-none">
                  {item.titulo}
                </CardTitle>
                <CardDescription className="sm:text-lg text-gray-700">
                  {item.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold text-center text-gray-900 drop-shadow">
                  {item.valor}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <SideBar />
      </div>
    </div>
  );
}
