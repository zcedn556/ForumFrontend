import React, { createContext, useState } from "react";

type AuthContextType = {
  token: string | null;
  username: string | null;
  login: (token: string, username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  username: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("access"));
  const [username, setUsername] = useState<string | null>(localStorage.getItem("username"));

  const login = (newToken: string, newUsername: string) => {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem("access", newToken);
    localStorage.setItem("username", newUsername);
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem("access");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};