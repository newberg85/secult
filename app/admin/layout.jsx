'use client';
import AdminNav from '../components/AdminNav';
import ProtectedRoute from '../components/ProtectedRoute';

const AdminLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminNav />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
