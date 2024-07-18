import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Todos from '../Todos';

const EditTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoToEdit = todos[id];
    setTodo(todoToEdit);
    setTitle(todoToEdit.title);
    setLocation(todoToEdit.location);
    setDescription(todoToEdit.description);
    setDate(todoToEdit.date);
    setStatus(todoToEdit.status);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos[id] = { ...todo, title, location, description, date, status };
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('todos', Todos)
    alert('Todo updated successfully');
    navigate('/todos');
  };

  const handleCancel = () => {
    alert('Update Canceled');
    navigate('/todos');
  }

  return (
    <div className="container mt-5">
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Todo</button>
        <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
