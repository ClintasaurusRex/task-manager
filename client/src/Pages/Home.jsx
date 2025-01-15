import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import mockTasks from "../data/mockTasks";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      description: newDescription.trim() || "No description provided",
      completed: false,
      created_at: new Date().toISOString()
    };

    setTasks([newTaskObj, ...tasks]);
    setNewTask("");
    setNewDescription("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div className="input-container">
        <div className="input-fields">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task Title"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTask();
              }
            }}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Task Description"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTask();
              }
            }}
          />
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;
