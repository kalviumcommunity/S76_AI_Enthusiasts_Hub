import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (token) {
          axios.defaults.headers.common['x-auth-token'] = token;
          const res = await axios.get('/api/auth/user');
          setUser(res.data);
        }
      } catch (err) {
        console.error('Auth error:', err);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-auth-token'];
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['x-auth-token'] = res.data.token;
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  };

  const signup = async (userData) => {
    try {
      const res = await axios.post('/api/auth/signup', userData);
      return res.data;
    } catch (err) {
      throw err.response.data;
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['x-auth-token'];
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    
      {children}
    
  );
};