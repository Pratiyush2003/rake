import { useEffect, useState } from "react";

const useAuth = () => {
 
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = localStorage.getItem('user');
    return !!token; 
  });

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
