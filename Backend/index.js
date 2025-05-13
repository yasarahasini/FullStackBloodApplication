const express = require("express");
const dbConnection = require("./utils/db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to DB and start server
dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
