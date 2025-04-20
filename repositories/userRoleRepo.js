const UserRole = require('../models/userRole');
const { logInfo, logError } = require('../config/logger');
const createRole = async (roleData) => {
  try {
    logInfo('Creating role', { filePath: 'repositories/userRoleRepo', methodName: 'createRole' });
    const role = await UserRole.create(roleData);
    logInfo('Role created successfully', { filePath: 'repositories/userRoleRepo', methodName: 'createRole', role });
    return role;
  } catch (error) {
    logError('Error creating role', { filePath: 'repositories/userRoleRepo', methodName: 'createRole', error: error.message });
    throw new Error('Error creating role: ' + error.message);
  }
};
const getRoles = async () => {
  try {
    logInfo('Fetching all roles', { filePath: 'repositories/userRoleRepo', methodName: 'getRoles' });
    const roles = await UserRole.findAll();
    logInfo('Roles fetched successfully', { filePath: 'repositories/userRoleRepo', methodName: 'getRoles', count: roles.length });
    return roles;
  } catch (error) {
    logError('Error fetching roles', { filePath: 'repositories/userRoleRepo', methodName: 'getRoles', error: error.message });
    throw new Error('Error retrieving roles: ' + error.message);
  }
};
const getUserRoleById = async (userRoleId) => {
    try {
      logInfo('Fetching user role by ID', { filePath: 'repositories/userRoleRepo', methodName: 'getUserRoleById', userRoleId });
      const role = await UserRole.findByPk(userRoleId);
      if (!role) {
        logError('User role not found', { filePath: 'repositories/userRoleRepo', methodName: 'getUserRoleById', userRoleId });
        throw new Error('User role not found');
      }
      logInfo('User role fetched successfully', { filePath: 'repositories/userRoleRepo', methodName: 'getUserRoleById', role });
      return role;
    } catch (error) {
      logError('Error fetching user role', { filePath: 'repositories/userRoleRepo', methodName: 'getUserRoleById', error: error.message });
      throw new Error('Error retrieving user role: ' + error.message);
    }
  };
const updateRole = async (userRoleId, roleData) => {
  try {
    logInfo('Updating role', { filePath: 'repositories/userRoleRepo', methodName: 'updateRole', userRoleId });
    const role = await UserRole.findByPk(userRoleId);
    if (role) {
      await role.update(roleData);
      logInfo('Role updated successfully', { filePath: 'repositories/userRoleRepo', methodName: 'updateRole', role });
      return role;
    } else {
      logError('Role not found', { filePath: 'repositories/userRoleRepo', methodName: 'updateRole', userRoleId });
      throw new Error('Role not found');
    }
  } catch (error) {
    logError('Error updating role', { filePath: 'repositories/userRoleRepo', methodName: 'updateRole', error: error.message });
    throw new Error('Error updating role: ' + error.message);
  }
};
const deleteRole = async (userRoleId) => {
  try {
    logInfo('Deleting role', { filePath: 'repositories/userRoleRepo', methodName: 'deleteRole', userRoleId });
    const role = await UserRole.findByPk(userRoleId);
    if (role) {
      await role.destroy();
      logInfo('Role deleted successfully', { filePath: 'repositories/userRoleRepo', methodName: 'deleteRole' });
      return { message: 'Role deleted successfully' };
    } else {
      logError('Role not found', { filePath: 'repositories/userRoleRepo', methodName: 'deleteRole' });
      throw new Error('Role not found');
    }
  } catch (error) {
    logError('Error deleting role', { filePath: 'repositories/userRoleRepo', methodName: 'deleteRole', error: error.message });
    throw new Error('Error deleting role: ' + error.message);
  }
};

module.exports = {
  createRole,
  getRoles,
  getUserRoleById,
  updateRole,
  deleteRole
};

