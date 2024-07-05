
import React from 'react';
import './LoginForm.css';

const SignIn = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1>Sign In</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email" >Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" onClick={() => alert('Sign in successful!')}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
