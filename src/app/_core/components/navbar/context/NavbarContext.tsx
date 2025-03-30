"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface NavbarOption {
  content: string;
  href: string;
  isSelected: boolean;
}

interface Position {
  top: number;
  left: number;
  height: number;
  width: number;
}

interface NavbarState {
  navbarOptions: NavbarOption[];
  position: Position;
}

interface NavbarContextType {
  navbarState: NavbarState;
  setNavbarState: React.Dispatch<React.SetStateAction<NavbarState>>;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [navbarState, setNavbarState] = useState<NavbarState>({
    navbarOptions: [
      { content: "Work", href: "/", isSelected: false },
      { content: "About", href: "/about", isSelected: false },
      { content: "Showcase", href: "/showcase", isSelected: false },
      { content: "Contact", href: "/contact", isSelected: false },
    ],
    position: {
      top: 0,
      left: 0,
      height: 0,
      width: 0,
    },
  });

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};