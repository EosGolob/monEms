import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from '../src/components/auth/AuthContext';
import { UserProvider } from '../src/components/auth/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <UserProvider>
    <App />
    </UserProvider>
  </AuthProvider>,
  document.getElementById('root')
);
