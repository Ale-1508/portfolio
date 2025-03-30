import React, { ReactNode } from 'react';
import classNames from 'classnames'

import Navbar from './navbar/Navbar';
import Footer from './Footer';

import { activePalette } from "@/logic/_core/common/colors";

type LayoutProps = {
  children: ReactNode;
  currentPath?: string;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {

  return (
    <div
      className='flex flex-col gap-8 w-full'
      style={{ background: activePalette.bgGradient }}
    >
      <Navbar />
      <div className={classNames(
        "flex flex-col gap-16 font-sans",
        `${activePalette.bg.selection} selection:text-primary-50`,
        activePalette.text.primary["500"],
        className
      )}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
