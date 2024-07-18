import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <main>

      <div className="container login-container card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
        <form onSubmit={handleSubmit} className="mt-5 login-form">
          <h2 className='login-heading'>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              id='email'
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='label-forget'>
            <label htmlFor="password">Enter Password:</label>
            <Link to="/auth/ForgotPassword" className="btn forget-link btn-link mr-2">Forgot Password?</Link>

          </div>
          <div className="form-group">
            <input
              type="password"
              id='password'
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='login-div'>
            <button type="submit" className="btn btn-primary login-btn mr-2">Login</button>
          </div>
          <p className='d-flex have-account '>Don't Have any Account?&nbsp;&nbsp;<Link to='/auth/register' className='signup-link'> SignUp</Link></p>
        </form>
      </div>
    </main>
  );
};

export default Login;
