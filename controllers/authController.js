const { registerUser, loginUser } = require("../services/authService");

const AuthController = {
  async register(req, res) {
    try {
      const { userName, userPassword, description } = req.body;
      const user = await registerUser(userName, userPassword, description);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async login(req, res) {
    try {
      const { userName, userPassword } = req.body;
      const { token, user } = await loginUser(userName, userPassword);
      res.json({ message: "Login successful", token, user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = AuthController;
