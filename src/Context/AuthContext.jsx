import React, { createContext, useState } from "react";
import { GetlocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    return GetlocalStorage();
  });

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;