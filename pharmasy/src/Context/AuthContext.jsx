import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(0);

  const [isAuth, setIsAuth] = useState(false);
  const toggle = () => {
    setIsAuth((prev) => !prev);
  };

  useEffect(() => {
    const logIn = localStorage.getItem("logIn");
    if (logIn) {
      setAuthState(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState,
        formData,
        setFormData,
        total,
        setTotal,
        toggle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
