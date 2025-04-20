const userService = require('../services/userService');
const { logInfo, logError } = require('../config/logger');

const createUser = async (req, res) => {
  try {
    logInfo('Received request to create user', { filePath: 'controllers/userController', methodName: 'createUser' });
    const user = await userService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    logError('Error creating user', { filePath: 'controllers/userController', methodName: 'createUser', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    logInfo('Received request to fetch all users', { filePath: 'controllers/userController', methodName: 'getUsers' });
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    logError('Error fetching users', { filePath: 'controllers/userController', methodName: 'getUsers', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    logInfo('Received request to fetch user by ID', { filePath: 'controllers/userController', methodName: 'getUserById', userId: req.params.userId });
    const user = await userService.getUserById(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    logError('Error fetching user by ID', { filePath: 'controllers/userController', methodName: 'getUserById', error: error.message });
    res.status(404).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    logInfo('Received request to update user', { filePath: 'controllers/userController', methodName: 'updateUser', userId: req.params.userId });
    const user = await userService.updateUser(req.params.userId, req.body);
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    logError('Error updating user', { filePath: 'controllers/userController', methodName: 'updateUser', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    logInfo('Received request to delete user', { filePath: 'controllers/userController', methodName: 'deleteUser', userId: req.params.userId });
    await userService.deleteUser(req.params.userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    logError('Error deleting user', { filePath: 'controllers/userController', methodName: 'deleteUser', error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
console.log("Exported in userController functions:", module.exports);

