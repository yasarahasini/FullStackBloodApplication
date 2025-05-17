const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth");
const router = express.Router();


// ✅ LOGIN ROUTE
router.post("/login", loginUser);


// ✅ REGISTER ROUTE
router.post("/register", registerUser);

module.exports = router;
