'use client';
import AdminNav from '../components/AdminNav';


const AdminLayout = ({ children }) => {
  return (
      <div className="flex flex-col">
        <AdminNav />
        <main className="flex-1 sm:p-0 bg-gray-50 ">
          {children}
        </main>
      </div>
  );
};

export default AdminLayout;
