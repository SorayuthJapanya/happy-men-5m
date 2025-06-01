const express = require("express");
const router = express.Router();

const { register, login, getMe } = require("../controllers/userController");

const { protectAuth } = require("../middleware/authMiddleware");

router.get("/me", protectAuth, getMe);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
