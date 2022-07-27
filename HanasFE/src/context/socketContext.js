import React, { createContext, useRef } from "react";
import io from "socket.io-client";

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const socket = useRef();

  socket.current = io(`${process.env.LOCALHOST}/api/socket`);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
