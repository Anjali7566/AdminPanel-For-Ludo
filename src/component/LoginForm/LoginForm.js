/*import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'anjukushwaha9131@gmail.com' && password === 'admin123') {
      // Redirect to dashboard (pure JavaScript method)
      window.location.href = '/dashboard';
      
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <div className="form-box">
          <h2 className="title">Admin Panel</h2>
          <p className="subtitle">only for authorised users</p>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
      <div className="image-section">
        <img src="../../asset/Ludo.jpg" alt="Ludo Game" />
      </div>
    </div>
  );
};

export default LoginForm;*/

//alag model bana padega for admin registration and login ke liye
//then alag se data store krna padega only admins ka
