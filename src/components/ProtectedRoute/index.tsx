import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useAuth();
  
  if (isAuthenticated) {
    return <>{children}</>; 
  } else {
    return <Navigate to="/" replace />; 
  }
};

export default ProtectedRoute;
