import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex((user) => user.email === loggedInUser.email);

    if (userIndex !== -1 && loggedInUser.password === oldPassword) {
      if (newPassword === confirmNewPassword) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        loggedInUser.password = newPassword;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        alert('Password changed successfully');
        navigate('/');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Old password is incorrect');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <main>
      <div className="card change-password-container border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
        <form onSubmit={handleSubmit} className="change-password-form">
          <h2 className="change-password-heading mb-4">Change Password</h2>
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password</label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
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

          <div className="change-password-div form-buttons d-flex justify-content-between">
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary change-password-btn">Change Password</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ChangePassword;
