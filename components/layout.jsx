import React from 'react';
import Meta from './meta';
import Navbar from './navbar.jsx';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className='md:relative min-h-screen bg-white'>
      <Meta />
      <div className=' mb-12 md:mb-20'>
        <Navbar />
      </div>
      <main>{children}</main>
      <div className='w-full mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
