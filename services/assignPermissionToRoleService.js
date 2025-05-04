const assignPermissionToRoleRepo = require("../repositories/assignPermissionToRoleRepo");
const { logInfo, logError } = require("../config/logger");

const createAssignPermissionToRole = async (data) => {
  try {
    logInfo("Service: Creating permission assignment", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "createAssignPermissionToRole",
    });
    return await assignPermissionToRoleRepo.createAssignPermissionToRole(data);
  } catch (error) {
    logError("Service: Error creating permission assignment", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "createAssignPermissionToRole",
      error: error.message,
    });
    throw error;
  }
};
const getAllAssignPermissionToRole = async () => {
  try {
    logInfo("Service: Fetching all permission assignments", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "getAllAssignPermissionToRole",
    });
    return await assignPermissionToRoleRepo.getAllAssignPermissionToRole();
  } catch (error) {
    logError("Service: Error fetching all permission assignments", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "getAllAssignPermissionToRoleService",
      error: error.message,
    });
    throw error;
  }
};
const getAssignPermissionToRoleById = async (id) => {
  try {
    logInfo("Service: Fetching permission assignment by ID", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "getAssignPermissionToRoleById",
      id,
    });
    return await assignPermissionToRoleRepo.getAssignPermissionToRoleById(id);
  } catch (error) {
    logError("Service: Error fetching permission assignment by ID", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "getAssignPermissionToRoleById",
      error: error.message,
    });
    throw error;
  }
};
const updateAssignPermissionToRole = async (id, data) => {
  try {
    logInfo("Service: Updating permission assignment", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "updateAssignPermissionToRole",
      id,
    });
    return await assignPermissionToRoleRepo.updateAssignPermissionToRole(id, data);
  } catch (error) {
    logError("Service: Error updating permission assignment", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "updateAssignPermissionToRole",
      error: error.message,
    });
    throw error;
  }
};
const deleteAssignPermissionToRole = async (id) => {
  try {
    logInfo("Service: Deleting permission assignment", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "deleteAssignPermissionToRole",
      id,
    });
    return await assignPermissionToRoleRepo.deleteAssignPermissionToRole(id);
  } catch (error) {
    logError("Service: Error deleting permission assignment", {
      filePath: "services/assignPermissionToRoleService",
      methodName: "deleteAssignPermissionToRole",
      error: error.message,
    });
    throw error;
  }
};

module.exports = {
  createAssignPermissionToRole,
  getAllAssignPermissionToRole,
  getAssignPermissionToRoleById,
  updateAssignPermissionToRole,
  deleteAssignPermissionToRole,
};
