const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// ✅ Import your auth routes
const authRoutes = require("./routes/auth");

// ✅ Use the auth routes
app.use("/api/auth", authRoutes); // <--- THIS LINE IS MISSING

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to DB and start server
dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log("🌟 Database Connected Successfully");
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
