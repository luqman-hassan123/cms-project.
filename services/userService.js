const { logInfo, logError } = require('../config/logger');
const userRepo = require('../repositories/userRepo');

const createUser = async (userData) => {
  try {
    logInfo('Creating user', { filePath: 'services/userService', methodName: 'createUser' });
    const user = await userRepo.createUser(userData);
    logInfo('User created successfully', { filePath: 'services/userService', methodName: 'createUser', user });
    return user;
  } catch (error) {
    logError('Error creating user', { filePath: 'services/userService', methodName: 'createUser', error: error.message });
    throw new Error('Error creating user: ' + error.message);
  }
};
const getUsers = async () => {
  try {
    logInfo('Fetching all users', { filePath: 'services/userService', methodName: 'getUsers' });
    const users = await userRepo.getUsers();
    logInfo('Users fetched successfully', { filePath: 'services/userService', methodName: 'getUsers', count: users.length });
    return users;
  } catch (error) {
    logError('Error fetching users', { filePath: 'services/userService', methodName: 'getUsers', error: error.message });
    throw new Error('Error retrieving users: ' + error.message);
  }
};
const getUserById = async (userId) => {
  try {
    logInfo('Fetching user by ID', { filePath: 'services/userService', methodName: 'getUserById' });
    const user = await userRepo.getUserById(userId);
    if (user) {
      logInfo('User fetched successfully', { filePath: 'services/userService', methodName: 'getUserById' });
      return user;
    } else {
      logError('User not found', { filePath: 'services/userService', methodName: 'getUserById', userId });
      throw new Error('User not found');
    }
  } catch (error) {
    logError('Error fetching user by ID', { filePath: 'services/userService', methodName: 'getUserById', error: error.message });
    throw new Error('Error retrieving user by ID: ' + error.message);
  }
};
const updateUser = async (userId, userData) => {
  try {
    logInfo('Updating user', { filePath: 'services/userService', methodName: 'updateUser', userId });
    const user = await userRepo.updateUser(userId, userData);
    if (user) {
      logInfo('User updated successfully', { filePath: 'services/userService', methodName: 'updateUser', user });
      return user;
    } else {
      logError('User not found', { filePath: 'services/userService', methodName: 'updateUser', userId });
      throw new Error('User not found');
    }
  } catch (error) {
    logError('Error updating user', { filePath: 'services/userService', methodName: 'updateUser', error: error.message });
    throw new Error('Error updating user: ' + error.message);
  }
};
const deleteUser = async (userId) => {
  try {
    logInfo('Deleting user', { filePath: 'services/userService', methodName: 'deleteUser' });
    const result = await userRepo.deleteUser(userId);
    logInfo('User deleted successfully', { filePath: 'services/userService', methodName: 'deleteUser' });
    return result;
  } catch (error) {
    logError('Error deleting user', { filePath: 'services/userService', methodName: 'deleteUser', error: error.message });
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
