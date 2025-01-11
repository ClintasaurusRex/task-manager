import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "../Services/taskService";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleAddTask = async () => {
    if (!newTask.trim()) return;
    await addTask({ title: newTask });
    setNewTask("");
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    if (!id) return;
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.id && <button onClick={() => handleDeleteTask(task.id)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
