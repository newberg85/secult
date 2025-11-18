'use client';
import AdminNav from '../components/AdminNav';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const hideNav = pathname === '/admin/login' || pathname === '/admin';

const handleLogout = () => {
  localStorage.removeItem("user");
  router.push("/admin/login");
};

  return (
      <div className="flex flex-col">
        {!hideNav && <AdminNav onLogout={handleLogout} />}
        <main className="flex-1 sm:p-0 bg-gray-50 ">
          {children}
        </main>
      </div>
  );
};

export default AdminLayout;
