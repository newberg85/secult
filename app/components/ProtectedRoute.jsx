'use client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().role === 'admin') {
          setIsAdmin(true);
        } else {
          router.push('/admin/login');
        }
      } else if (!loading) {
        router.push('/admin/login');
      }
    };

    if (pathname !== '/admin/login') {
        checkAdmin();
    }

  }, [user, loading, router, pathname]);

  if (loading || (!isAdmin && pathname !== '/admin/login')) {
    return <div>Carregando...</div>;
  }
  
  if(pathname === '/admin/login' && user && isAdmin){
    router.push('/admin/dashboard');
    return <div>Redirecionando...</div>;
  }

  return children;
};

export default ProtectedRoute;
