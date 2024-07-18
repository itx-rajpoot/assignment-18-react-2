import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex !== -1) {
      if (newPassword === confirmNewPassword) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password reset successfully');
        navigate('/auth/login');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('User not found');
    }
  };

  const handleCancel = () => {
    navigate('/auth/login');
  };

  return (
    <main>
      <div className="forgot-password-container container mt-5 card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <h2 className="forgot-password-heading mb-4">Reset Password</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmNewPassword"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password-div">
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary forgot-password-btn">Reset Password</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
