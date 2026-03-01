import {createContext, useCallback, useContext, useState} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('accessToken')
  );

  const setAuth = useCallback((token) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated, setAuth, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
