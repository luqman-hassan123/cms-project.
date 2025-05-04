const AssignPermissionToRole = require("../models/assignPermissionToRole");
const { logInfo, logError } = require("../config/logger");

const createAssignPermissionToRole = async (data) => {
  try {
    logInfo("Creating permission assignment", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "createAssignPermissionToRole",
    });
    const assignment = await AssignPermissionToRole.create(data);
    logInfo("Permission assignment created", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "createAssignPermissionToRole",
      assignment,
    });
    return assignment;
  } catch (error) {
    logError("Error creating permission assignment", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "createAssignPermissionToRole",
      error: error.message,
    });
    throw new Error("Error creating permission assignment: " + error.message);
  }
};
const getAllAssignPermissionToRole = async () => {
  try {
    logInfo("Fetching all permission assignments", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "getAllAssignPermissionToRole",
    });
    const assignments = await AssignPermissionToRole.findAll();
    logInfo("Permission assignments fetched", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "getAllAssignPermissionToRole",
      count: assignments.length,
    });
    return assignments;
  } catch (error) {
    logError("Error fetching permission assignments", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "getAllAssignPermissionToRole",
      error: error.message,
    });
    throw new Error("Error retrieving permission assignments: " + error.message);
  }
};
const getAssignPermissionToRoleById = async (assignPermissionToRoleId) => {
  try {
    logInfo("Fetching permission assignment by ID", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "getAssignPermissionToRoleById",
      assignPermissionToRoleId,
    });
    const assignment = await AssignPermissionToRole.findByPk(assignPermissionToRoleId);
    logInfo("Permission assignment fetched", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "getAssignPermissionToRoleById",
    });
    return assignment;
  } catch (error) {
    logError("Error fetching permission assignment by ID", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "getAssignPermissionToRoleById",
      error: error.message,
    });
    throw new Error("Error retrieving permission assignment by ID: " + error.message);
  }
};
const updateAssignPermissionToRole = async (assignPermissionToRoleId, data) => {
  try {
    logInfo("Updating permission assignment", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "updateAssignPermissionToRole",
      assignPermissionToRoleId,
    });
    const assignment = await AssignPermissionToRole.findByPk(assignPermissionToRoleId);
    if (assignment) {
      await assignment.update(data);
      logInfo("Permission assignment updated", {
        filePath: "repositories/assignPermissionToRoleRepo",
        methodName: "updateAssignPermissionToRole",
        assignment,
      });
      return assignment;
    } else {
      logError("Permission assignment not found", {
        filePath: "repositories/assignPermissionToRoleRepo",
        methodName: "updateAssignPermissionToRole",
        assignPermissionToRoleId,
      });
      throw new Error("Permission assignment not found");
    }
  } catch (error) {
    logError("Error updating permission assignment", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "updateAssignPermissionToRole",
      error: error.message,
    });
    throw new Error("Error updating permission assignment: " + error.message);
  }
};
const deleteAssignPermissionToRole = async (assignPermissionToRoleId) => {
  try {
    logInfo("Deleting permission assignment", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "deleteAssignPermissionToRole",
      assignPermissionToRoleId,
    });
    const assignment = await AssignPermissionToRole.findByPk(assignPermissionToRoleId);
    if (assignment) {
      await assignment.destroy();
      logInfo("Permission assignment deleted", {
        filePath: "repositories/assignPermissionToRoleRepo",
        methodName: "deleteAssignPermissionToRole",
      });
      return { message: "Permission assignment deleted successfully" };
    } else {
      logError("Permission assignment not found", {
        filePath: "repositories/assignPermissionToRoleRepo",
        methodName: "deleteAssignPermissionToRole",
        assignPermissionToRoleId,
      });
      throw new Error("Permission assignment not found");
    }
  } catch (error) {
    logError("Error deleting permission assignment", {
      filePath: "repositories/assignPermissionToRoleRepo",
      methodName: "deleteAssignPermissionToRole",
      error: error.message,
    });
    throw new Error("Error deleting permission assignment: " + error.message);
  }
};

module.exports = {
  createAssignPermissionToRole,
  getAllAssignPermissionToRole,
  getAssignPermissionToRoleById,
  updateAssignPermissionToRole,
  deleteAssignPermissionToRole,
};
