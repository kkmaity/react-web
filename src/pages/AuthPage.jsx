import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem('token', 'dummy-token');
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <button className="btn btn-primary" onClick={login}>Login</button>
    </div>
  );
};

export default AuthPage;
