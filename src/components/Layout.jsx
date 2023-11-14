import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { ImBook } from 'react-icons/im';

export const Layout = () => {
  return (
    <>
      <ImBook size={610} style={{ marginLeft: '30%', marginTop: '20px' }} />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
