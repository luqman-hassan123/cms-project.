const permissionService = require('../services/permissionService');
const { logInfo, logError } = require('../config/logger');

const createPermission = async (req, res) => {
  try {
    logInfo('Controller - Creating permission', { filePath: 'controllers/permissionController', methodName: 'createPermission' });
    const newPermission = await permissionService.createPermission(req.body);
    res.status(201).json({ message: 'Permission created successfully', data: newPermission });
  } catch (error) {
    logError('Controller - Error creating permission', { filePath: 'controllers/permissionController', methodName: 'createPermission', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getAllPermissions = async (req, res) => {
  try {
    logInfo('Controller - Getting all permissions', { filePath: 'controllers/permissionController', methodName: 'getAllPermissions' });
    const permissions = await permissionService.getAllPermissions();
    res.status(200).json({ data: permissions });
  } catch (error) {
    logError('Controller - Error getting permissions', { filePath: 'controllers/permissionController', methodName: 'getAllPermissions', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getPermissionById = async (req, res) => {
  try {
    const { id } = req.params;
    logInfo('Controller - Getting permission by ID', { filePath: 'controllers/permissionController', methodName: 'getPermissionById', id });
    const permission = await permissionService.getPermissionById(id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }
    res.status(200).json({ data: permission });
  } catch (error) {
    logError('Controller - Error getting permission by ID', { filePath: 'controllers/permissionController', methodName: 'getPermissionById', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const updatePermission = async (req, res) => {
  try {
    const { id } = req.params;
    logInfo('Controller - Updating permission', { filePath: 'controllers/permissionController', methodName: 'updatePermission', id });
    const updated = await permissionService.updatePermission(id, req.body);
    res.status(200).json({ message: 'Permission updated successfully', data: updated });
  } catch (error) {
    logError('Controller - Error updating permission', { filePath: 'controllers/permissionController', methodName: 'updatePermission', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const deletePermission = async (req, res) => {
  try {
    const { id } = req.params;
    logInfo('Controller - Deleting permission', { filePath: 'controllers/permissionController', methodName: 'deletePermission', id });
    const result = await permissionService.deletePermission(id);
    res.status(200).json(result);
  } catch (error) {
    logError('Controller - Error deleting permission', { filePath: 'controllers/permissionController', methodName: 'deletePermission', error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
};
