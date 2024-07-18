import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);



  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">{user.fullName}</h5>
                <p className="card-text">Email: {user.email}</p>
                <Link to={`/deleteUser/${index}`} className="btn btn-danger mr-2">Delete</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
