require("dotenv").config();
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const pool = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

// Test database connection with error details
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully YEEHAW");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
