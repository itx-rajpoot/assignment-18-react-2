import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from localStorage or API
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    setTodoCount(todos.length);
    setUserCount(users.length);
  }, []);

  const handleAddTodo = () => {
    navigate('/AddTodo');
  };

  const handleViewUsers = () => {
    navigate('/users');
  };

  return (
    <div className="container mt-5">
      <h2>Home</h2>
      <div className="row">
        <div className="col-md-6 todos-area">
          <div className="card text-white bg-primary mb-3" onClick={() => navigate('/todos')}>
            <div className="card-body">
              <h5 className="card-title">Todos</h5>
              <p className="card-text">{todoCount} Todos</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-white bg-success mb-3" onClick={handleViewUsers}>
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">{userCount} Users</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Buttons</h5>
              <button onClick={handleAddTodo} className="btn btn-success">Add Todo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
