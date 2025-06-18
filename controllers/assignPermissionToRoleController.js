const assignPermissionToRoleService = require("../services/assignPermissionToRoleService");
const { logInfo, logError } = require("../config/logger");

const createAssignPermissionToRole = async (req, res) => {
  try {
    const data = req.body;
    const newAssignment = await assignPermissionToRoleService.createAssignPermissionToRole(data);
    res.status(201).json(newAssignment);
  } catch (error) {
    logError("Controller: Failed to create permission assignment", {
      filePath: __filename,
      methodName: "createAssignPermissionToRole",
      error: error.message,
    });
    res.status(500).json({ error: error.message });
  }
};
const getAllAssignPermissionToRole = async (req, res) => {
  try {
    const assignments = await assignPermissionToRoleService.getAllAssignPermissionToRole();
    res.status(200).json(assignments);
  } catch (error) {
    logError("Controller: Failed to fetch permission assignments", {
      filePath: __filename,
      methodName: "getAllAssignPermissionToRole",
      error: error.message,
    });
    res.status(500).json({ error: error.message });
  }
};
const getAssignPermissionToRoleById = async (req, res) => {
  try {
    const id = req.params.id;
    const assignment = await assignPermissionToRoleService.getAssignPermissionToRoleById(id);
    if (!assignment) {
      return res.status(404).json({ message: "Permission assignment not found" });
    }
    res.status(200).json(assignment);
  } catch (error) {
    logError("Controller: Failed to fetch permission assignment by ID", {
      filePath: __filename,
      methodName: "getAssignPermissionToRoleById",
      error: error.message,
    });
    res.status(500).json({ error: error.message });
  }
};
const updateAssignPermissionToRole = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updated = await assignPermissionToRoleService.updateAssignPermissionToRole(id, data);
    res.status(200).json(updated);
  } catch (error) {
    logError("Controller: Failed to update permission assignment", {
      filePath: __filename,
      methodName: "updateAssignPermissionToRole",
      error: error.message,
    });
    res.status(500).json({ error: error.message });
  }
};
const deleteAssignPermissionToRole = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await assignPermissionToRoleService.deleteAssignPermissionToRole(id);
    res.status(200).json(result);
  } catch (error) {
    logError("Controller: Failed to delete permission assignment", {
      filePath: __filename,
      methodName: "deleteAssignPermissionToRole",
      error: error.message,
    });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAssignPermissionToRole,
  getAllAssignPermissionToRole,
  getAssignPermissionToRoleById,
  updateAssignPermissionToRole,
  deleteAssignPermissionToRole,
};
