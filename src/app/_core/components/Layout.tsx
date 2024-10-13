import React, { ReactNode } from 'react';

import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children } ) => {
  return (
    <div className='bg-gray-500'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
