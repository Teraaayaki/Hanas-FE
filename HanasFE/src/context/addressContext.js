import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getUserAddress } from "@utils/getUserAddress";

export const AddressContext = createContext();

export default ({ children }) => {
  const [address, setAddress] = useState(null);
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    const userAddress = getUserAddress(user.address);
    setAddress(userAddress);
  }, [user]);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
