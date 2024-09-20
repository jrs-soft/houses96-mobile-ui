// HostingContext.js
import React, { createContext, useState } from 'react';

// Create a context
export const HostingContext = createContext();

// Create a provider component
export const HostingProvider = ({ children }) => {
  const [hostingData, setHostingData] = useState({
    step1Data: null,
    step2Data: null,
    // Add more steps as needed
  });

  return (
    <HostingContext.Provider value={{ hostingData, setHostingData }}>
      {children}
    </HostingContext.Provider>
  );
};
