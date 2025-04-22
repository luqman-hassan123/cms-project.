const AssignRolesToUser = require("../models/assignRolesToUser");
const { logInfo, logError } = require("../config/logger");

const createAssignRoleToUser = async (data) => {
  try {
    logInfo("Creating role assignment", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "createAssignRoleToUser",
    });
    const assignment = await AssignRolesToUser.create(data);
    logInfo("Role assignment created", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "createAssignRoleToUser",
      assignment,
    });
    return assignment;
  } catch (error) {
    logError("Error creating role assignment", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "createAssignRoleToUser",
      error: error.message,
    });
    throw new Error("Error creating role assignment: " + error.message);
  }
};
const getAllAssignRoleToUser = async () => {
  try {
    logInfo("Fetching all role assignments", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "getAllAssignRoleToUser",
    });
    const assignments = await AssignRolesToUser.findAll();
    logInfo("Role assignments fetched", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "getAllAssignRoleToUser",
      count: assignments.length,
    });
    return assignments;
  } catch (error) {
    logError("Error fetching role assignments", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "getAllAssignRoleToUser",
      error: error.message,
    });
    throw new Error("Error retrieving role assignments: " + error.message);
  }
};
const getAssignRoleToUserByassignRolesToUserId = async (assignRolesToUserId) => {
  try {
    logInfo("Fetching role assignment by assignRolesToUserId", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "getAssignRoleToUserByassignRolesToUserId",
      assignRolesToUserId,
    });
    const assignment = await AssignRolesToUser.findByPk(assignRolesToUserId);
    logInfo("Role assignment fetched", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "getAssignRoleToUserByassignRolesToUserId",
    });
    return assignment;
  } catch (error) {
    logError("Error fetching role assignment by assignRolesToUserId", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "getAssignRoleToUserByassignRolesToUserId",
      error: error.message,
    });
    throw new Error("Error retrieving role assignment by assignRolesToUserId: " + error.message);
  }
};
const updateAssignRoleToUser = async (assignRolesToUserId, data) => {
  try {
    logInfo("Updating role assignment", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "updateAssignRoleToUser",
      assignRolesToUserId,
    });
    const assignment = await AssignRolesToUser.findByPk(assignRolesToUserId);
    if (assignment) {
      await assignment.update(data);
      logInfo("Role assignment updated", {
        filePath: "repositories/assignRolesToUserRepo",
        methodName: "updateAssignRoleToUser",
        assignment,
      });
      return assignment;
    } else {
      logError("Role assignment not found", {
        filePath: "repositories/assignRolesToUserRepo",
        methodName: "updateAssignRoleToUser",
        assignRolesToUserId,
      });
      throw new Error("Role assignment not found");
    }
  } catch (error) {
    logError("Error updating role assignment", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "updateAssignRoleToUser",
      error: error.message,
    });
    throw new Error("Error updating role assignment: " + error.message);
  }
};
const deleteAssignRoleToUser = async (assignRolesToUserId) => {
  try {
    logInfo("Deleting role assignment", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "deleteAssignRoleToUser",
      assignRolesToUserId,
    });
    const assignment = await AssignRolesToUser.findByPk(assignRolesToUserId);
    if (assignment) {
      await assignment.destroy();
      logInfo("Role assignment deleted", {
        filePath: "repositories/assignRolesToUserRepo",
        methodName: "deleteAssignRoleToUser",
      });
      return { message: "Role assignment deleted successfully" };
    } else {
      logError("Role assignment not found", {
        filePath: "repositories/assignRolesToUserRepo",
        methodName: "deleteAssignRoleToUser",
        assignRolesToUserId,
      });
      throw new Error("Role assignment not found");
    }
  } catch (error) {
    logError("Error deleting role assignment", {
      filePath: "repositories/assignRolesToUserRepo",
      methodName: "deleteAssignRoleToUser",
      error: error.message,
    });
    throw new Error("Error deleting role assignment: " + error.message);
  }
};

module.exports = {
    createAssignRoleToUser,
    getAllAssignRoleToUser,
    getAssignRoleToUserByassignRolesToUserId,
    updateAssignRoleToUser,
  deleteAssignRoleToUser,
};
