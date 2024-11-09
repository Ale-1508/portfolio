import React, { ReactNode } from 'react';
import classNames from 'classnames'

import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  currentPath: string;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, currentPath, className } ) => {
  return (
    <div className='flex flex-col gap-8'>
      <Navbar currentPath={currentPath}/>
      <div className={classNames(
        "flex flex-col gap-16 font-sans", 
        "selection:bg-primary-500 selection:text-primary-50",
        className
      )}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
