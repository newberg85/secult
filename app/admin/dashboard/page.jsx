'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // 🔥 VERIFICA SE ESTÁ LOGADO - SIMPLES E DIRETO
    const isLoggedIn = sessionStorage.getItem('admin_logado');
    const userEmail = sessionStorage.getItem('admin_email');
    const userName = sessionStorage.getItem('admin_nome');

    if (!isLoggedIn) {
      // Se não está logado, manda pra porra do login
      router.push('/admin/login');
      return;
    }

    setUser({
      email: userEmail,
      nome: userName
    });
  }, [router]);

  const handleLogout = () => {
    // 🔥 LIMPA TUDO E MANDA PRO LOGIN
    sessionStorage.removeItem('admin_logado');
    sessionStorage.removeItem('admin_email');
    sessionStorage.removeItem('admin_nome');
    window.location.href = '/admin/login';
  };

  // Se não tem user ainda, mostra loading
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Painel Administrativo
              </h1>
              <p className="text-gray-600">
                Bem-vindo, <strong>{user.nome}</strong>! ({user.email})
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sair
            </button>
          </div>
        </header>

        {/* Conteúdo */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <p className="text-gray-700">Você está logado com sucesso no painel administrativo!</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800">Usuários</h3>
              <p className="text-2xl font-bold text-green-600">0</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800">Posts</h3>
              <p className="text-2xl font-bold text-blue-600">0</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800">Visualizações</h3>
              <p className="text-2xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;