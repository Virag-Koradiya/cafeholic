import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

import ProfilePage from './ProfilePage';
import { useAuth } from '../../hooks';

/**
 * LoginPage component for user authentication
 * Redesigned with cafe theme aesthetics
 */
const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState(false);
  const auth = useAuth();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await auth.login(formData);
    if (response.success) {
      toast.success(response.message);
      setRedirect(true);
    } else {
      toast.error(response.message);
    }
  };

  const handleGoogleLogin = async (credential) => {
    const response = await auth.googleLogin(credential);
    if (response.success) {
      toast.success(response.message);
      setRedirect(true);
    } else {
      toast.error(response.message);
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  if (auth.user) {
    return <ProfilePage />;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to continue your café journey</p>
        </div>
        
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleFormData}
                className="w-full rounded-lg border-border bg-input"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <a href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleFormData}
                className="w-full rounded-lg border-border bg-input"
              />
            </div>
            
            <button className="primary w-full py-3">Sign In</button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-border"></div>
            <span className="px-4 text-sm text-muted-foreground">or continue with</span>
            <div className="flex-grow h-px bg-border"></div>
          </div>

          {/* Google login button */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleGoogleLogin(credentialResponse.credential);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              text="continue_with"
              width="100%"
              shape="pill"
            />
          </div>
        </div>
        
        <div className="text-center mt-6 text-muted-foreground">
          Don't have an account yet?{' '}
          <Link className="text-primary font-medium hover:underline" to={'/register'}>
            Create an account
          </Link>
        </div>
        
        {/* Decorative coffee elements */}
        <div className="hidden md:block absolute bottom-10 left-10 text-primary/10 transform rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </svg>
        </div>
        <div className="hidden md:block absolute top-20 right-10 text-primary/10 transform -rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
