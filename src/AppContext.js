import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modalData, setModalData] = useState("saddasf");
const [sectionId, setSectionId] = useState(0);
  return (
    <AppContext.Provider value={{ modalData,sectionId, setSectionId, setModalData }}>
      {children}
    </AppContext.Provider>
  );
};
