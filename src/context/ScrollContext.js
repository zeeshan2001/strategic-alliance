import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const targetRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ targetRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
