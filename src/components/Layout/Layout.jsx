import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};