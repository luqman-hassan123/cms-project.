const AuthService = require("../services/authService");

const AuthController = {
  // User Registration
  async register(req, res) {
    try {
      const { userName, userPassword, description } = req.body;
      const user = await AuthService.register(userName, userPassword, description);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // User Login
  async login(req, res) {
    try {
      const { userName, userPassword } = req.body;
      const { token, user } = await AuthService.login(userName, userPassword);
      res.json({ message: "Login successful", token, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = AuthController;
