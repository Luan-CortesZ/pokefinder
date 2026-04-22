import { createContext, useContext, useState, useEffect, type FC, type ReactNode } from 'react';

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('poke_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (userData: any) => {
    setUser(userData);
    localStorage.setItem('poke_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('poke_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
  return context;
};