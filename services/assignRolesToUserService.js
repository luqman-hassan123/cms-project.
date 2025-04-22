const assignRolesToUserRepo = require("../repositories/assignRolesToUserRepo");
const { logInfo, logError } = require("../config/logger");

const createAssignRoleToUser = async (data) => {
  try {
    logInfo("Service: Creating role assignment", {
      filePath: "services/assignRolesToUserService",
      methodName: "createAssignRoleToUser",
    });
    const assignment = await assignRolesToUserRepo.createAssignRoleToUser(data);
    logInfo("Service: Role assignment created", {
      filePath: "services/assignRolesToUserService",
      methodName: "createAssignRoleToUser",
      assignment,
    });
    return assignment;
  } catch (error) {
    logError("Service: Error creating role assignment", {
      filePath: "services/assignRolesToUserService",
      methodName: "createAssignRoleToUser",
      error: error.message,
    });
    throw error;
  }
};
const getAllAssignRolesToUser = async () => {
  try {
    logInfo("Service: Fetching all role assignments", {
      filePath: "services/assignRolesToUserService",
      methodName: "getAllAssignRolesToUser",
    });
    const assignments = await assignRolesToUserRepo.getAllAssignRoleToUser();
    logInfo("Service: Role assignments fetched", {
      filePath: "services/assignRolesToUserService",
      methodName: "getAllAssignRolesToUser",
      count: assignments.length,
    });
    return assignments;
  } catch (error) {
    logError("Service: Error fetching role assignments", {
      filePath: "services/assignRolesToUserService",
      methodName: "getAllAssignRolesToUser",
      error: error.message,
    });
    throw error;
  }
};
const getAssignRoleToUserById = async (assignRolesToUserId) => {
  try {
    logInfo("Service: Fetching role assignment by ID", {
      filePath: "services/assignRolesToUserService",
      methodName: "getAssignRoleToUserById",
      assignRolesToUserId,
    });
    const assignment = await assignRolesToUserRepo.getAssignRoleToUserById(assignRolesToUserId);
    logInfo("Service: Role assignment fetched", {
      filePath: "services/assignRolesToUserService",
      methodName: "getAssignRoleToUserById",
    });
    return assignment;
  } catch (error) {
    logError("Service: Error fetching role assignment by ID", {
      filePath: "services/assignRolesToUserService",
      methodName: "getAssignRoleToUserById",
      error: error.message,
    });
    throw error;
  }
};
const updateAssignRoleToUser = async (assignRolesToUserId, data) => {
  try {
    logInfo("Service: Updating role assignment", {
      filePath: "services/assignRolesToUserService",
      methodName: "updateAssignRoleToUser",
      assignRolesToUserId,
    });
    const updatedAssignment =
      await assignRolesToUserRepo.updateAssignRoleToUser(
        assignRolesToUserId,
        data
      );
    logInfo("Service: Role assignment updated", {
      filePath: "services/assignRolesToUserService",
      methodName: "updateAssignRoleToUser",
      updatedAssignment,
    });
    return updatedAssignment;
  } catch (error) {
    logError("Service: Error updating role assignment", {
      filePath: "services/assignRolesToUserService",
      methodName: "updateAssignRoleToUser",
      error: error.message,
    });
    throw error;
  }
};
const deleteAssignRoleToUser = async (assignRolesToUserId) => {
  try {
    logInfo("Service: Deleting role assignment", {
      filePath: "services/assignRolesToUserService",
      methodName: "deleteAssignRoleToUser",
      assignRolesToUserId,
    });
    const result = await assignRolesToUserRepo.deleteAssignRoleToUser(
      assignRolesToUserId
    );
    logInfo("Service: Role assignment deleted", {
      filePath: "services/assignRolesToUserService",
      methodName: "deleteAssignRoleToUser",
    });
    return result;
  } catch (error) {
    logError("Service: Error deleting role assignment", {
      filePath: "services/assignRolesToUserService",
      methodName: "deleteAssignRoleToUser",
      error: error.message,
    });
    throw error;
  }
};

module.exports = {
  createAssignRoleToUser,
  getAllAssignRolesToUser,
  getAssignRoleToUserById,
  updateAssignRoleToUser,
  deleteAssignRoleToUser,
};
