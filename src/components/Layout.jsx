import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

export const Layout = () => {
  return (
    <div style={{ width: '100%', heigt: '100vh' }}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
