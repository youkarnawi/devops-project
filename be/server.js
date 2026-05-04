const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Example API route
app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from backend",
    time: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
