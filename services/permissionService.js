const permissionRepo = require('../repositories/permissionRepo');
const { logInfo, logError } = require('../config/logger');

const createPermission = async (permissionData) => {
  try {
    logInfo('Service - Creating permission', { filePath: 'services/permissionService', methodName: 'createPermission' });
    return await permissionRepo.createPermission(permissionData);
  } catch (error) {
    logError('Service - Error creating permission', { filePath: 'services/permissionService', methodName: 'createPermission', error: error.message });
    throw error;
  }
};
const getAllPermissions = async () => {
  try {
    logInfo('Service - Fetching all permissions', { filePath: 'services/permissionService', methodName: 'getAllPermissions' });
    return await permissionRepo.getPermissions();
  } catch (error) {
    logError('Service - Error fetching permissions', { filePath: 'services/permissionService', methodName: 'getAllPermissions', error: error.message });
    throw error;
  }
};
const getPermissionById = async (permissionId) => {
  try {
    logInfo('Service - Fetching permission by ID', { filePath: 'services/permissionService', methodName: 'getPermissionById' });
    return await permissionRepo.getPermissionById(permissionId);
  } catch (error) {
    logError('Service - Error fetching permission by ID', { filePath: 'services/permissionService', methodName: 'getPermissionById', error: error.message });
    throw error;
  }
};
const updatePermission = async (permissionId, updateData) => {
  try {
    logInfo('Service - Updating permission', { filePath: 'services/permissionService', methodName: 'updatePermission' });
    return await permissionRepo.updatePermission(permissionId, updateData);
  } catch (error) {
    logError('Service - Error updating permission', { filePath: 'services/permissionService', methodName: 'updatePermission', error: error.message });
    throw error;
  }
};
const deletePermission = async (permissionId) => {
  try {
    logInfo('Service - Deleting permission', { filePath: 'services/permissionService', methodName: 'deletePermission' });
    return await permissionRepo.deletePermission(permissionId);
  } catch (error) {
    logError('Service - Error deleting permission', { filePath: 'services/permissionService', methodName: 'deletePermission', error: error.message });
    throw error;
  }
};

module.exports = {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
};
