import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modalData, setModalData] = useState("saddasf");

  return (
    <AppContext.Provider value={{ modalData, setModalData }}>
      {children}
    </AppContext.Provider>
  );
};
