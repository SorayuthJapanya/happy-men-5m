const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;


    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "Username already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashPassword,
    });

    const data = await newUser.save();

    res.status(200).json({ data, message: "Register successfully" });
  } catch (error) {
    console.log("Error in register controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, userId: user._id, username: user.username });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getMe = (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
};
