const Permission = require("../models/permission");
const { logInfo, logError } = require("../config/logger");

const createPermission = async (permissionData) => {
  try {
    logInfo("Creating permission", { filePath: "repositories/permissionRepo", methodName: "createPermission" });
    const permission = await Permission.create(permissionData);
    logInfo("Permission created successfully", {
      filePath: "repositories/permissionRepo",
      methodName: "createPermission",
      permission,
    });
    return permission;
  } catch (error) {
    logError("Error creating permission", {
      filePath: "repositories/permissionRepo",
      methodName: "createPermission",
      error: error.message,
    });
    throw new Error("Error creating permission: " + error.message);
  }
};
const getPermissions = async () => {
  try {
    logInfo("Fetching all permissions", { filePath: "repositories/permissionRepo", methodName: "getPermissions" });
    const permissions = await Permission.findAll();
    logInfo("Permissions fetched successfully", {
      filePath: "repositories/permissionRepo",
      methodName: "getPermissions",
      count: permissions.length,
    });
    return permissions;
  } catch (error) {
    logError("Error fetching permissions", {
      filePath: "repositories/permissionRepo",
      methodName: "getPermissions",
      error: error.message,
    });
    throw new Error("Error retrieving permissions: " + error.message);
  }
};
const getPermissionById = async (permissionId) => {
  try {
    logInfo("Fetching permission by ID", { filePath: "repositories/permissionRepo", methodName: "getPermissionById" });
    const permission = await Permission.findByPk(permissionId);
    logInfo("Permission fetched successfully", {
      filePath: "repositories/permissionRepo",
      methodName: "getPermissionById",
    });
    return permission;
  } catch (error) {
    logError("Error fetching permission by ID", {
      filePath: "repositories/permissionRepo",
      methodName: "getPermissionById",
      error: error.message,
    });
    throw new Error("Error retrieving permission by ID: " + error.message);
  }
};
const updatePermission = async (permissionId, permissionData) => {
  try {
    logInfo("Updating permission", {
      filePath: "repositories/permissionRepo",
      methodName: "updatePermission",
      permissionId,
    });
    const permission = await Permission.findByPk(permissionId);
    if (permission) {
      await permission.update(permissionData);
      logInfo("Permission updated successfully", {
        filePath: "repositories/permissionRepo",
        methodName: "updatePermission",
        permission,
      });
      return permission;
    } else {
      logError("Permission not found", {
        filePath: "repositories/permissionRepo",
        methodName: "updatePermission",
        permissionId,
      });
      throw new Error("Permission not found");
    }
  } catch (error) {
    logError("Error updating permission", {
      filePath: "repositories/permissionRepo",
      methodName: "updatePermission",
      error: error.message,
    });
    throw new Error("Error updating permission: " + error.message);
  }
};
const deletePermission = async (permissionId) => {
  try {
    logInfo("Deleting permission", { filePath: "repositories/permissionRepo", methodName: "deletePermission" });
    const permission = await Permission.findByPk(permissionId);
    if (permission) {
      await permission.destroy();
      logInfo("Permission deleted successfully", {
        filePath: "repositories/permissionRepo",
        methodName: "deletePermission",
      });
      return { message: "Permission deleted successfully" };
    } else {
      logError("Permission not found", {
        filePath: "repositories/permissionRepo",
        methodName: "deletePermission",
      });
      throw new Error("Permission not found");
    }
  } catch (error) {
    logError("Error deleting permission", {
      filePath: "repositories/permissionRepo",
      methodName: "deletePermission",
      error: error.message,
    });
    throw new Error("Error deleting permission: " + error.message);
  }
};

module.exports = {
  createPermission,
  getPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
};
