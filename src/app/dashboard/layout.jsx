import React from 'react';
import Header from '@/app/ui/components/header/Header';
import Footer from '@/app/ui/components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
