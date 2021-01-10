import React, { createContext, useReducer } from "react";

const defaultGlobalState = {
  isMenuOpen: false,
  animationPlays: false,
  currentSection: "home",
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(defaultGlobalState);
