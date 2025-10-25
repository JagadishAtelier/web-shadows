import { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  // mode can be 'default' or 'edit'
  const [mode, setMode] = useState("default");
  const [activeLink, setActiveLink] = useState("overview");
const [selectedPatientId, setSelectedPatientId] = useState(null);

  return (
    <SidebarContext.Provider value={{ mode, setMode, activeLink, setActiveLink,selectedPatientId, setSelectedPatientId }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
