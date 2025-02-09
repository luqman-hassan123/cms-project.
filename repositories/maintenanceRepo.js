const Maintenance = require("../models/Maintenance");
const { logInfo, logError } = require("../config/logger");

const createMaintenance = async (maintenanceData) => {
  try {
    logInfo("Creating maintenance entry", { filePath: "repositories/maintenanceRepo", methodName: "createMaintenance" });
    const maintenanceEntry = await Maintenance.create(maintenanceData);
    logInfo("Maintenance entry created successfully", { filePath: "repositories/maintenanceRepo", methodName: "createMaintenance", maintenanceEntry });
    return maintenanceEntry;
  } catch (error) {
    logError("Error creating maintenance entry", { filePath: "repositories/maintenanceRepo", methodName: "createMaintenance", error: error.message });
    throw new Error("Error creating maintenance entry: " + error.message);
  }
};
const getAllMaintenance = async () => {
  try {
    logInfo("Fetching all maintenance entries", { filePath: "repositories/maintenanceRepo", methodName: "getAllMaintenance" });
    const maintenanceEntries = await Maintenance.findAll();
    logInfo("Maintenance entries fetched successfully", { filePath: "repositories/maintenanceRepo", methodName: "getAllMaintenance", count: maintenanceEntries.length });
    return maintenanceEntries;
  } catch (error) {
    logError("Error fetching maintenance entries", { filePath: "repositories/maintenanceRepo", methodName: "getAllMaintenance", error: error.message });
    throw new Error("Error retrieving maintenance entries: " + error.message);
  }
};
const getMaintenanceById = async (maintenanceId) => {
  try {
    logInfo("Fetching maintenance entry by ID", { filePath: "repositories/maintenanceRepo", methodName: "getMaintenanceById", maintenanceId });
    const maintenanceEntry = await Maintenance.findByPk(maintenanceId);
    if (!maintenanceEntry) {
      logError("Maintenance entry not found", { filePath: "repositories/maintenanceRepo", methodName: "getMaintenanceById", maintenanceId });
      throw new Error("Maintenance entry not found");
    }
    logInfo("Maintenance entry fetched successfully", { filePath: "repositories/maintenanceRepo", methodName: "getMaintenanceById", maintenanceEntry });
    return maintenanceEntry;
  } catch (error) {
    logError("Error fetching maintenance entry by ID", { filePath: "repositories/maintenanceRepo", methodName: "getMaintenanceById", error: error.message });
    throw new Error("Error retrieving maintenance entry by ID: " + error.message);
  }
};
const updateMaintenance = async (maintenanceId, maintenanceData) => {
  try {
    logInfo("Updating maintenance entry", { filePath: "repositories/maintenanceRepo", methodName: "updateMaintenance", maintenanceId });
    const maintenanceEntry = await Maintenance.findByPk(maintenanceId);
    if (!maintenanceEntry) {
      logError("Maintenance entry not found", { filePath: "repositories/maintenanceRepo", methodName: "updateMaintenance", maintenanceId });
      throw new Error("Maintenance entry not found");
    }
    await maintenanceEntry.update(maintenanceData);
    logInfo("Maintenance entry updated successfully", { filePath: "repositories/maintenanceRepo", methodName: "updateMaintenance", maintenanceEntry });
    return maintenanceEntry;
  } catch (error) {
    logError("Error updating maintenance entry", { filePath: "repositories/maintenanceRepo", methodName: "updateMaintenance", error: error.message });
    throw new Error("Error updating maintenance entry: " + error.message);
  }
};
const deleteMaintenance = async (maintenanceId) => {
  try {
    logInfo("Deleting maintenance entry", { filePath: "repositories/maintenanceRepo", methodName: "deleteMaintenance", maintenanceId });
    const maintenanceEntry = await Maintenance.findByPk(maintenanceId);
    if (!maintenanceEntry) {
      logError("Maintenance entry not found", { filePath: "repositories/maintenanceRepo", methodName: "deleteMaintenance", maintenanceId });
      throw new Error("Maintenance entry not found");
    }
    await maintenanceEntry.destroy();
    logInfo("Maintenance entry deleted successfully", { filePath: "repositories/maintenanceRepo", methodName: "deleteMaintenance", maintenanceId });
    return { message: "Maintenance entry deleted successfully" };
  } catch (error) {
    logError("Error deleting maintenance entry", { filePath: "repositories/maintenanceRepo", methodName: "deleteMaintenance", error: error.message });
    throw new Error("Error deleting maintenance entry: " + error.message);
  }
};

module.exports = {
  createMaintenance,
  getAllMaintenance,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance,
};
