const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth")
const donorRoute = require("./routes/donor");
const prospectRoute = require("./routes/prospect");
const Prospect = require("./models/Prospect");
module.exports = app;
// Middleware 
app.use(cors());
app.use(express.json());

// Routes (You can add your own routes here)
app.get("/", (req, res) => {
  res.send("Blood Donation Management System API");
});

//ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/donors", donorRoute);
app.use("/api/v1/prospect", prospectRoute);

