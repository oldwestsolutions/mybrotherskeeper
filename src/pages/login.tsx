import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginHeader } from '../components/LoginHeader/LoginHeader';
import { useAuth } from '../contexts/AuthContext';
import styles from './login.module.css';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect to dashboard if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      // Auth context will handle the redirect
    } catch (err) {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <LoginHeader />
      
      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h1>Sign In</h1>
            <div className={styles.loginDesc}>
              Welcome back. Access your account, orders, and fitness tracking data.
            </div>
            
            {error && <div className={styles.errorMessage}>{error}</div>}
            
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.forgotPassword}>
                <a href="#">Forgot Password?</a>
              </div>
              
              <button 
                type="submit" 
                className={styles.loginButton}
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <div className={styles.divider}>
              <span>OR</span>
            </div>
            
            <div className={styles.socialLogin}>
              <button className={styles.socialButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4"/>
                  <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50242 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853"/>
                  <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05"/>
                  <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
                </svg>
                Continue with Google
              </button>
              
              <button className={styles.socialButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#1877F2"/>
                  <path d="M13.8926 12.8906L14.3359 10H11.5625V8.125C11.5625 7.3334 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3084 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C9.47287 20.0405 10.5271 20.0405 11.5625 19.8785V12.8906H13.8926Z" fill="white"/>
                </svg>
                Continue with Facebook
              </button>
            </div>
            
            <div className={styles.signupPrompt}>
              Don't have an account? <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage; 