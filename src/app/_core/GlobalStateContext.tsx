"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalState {
  [key: string]: any;
}

interface GlobalContextType {
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
}

const defaultState: GlobalState = {};

const GlobalStateContext = createContext<GlobalContextType>({
  state: defaultState,
  setState: () => {},
});

interface GlobalStateProviderProps {
  children: ReactNode;
}

const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalState>(defaultState);

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalContextType => {
  return useContext(GlobalStateContext);
};

export default GlobalStateProvider;
