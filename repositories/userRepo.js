const User = require('../models/User');
const { logInfo, logError } = require('../config/logger');

const createUser = async (userData) => {
  try {
    logInfo('Creating user', { filePath: 'repositories/userRepo', methodName: 'createUser' });
    const user = await User.create(userData);
    logInfo('User created successfully', { filePath: 'repositories/userRepo', methodName: 'createUser', user });
    return user;
  } catch (error) {
    logError('Error creating user', { filePath: 'repositories/userRepo', methodName: 'createUser', error: error.message });
    throw new Error('Error creating user: ' + error.message);
  }
};
const getUsers = async () => {
  try {
    logInfo('Fetching all users', { filePath: 'repositories/userRepo', methodName: 'getUsers' });
    const users = await User.findAll();
    logInfo('Users fetched successfully', { filePath: 'repositories/userRepo', methodName: 'getUsers', count: users.length });
    return users;
  } catch (error) {
    logError('Error fetching users', { filePath: 'repositories/userRepo', methodName: 'getUsers', error: error.message });
    throw new Error('Error retrieving users: ' + error.message);
  }
};
const getUserById = async (userId) => {
  try {
    logInfo('Fetching user by ID', { filePath: 'repositories/userRepo', methodName: 'getUserById' });
    const user = await User.findByPk(userId);
    logInfo('User fetched successfully', { filePath: 'repositories/userRepo', methodName: 'getUserById' });
    return user;
  } catch (error) {
    logError('Error fetching user by ID', { filePath: 'repositories/userRepo', methodName: 'getUserById', error: error.message });
    throw new Error('Error retrieving user by ID: ' + error.message);
  }
};
const updateUser = async (userId, userData) => {
  try {
    logInfo('Updating user', { filePath: 'repositories/userRepo', methodName: 'updateUser', userId });
    const user = await User.findByPk(userId);
    if (user) {
      await user.update(userData);
      logInfo('User updated successfully', { filePath: 'repositories/userRepo', methodName: 'updateUser', user });
      return user;
    } else {
      logError('User not found', { filePath: 'repositories/userRepo', methodName: 'updateUser', userId });
      throw new Error('User not found');
    }
  } catch (error) {
    logError('Error updating user', { filePath: 'repositories/userRepo', methodName: 'updateUser', error: error.message });
    throw new Error('Error updating user: ' + error.message);
  }
};
const deleteUser = async (userId) => {
  try {
    logInfo('Deleting user', { filePath: 'repositories/userRepo', methodName: 'deleteUser' });
    const user = await User.findByPk(userId);
    if (user) {
      await user.destroy();
      logInfo('User deleted successfully', { filePath: 'repositories/userRepo', methodName: 'deleteUser' });
      return { message: 'User deleted successfully' };
    } else {
      logError('User not found', { filePath: 'repositories/userRepo', methodName: 'deleteUser' });
      throw new Error('User not found');
    }
  } catch (error) {
    logError('Error deleting user', { filePath: 'repositories/userRepo', methodName: 'deleteUser', error: error.message });
    throw new Error('Error deleting user: ' + error.message);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
