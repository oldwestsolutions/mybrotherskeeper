import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarInitials: string;
  membershipType: string;
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Protected routes that require authentication
const PROTECTED_ROUTES = ['/dashboard'];

// Public routes that should redirect to dashboard when logged in
const PUBLIC_ROUTES = ['/', '/login', '/signup'];

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  // Check if user is authenticated on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('mbk_user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Handle route protection
  useEffect(() => {
    // Wait until auth check is complete
    const currentPath = router.pathname;
    
    if (isAuthenticated) {
      // If authenticated and trying to access public routes like login
      if (PUBLIC_ROUTES.includes(currentPath) && currentPath !== '/') {
        router.push('/dashboard');
      }
    } else {
      // If not authenticated and trying to access protected routes
      if (PROTECTED_ROUTES.some(route => currentPath.startsWith(route))) {
        router.push('/login');
      }
    }
  }, [isAuthenticated, router.pathname, router]);

  const login = async (email: string, password: string) => {
    // For demo purposes, accept any credentials
    const mockUser: User = {
      id: '1',
      name: 'John Smith',
      email: email,
      role: 'user',
      avatarInitials: 'JS',
      membershipType: 'Premium Member'
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('mbk_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('mbk_user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 