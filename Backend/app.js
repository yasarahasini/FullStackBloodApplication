const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (You can add your own routes here)
app.get("/", (req, res) => {
  res.send("Blood Donation Management System API");
});

module.exports = app;
