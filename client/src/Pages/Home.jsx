import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import mockTasks from "../data/mockTasks";
import TaskList from "../components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      description: "No description provided",
      completed: false,
      created_at: new Date().toISOString()
    };

    setTasks([newTaskObj, ...tasks]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}  
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;
