const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Register
router.post("/register", registerUser);

module.exports = router;
