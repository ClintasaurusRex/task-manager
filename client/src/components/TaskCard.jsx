import React from 'react';
import '../components/taskCard.css';

const TaskCard = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-footer">
        <button 
          onClick={() => onToggleComplete(task.id)} 
          className={`status-btn ${task.completed ? 'completed' : 'pending'}`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard; 