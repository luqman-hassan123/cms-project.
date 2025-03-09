const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

class AuthService {
  // Register User
  static async register(userName, userPassword, description) {
    try {
      const existingUser = await User.findOne({ where: { userName } });
      if (existingUser) {
        throw new Error("User already exists");
      }

      const user = await User.create({ userName, userPassword, description });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Login User
  static async login(userName, userPassword) {
    try {
      const user = await User.findOne({ where: { userName } });
      if (!user) {
        throw new Error("Invalid username or password");
      }

      const isMatch = await user.comparePassword(userPassword);
      if (!isMatch) {
        throw new Error("Invalid username or password");
      }

      // Generate JWT Token
      const token = jwt.sign(
        { userId: user.userId, userName: user.userName },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return { token, user };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = AuthService;
