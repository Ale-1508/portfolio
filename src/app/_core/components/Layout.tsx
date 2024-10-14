import React, { ReactNode } from 'react';

import Navbar from './Navbar';
import GlobalStateProvider from '../GlobalStateContext';

type LayoutProps = {
  children: ReactNode;
  currentPath: string;
};

const Layout: React.FC<LayoutProps> = ({ children, currentPath } ) => {
  return (
    <>
      <Navbar currentPath={currentPath}/>
      {children}
    </>
  );
};

export default Layout;
