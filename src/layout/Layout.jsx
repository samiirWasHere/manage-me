import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { URL } from '@config/Constants';

const NavBar = lazy(() => import('@components/NavBar'));

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  

  return (
    <>
      {![URL.SIGN_IN, URL.SIGN_UP, URL.FORGOT_PASSWORD, URL.RESET_PASSWORD].includes(pathname) && (
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>
      )}
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
