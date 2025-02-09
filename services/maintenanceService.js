const maintenanceRepo = require("../repositories/maintenanceRepo");
const { logInfo, logError } = require("../config/logger");

const createMaintenance = async (maintenanceData) => {
  try {
    logInfo("Service: Creating maintenance entry", { filePath: "services/maintenanceService", methodName: "createMaintenance" });
    const maintenanceEntry = await maintenanceRepo.createMaintenance(maintenanceData);
    logInfo("Service: Maintenance entry created successfully", { filePath: "services/maintenanceService", methodName: "createMaintenance", maintenanceEntry });
    return maintenanceEntry;
  } catch (error) {
    logError("Service: Error creating maintenance entry", { filePath: "services/maintenanceService", methodName: "createMaintenance", error: error.message });
    throw new Error("Error creating maintenance entry: " + error.message);
  }
};
const getAllMaintenances = async () => {
  try {
    logInfo("Service: Fetching all maintenance entries", { filePath: "services/maintenanceService", methodName: "getAllMaintenances" });
    const maintenances = await maintenanceRepo.getAllMaintenance();
    logInfo("Service: Maintenance entries fetched successfully", { filePath: "services/maintenanceService", methodName: "getAllMaintenances", count: maintenances.length });
    return maintenances;
  } catch (error) {
    logError("Service: Error fetching maintenance entries", { filePath: "services/maintenanceService", methodName: "getAllMaintenances", error: error.message });
    throw new Error("Error retrieving maintenance entries: " + error.message);
  }
};
const getMaintenanceById = async (maintenanceId) => {
  try {
    logInfo("Service: Fetching maintenance entry by ID", { filePath: "services/maintenanceService", methodName: "getMaintenanceById" });
    const maintenanceEntry = await maintenanceRepo.getMaintenanceById(maintenanceId);
    if (!maintenanceEntry) {
      logError("Service: Maintenance entry not found", { filePath: "services/maintenanceService", methodName: "getMaintenanceById", maintenanceId });
      throw new Error("Maintenance entry not found");
    }
    logInfo("Service: Maintenance entry fetched successfully", { filePath: "services/maintenanceService", methodName: "getMaintenanceById", maintenanceEntry });
    return maintenanceEntry;
  } catch (error) {
    logError("Service: Error fetching maintenance entry by ID", { filePath: "services/maintenanceService", methodName: "getMaintenanceById", error: error.message });
    throw new Error("Error retrieving maintenance entry by ID: " + error.message);
  }
};
const updateMaintenance = async (maintenanceId, maintenanceData) => {
  try {
    logInfo("Service: Updating maintenance entry", { filePath: "services/maintenanceService", methodName: "updateMaintenance", maintenanceId });
    const updatedMaintenance = await maintenanceRepo.updateMaintenance(maintenanceId, maintenanceData);
    logInfo("Service: Maintenance entry updated successfully", { filePath: "services/maintenanceService", methodName: "updateMaintenance", updatedMaintenance });
    return updatedMaintenance;
  } catch (error) {
    logError("Service: Error updating maintenance entry", { filePath: "services/maintenanceService", methodName: "updateMaintenance", error: error.message });
    throw new Error("Error updating maintenance entry: " + error.message);
  }
};
const deleteMaintenance = async (maintenanceId) => {
  try {
    logInfo("Service: Deleting maintenance entry", { filePath: "services/maintenanceService", methodName: "deleteMaintenance", maintenanceId });
    await maintenanceRepo.deleteMaintenance(maintenanceId);
    logInfo("Service: Maintenance entry deleted successfully", { filePath: "services/maintenanceService", methodName: "deleteMaintenance", maintenanceId });
    return { message: "Maintenance entry deleted successfully" };
  } catch (error) {
    logError("Service: Error deleting maintenance entry", { filePath: "services/maintenanceService", methodName: "deleteMaintenance", error: error.message });
    throw new Error("Error deleting maintenance entry: " + error.message);
  }
};

module.exports = {
  createMaintenance,
  getAllMaintenances,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance,
};
