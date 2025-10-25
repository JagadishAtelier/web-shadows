import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  // mode can be 'default' or 'edit'
  const [mode, setMode] = useState("default");
  const [activeLink, setActiveLink] = useState("overview");

  return (
    <SidebarContext.Provider value={{ mode, setMode, activeLink, setActiveLink }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
