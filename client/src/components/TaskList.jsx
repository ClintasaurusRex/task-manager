import React from 'react';
import TaskCard from './TaskCard';
import './taskCard.css';

const TaskList = ({ tasks, onDelete }) => {
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-container">
      <div className="tasks-section">
        <h2 className="section-title">Pending Tasks</h2>
        <div className="task-grid">
          {pendingTasks.map(task => (
            <TaskCard key={task.id} task={task} onDelete={onDelete} />
          ))}
        </div>
      </div>
      
      <div className="tasks-section">
        <h2 className="section-title">Completed Tasks</h2>
        <div className="task-grid">
          {completedTasks.map(task => (
            <TaskCard key={task.id} task={task} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList; 