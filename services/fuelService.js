const fuelRepo = require("../repositories/fuelRepo");
const { logInfo, logError } = require("../config/logger");

const createFuel = async (fuelData) => {
  try {
    logInfo("Service: Creating fuel entry", { filePath: "services/fuelService", methodName: "createFuelEntry" });
    return await fuelRepo.createFuel(fuelData);
  } catch (error) {
    logError("Service: Error creating fuel entry", { filePath: "services/fuelService", methodName: "createFuelEntry", error: error.message });
    throw error;
  }
};
const getFuels = async () => {
  try {
    logInfo("Service: Fetching all fuel entries", { filePath: "services/fuelService", methodName: "getAllFuelEntries" });
    return await fuelRepo.getAllFuel();
  } catch (error) {
    logError("Service: Error fetching fuel entries", { filePath: "services/fuelService", methodName: "getAllFuelEntries", error: error.message });
    throw error;
  }
};
const getFuelById = async (fuelId) => {
  try {
    logInfo("Service: Fetching fuel entry by ID", { filePath: "services/fuelService", methodName: "getFuelEntryById", fuelId });
    return await fuelRepo.getFuelById(fuelId);
  } catch (error) {
    logError("Service: Error fetching fuel entry by ID", { filePath: "services/fuelService", methodName: "getFuelEntryById", error: error.message });
    throw error;
  }
};
const updateFuel = async (fuelId, fuelData) => {
  try {
    logInfo("Service: Updating fuel entry", { filePath: "services/fuelService", methodName: "updateFuelEntry", fuelId });
    return await fuelRepo.updateFuel(fuelId, fuelData);
  } catch (error) {
    logError("Service: Error updating fuel entry", { filePath: "services/fuelService", methodName: "updateFuelEntry", error: error.message });
    throw error;
  }
};
const deleteFuel = async (fuelId) => {
  try {
    logInfo("Service: Deleting fuel entry", { filePath: "services/fuelService", methodName: "deleteFuelEntry", fuelId });
    return await fuelRepo.deleteFuel(fuelId);
  } catch (error) {
    logError("Service: Error deleting fuel entry", { filePath: "services/fuelService", methodName: "deleteFuelEntry", error: error.message });
    throw error;
  }
};

module.exports = {
  createFuel,
  getFuels,
  getFuelById,
  updateFuel,
  deleteFuel,
};
