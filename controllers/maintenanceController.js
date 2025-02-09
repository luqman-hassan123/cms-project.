const maintenanceService = require("../services/maintenanceService");
const { logInfo, logError } = require("../config/logger");

const createMaintenance = async (req, res) => {
  try {
    logInfo("Received request to create maintenance", { filePath: "controllers/maintenanceController", methodName: "createMaintenance" });
    const maintenance = await maintenanceService.createMaintenance(req.body);
    res.status(201).json({ message: "Maintenance created successfully", maintenance });
  } catch (error) {
    logError("Error creating maintenance", { filePath: "controllers/maintenanceController", methodName: "createMaintenance", error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getMaintenances = async (req, res) => {
  try {
    logInfo("Received request to fetch all maintenances", { filePath: "controllers/maintenanceController", methodName: "getMaintenances" });
    const maintenances = await maintenanceService.getAllMaintenances();
    res.status(200).json(maintenances);
  } catch (error) {
    logError("Error fetching maintenances", { filePath: "controllers/maintenanceController", methodName: "getMaintenances", error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getMaintenanceById = async (req, res) => {
  try {
    logInfo("Received request to fetch maintenance by ID", { filePath: "controllers/maintenanceController", methodName: "getMaintenanceById", maintenanceId: req.params.maintenanceId });
    const maintenance = await maintenanceService.getMaintenanceById(req.params.maintenanceId);
    if (!maintenance) {
      logError("Maintenance not found", { filePath: "controllers/maintenanceController", methodName: "getMaintenanceById", maintenanceId: req.params.maintenanceId });
      return res.status(404).json({ message: "Maintenance not found" });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    logError("Error fetching maintenance by ID", { filePath: "controllers/maintenanceController", methodName: "getMaintenanceById", error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const updateMaintenance = async (req, res) => {
  try {
    logInfo("Received request to update maintenance", { filePath: "controllers/maintenanceController", methodName: "updateMaintenance", maintenanceId: req.params.maintenanceId });
    const updatedMaintenance = await maintenanceService.updateMaintenance(req.params.maintenanceId, req.body);
    res.status(200).json({ message: "Maintenance updated successfully", updatedMaintenance });
  } catch (error) {
    logError("Error updating maintenance", { filePath: "controllers/maintenanceController", methodName: "updateMaintenance", error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const deleteMaintenance = async (req, res) => {
  try {
    logInfo("Received request to delete maintenance", { filePath: "controllers/maintenanceController", methodName: "deleteMaintenance", maintenanceId: req.params.maintenanceId });
    await maintenanceService.deleteMaintenance(req.params.maintenanceId);
    res.status(200).json({ message: "Maintenance deleted successfully" });
  } catch (error) {
    logError("Error deleting maintenance", { filePath: "controllers/maintenanceController", methodName: "deleteMaintenance", error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMaintenance,
  getMaintenances,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance,
};
