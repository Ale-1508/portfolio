import React, { ReactNode } from 'react';

import Navbar from './Navbar';
import GlobalStateProvider from '../GlobalStateContext';

type LayoutProps = {
  children: ReactNode;
  currentPath: string;
};

const Layout: React.FC<LayoutProps> = ({ children, currentPath } ) => {
  return (
    <div className="flex flex-col gap-16 selection:bg-primary-500 selection:text-primary-50">
      <Navbar currentPath={currentPath}/>
      {children}
    </div>
  );
};

export default Layout;
