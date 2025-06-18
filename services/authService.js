const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

// Register User
const registerUser = async (userName, userPassword, description) => {
  const existingUser = await User.findOne({ where: { userName } });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const user = await User.create({ userName, userPassword, description });
  return user;
};
// Login User
const loginUser = async (userName, userPassword) => {
  const user = await User.findOne({ where: { userName } });
  if (!user) {
    throw new Error("Invalid username or password");
  }
  const isMatch = await user.comparePassword(userPassword);
  if (!isMatch) {
    throw new Error("Invalid username or password");
  }
  const token = jwt.sign(
    { userId: user.userId, userName: user.userName },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  // Optional: exclude password before returning
  const userData = { ...user.get() };
  delete userData.userPassword;

  return { token, user: userData };
};

module.exports = {
  registerUser,
  loginUser,
};
