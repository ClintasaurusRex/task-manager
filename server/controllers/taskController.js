// controllers/taskController.js
const pool = require("../config/database");

// Get all tasks
const getTasks = async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
  res.json(result.rows);
};

// Add task
const addTask = async (req, res) => {
  const { title, description } = req.body;
  const result = await pool.query(
    "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  res.json(result.rows[0]);
};

// Update task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const result = await pool.query(
    "UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
    [title, description, completed, id]
  );
  res.json(result.rows[0]);
};

// Delete task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  res.json({ message: "Task deleted" });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
