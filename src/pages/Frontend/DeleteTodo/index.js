import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Todos from '../Todos';

const DeleteTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('todos', Todos)
    alert('Todo deleted successfully');
    navigate('/todos');
  };

  return (
    <div className="container mt-5">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Todo</h5>
            <button type="button" className="close" aria-label="Close" onClick={() => navigate('/todos')}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this todo?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/todos')}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTodo;
