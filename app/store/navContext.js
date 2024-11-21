"use client";
import { createContext, useRef } from "react";

export const NavContext = createContext(null);

export const NavProvider = ({ children }) => {
  const navRef = useRef();
  return <NavContext.Provider value={navRef}>{children}</NavContext.Provider>;
};
