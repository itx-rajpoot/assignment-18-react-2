import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Todos from '../Todos';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      location,
      description,
      date,
      status,
      dateCreated: new Date().toLocaleDateString(),
    };
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    localStorage.setItem('todos', JSON.stringify([...storedTodos, newTodo]));
    console.log('todos', Todos)
    navigate('/todos');
  };
  const handleCancel = () => {
    alert('Adding Canceled');
    navigate('/todos');
  }
  return (
    <div className="container mt-5">
      <h2>Add Todo</h2>
      <form onSubmit={handleAddTodo}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input type="text" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
        <button type='button' onClick={handleCancel} className='btn btn-secondary'>Cancel AddTodo</button>
      </form>
    </div>
  );
};

export default AddTodo;
