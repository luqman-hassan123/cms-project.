const { logInfo, logError } = require('../config/logger');
const userRoleRepo = require('../repositories/userRoleRepo');

const createRole = async (roleData) => {
  try {
    logInfo('Creating role', { filePath: 'services/userRoleService', methodName: 'createRole' });
    const role = await userRoleRepo.createRole(roleData);
    logInfo('Role created successfully', { filePath: 'services/userRoleService', methodName: 'createRole', role });
    return role;
  } catch (error) {
    logError('Error creating role', { filePath: 'services/userRoleService', methodName: 'createRole', error: error.message });
    throw new Error('Error creating role: ' + error.message);
  }
};
const getRoles = async () => {
  try {
    logInfo('Fetching all roles', { filePath: 'services/userRoleService', methodName: 'getRoles' });
    const roles = await userRoleRepo.getRoles();
    logInfo('Roles fetched successfully', { filePath: 'services/userRoleService', methodName: 'getRoles', count: roles.length });
    return roles;
  } catch (error) {
    logError('Error fetching roles', { filePath: 'services/userRoleService', methodName: 'getRoles', error: error.message });
    throw new Error('Error retrieving roles: ' + error.message);
  }
};
const getRoleById = async (userRoleId) => {
  try {
    logInfo('Fetching role by ID', { filePath: 'services/userRoleService', methodName: 'getRoleById' });
    const role = await userRoleRepo.getRoleById(userRoleId);
    if (role) {
      logInfo('Role fetched successfully', { filePath: 'services/userRoleService', methodName: 'getRoleById' });
      return role;
    } else {
      logError('Role not found', { filePath: 'services/userRoleService', methodName: 'getRoleById', userRoleId });
      throw new Error('Role not found');
    }
  } catch (error) {
    logError('Error fetching role by ID', { filePath: 'services/userRoleService', methodName: 'getRoleById', error: error.message });
    throw new Error('Error retrieving role by ID: ' + error.message);
  }
};
const updateRole = async (userRoleId, roleData) => {
  try {
    logInfo('Updating role', { filePath: 'services/userRoleService', methodName: 'updateRole', userRoleId });
    const role = await userRoleRepo.updateRole(userRoleId, roleData);
    if (role) {
      logInfo('Role updated successfully', { filePath: 'services/userRoleService', methodName: 'updateRole', role });
      return role;
    } else {
      logError('Role not found', { filePath: 'services/userRoleService', methodName: 'updateRole', userRoleId });
      throw new Error('Role not found');
    }
  } catch (error) {
    logError('Error updating role', { filePath: 'services/userRoleService', methodName: 'updateRole', error: error.message });
    throw new Error('Error updating role: ' + error.message);
  }
};
const deleteRole = async (userRoleId) => {
  try {
    logInfo('Deleting role', { filePath: 'services/userRoleService', methodName: 'deleteRole' });
    const result = await userRoleRepo.deleteRole(userRoleId);
    logInfo('Role deleted successfully', { filePath: 'services/userRoleService', methodName: 'deleteRole' });
    return result;
  } catch (error) {
    logError('Error deleting role', { filePath: 'services/userRoleService', methodName: 'deleteRole', error: error.message });
    throw new Error('Error deleting role: ' + error.message);
  }
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
};

