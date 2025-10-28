'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SideBar from '@/Components/AdminComponents/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Users } from 'lucide-react';


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
       {/* <header className="bg-white shadow rounded-lg p-6 mb-6 flex justify-between items-center">

        </header>  */}
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Card>
                <CardHeader className="flex flex-col items-center justify-center">
                  <div>
                    <CardTitle className="text-lg sm:text-2xl text-gray-800 select-none">
                        Total de Divulgações
                    </CardTitle>
                  </div>
                  <CardDescription className="sm:text-lg">
                    Total de Divulgações em +30 dias
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className='text-base sm:text-2xl sm:text-center font-bold text-center'>
                     1.249
                  </p>
                </CardContent>

            </Card>


            <Card>
                <CardHeader className="flex flex-col items-center justify-center">
                  <div>
                    <CardTitle className="text-lg sm:text-2xl text-gray-800 select-none">
                        Número de Usuários
                    </CardTitle>
                  </div> 
                  <CardDescription className="sm:text-lg">
                    Total de usuários
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className='text-base sm:text-2xl sm:text-center font-bold text-center'>
                     120
                  </p>
                </CardContent>

            </Card>
                        

            <Card>
                <CardHeader className="flex flex-col items-center justify-center">
                  <div>
                    <CardTitle className="text-lg sm:text-2xl text-gray-800 select-none">
                        Número de Usuários
                    </CardTitle>
                  </div> 
                  <CardDescription className="sm:text-lg">
                    Total de usuários
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className='text-base sm:text-2xl sm:text-center font-bold text-center'>
                     120
                  </p>
                </CardContent>

            </Card>
              

            <Card>
                <CardHeader className="flex flex-col items-center justify-center">
                  <div>
                    <CardTitle className="text-lg sm:text-2xl text-gray-800 select-none">
                        Número de Usuários
                    </CardTitle>
                  </div> 
                  <CardDescription className="sm:text-lg">
                    Total de usuários
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className='text-base sm:text-2xl sm:text-center font-bold text-center'>
                     120
                  </p>
                </CardContent>

            </Card>

          </section>
          
        <SideBar />
      </div>
    
    </div>
  );
}
