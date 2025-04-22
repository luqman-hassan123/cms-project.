const assignRolesToUserService = require("../services/assignRolesToUserService");
const { logInfo, logError } = require("../config/logger");

const createAssignRoleToUser = async (req, res) => {
  try {
    logInfo("Controller: Creating role assignment", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "createAssignRoleToUser",
    });
    const assignment = await assignRolesToUserService.createAssignRoleToUser(
      req.body
    );
    res.status(201).json({
      message: "Role assigned successfully",
      data: assignment,
    });
  } catch (error) {
    logError("Controller: Error creating role assignment", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "createAssignRoleToUser",
      error: error.message,
    });
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllAssignRolesToUser = async (req, res) => {
  try {
    logInfo("Controller: Fetching all role assignments", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "getAllAssignRolesToUser",
    });
    const assignments =
      await assignRolesToUserService.getAllAssignRolesToUser();
    res.status(200).json(assignments);
  } catch (error) {
    logError("Controller: Error fetching all role assignments", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "getAllAssignRolesToUser",
      error: error.message,
    });
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAssignRoleToUserById = async (req, res) => {
  try {
    const { assignRolesToUserId } = req.params;
    logInfo("Controller: Fetching role assignment by ID", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "getAssignRoleToUserById",
      assignRolesToUserId,
    });
    const assignment = await assignRolesToUserService.getAssignRoleToUserById(
      id
    );
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json(assignment);
  } catch (error) {
    logError("Controller: Error fetching role assignment by ID", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "getAssignRoleToUserById",
      error: error.message,
    });
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const updateAssignRoleToUser = async (req, res) => {
  try {
    const { assignRolesToUserId } = req.params;
    logInfo("Controller: Updating role assignment", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "updateAssignRoleToUser",
      assignRolesToUserId,
    });
    const updatedAssignment =
      await assignRolesToUserService.updateAssignRoleToUser(
        assignRolesToUserId,
        req.body
      );
    res.status(200).json({
      message: "Assignment updated successfully",
      data: updatedAssignment,
    });
  } catch (error) {
    logError("Controller: Error updating role assignment", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "updateAssignRoleToUser",
      error: error.message,
    });
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const deleteAssignRoleToUser = async (req, res) => {
  try {
    const { assignRolesToUserId } = req.params;
    logInfo("Controller: Deleting role assignment", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "deleteAssignRoleToUser",
      assignRolesToUserId,
    });
    await assignRolesToUserService.deleteAssignRoleToUser(id);
    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    logError("Controller: Error deleting role assignment", {
      filePath: "controllers/assignRolesToUserController",
      methodName: "deleteAssignRoleToUser",
      error: error.message,
    });
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createAssignRoleToUser,
  getAllAssignRolesToUser,
  getAssignRoleToUserById,
  updateAssignRoleToUser,
  deleteAssignRoleToUser,
};
