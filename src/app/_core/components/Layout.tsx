import React, { ReactNode } from 'react';

import Navbar from './Navbar';
import GlobalStateProvider from '../GlobalStateContext';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children } ) => {
  return (
    <GlobalStateProvider>
      <div>
        <Navbar />
        {children}
      </div>
    </GlobalStateProvider>
  );
};

export default Layout;
