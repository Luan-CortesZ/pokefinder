import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import type { JSX } from '@emotion/react/jsx-runtime';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};