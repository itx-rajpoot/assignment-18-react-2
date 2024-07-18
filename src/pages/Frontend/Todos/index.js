import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Todos</h2>
      <button className="btn btn-primary mb-3" onClick={() => navigate('/AddTodo')}>Add Todo</button>
      <button className="btn btn-primary mb-3" onClick={() => navigate('/')}>Go Home</button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.title}</td>
              <td>{todo.location}</td>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>{todo.status}</td>
              <td>{todo.dateCreated}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => navigate(`/EditTodo/${index}`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => navigate(`/DeleteTodo/${index}`)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
