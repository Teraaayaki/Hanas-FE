import React, { createContext, useState } from "react";

export const AddressContext = createContext();

export default ({ children }) => {
  const [address, setAddress] = useState("Cebu City, Cebu");

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
