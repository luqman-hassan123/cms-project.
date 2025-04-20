const userRoleService = require('../services/userRoleService');
const { logInfo, logError } = require('../config/logger');

const createRole = async (req, res) => {
  try {
    logInfo('Received request to create role', { filePath: 'controllers/userRoleController', methodName: 'createRole' });
    const role = await userRoleService.createRole(req.body);
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (error) {
    logError('Error creating role', { filePath: 'controllers/userRoleController', methodName: 'createRole', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getRoles = async (req, res) => {
  try {
    logInfo('Received request to fetch all roles', { filePath: 'controllers/userRoleController', methodName: 'getRoles' });
    const roles = await userRoleService.getRoles();
    res.status(200).json(roles);
  } catch (error) {
    logError('Error fetching roles', { filePath: 'controllers/userRoleController', methodName: 'getRoles', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getRoleById = async (req, res) => {
    try {
      logInfo('Received request to fetch role by ID', { filePath: 'controllers/userRoleController', methodName: 'getRoleById', userRoleId: req.params.userRoleId });
      const role = await userRoleService.getRoleById(req.params.userRoleId);
      if (!role) {
        return res.status(404).json({ message: 'Role not found' });
      }
      res.status(200).json(role);
    } catch (error) {
      logError('Error fetching role by ID', { filePath: 'controllers/userRoleController', methodName: 'getRoleById', error: error.message });
      res.status(500).json({ error: error.message });
    }
  };
const updateRole = async (req, res) => {
  try {
    logInfo('Received request to update role', { filePath: 'controllers/userRoleController', methodName: 'updateRole', userRoleId: req.params.userRoleId });
    const role = await userRoleService.updateRole(req.params.userRoleId, req.body);
    res.status(200).json({ message: 'Role updated successfully', role });
  } catch (error) {
    logError('Error updating role', { filePath: 'controllers/userRoleController', methodName: 'updateRole', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const deleteRole = async (req, res) => {
  try {
    logInfo('Received request to delete role', { filePath: 'controllers/userRoleController', methodName: 'deleteRole', userRoleId: req.params.userRoleId });
    await userRoleService.deleteRole(req.params.userRoleId);
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    logError('Error deleting role', { filePath: 'controllers/userRoleController', methodName: 'deleteRole', error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
};

