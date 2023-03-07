import React, { useEffect } from "react";
import { useContext } from "react";
import { Children } from "react";
import { useState, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userProfile, SetUserProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/wndapi/employee/")
      .then((response) => response.json())
      .then((data) => SetUserProfile(data));
    setIsLoading(false);
  }, []);

  const login = (user, password) => {
    userProfile.forEach((profile) => {
      if (user == profile.username && password == profile.password) {
        setUser(user);
      }
    });

    if (user !== "admin") {
      setUserError(true);
    } else {
      setUserError(false);
    }

    if (password !== "password") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, userError, passwordError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
