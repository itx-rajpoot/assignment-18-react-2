import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ fullName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully');
    navigate('/auth/login');
  };

  return (
    <main>
      <div className="container register-container card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
        <form onSubmit={handleSubmit} className="mt-5 register-form">
          <h2 className="register-heading">Register</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="register-div form-buttons d-flex justify-content-between">
            <button type="submit" className="btn btn-primary register-btn">Register</button>
          </div>
          <p className="have-account">Already Have an Account?  <Link to='/auth/login' className="login-link">Login</Link></p>
        </form>
      </div>
    </main>
  );
};

export default Register;
