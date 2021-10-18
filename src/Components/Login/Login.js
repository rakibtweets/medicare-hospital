import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { signWithGoogle } = useAuth();
  return (
    <div className="login-container">
      <h4>Please logIn</h4>
      <button onClick={signWithGoogle} className="btn btn-primary">
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
