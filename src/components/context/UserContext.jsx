// UserContext.js
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [userName, setUserName] = useState(localStorage.getItem("name") || "");

  const login = (token, name, roles, permissions) => {
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("roles", JSON.stringify(roles));
    localStorage.setItem("permissions", JSON.stringify(permissions));
    setIsAuthenticated(true);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("roles");
    localStorage.removeItem("permissions");
    setIsAuthenticated(false);
    setUserName("");
  };

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
    setUserName(localStorage.getItem("name") || "");
  }, []);

  return (
    <UserContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
