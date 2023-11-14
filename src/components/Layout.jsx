import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { FaMobile } from 'react-icons/fa';

export const Layout = () => {
  return (
    <>
      <FaMobile size={610} style={{ marginLeft: '380px', marginTop: '20px' }} />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
