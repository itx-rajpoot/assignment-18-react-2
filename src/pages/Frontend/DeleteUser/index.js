import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User deleted successfully');
    navigate('/users');
  };

  return (
    <div className="container mt-5">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete User</h5>
            <button type="button" className="close" aria-label="Close" onClick={() => navigate('/users')}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this user?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/users')}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
