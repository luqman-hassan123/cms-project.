const Fuel = require("../models/Fuel");
const { logInfo, logError } = require("../config/logger");
const Car = require("../models/Car");

const createFuel = async (fuelData) => {
  try {
    logInfo("Creating fuel entry", { filePath: "repositories/fuelRepo", methodName: "createFuelEntry" });
    const fuelEntry = await Fuel.create(fuelData);
    logInfo("Fuel entry created successfully", { filePath: "repositories/fuelRepo", methodName: "createFuelEntry", fuelEntry });
    return fuelEntry;
  } catch (error) {
    logError("Error creating fuel entry", { filePath: "repositories/fuelRepo", methodName: "createFuelEntry", error: error.message });
    throw new Error("Error creating fuel entry: " + error.message);
  }
};
const getAllFuel = async () => {
  try {
    logInfo("Fetching all fuel entries", { filePath: "repositories/fuelRepo", methodName: "getAllFuelEntries" });
    const fuelEntries = await Fuel.findAll({
      include: [Car],
    });
    logInfo("Fuel entries fetched successfully", { filePath: "repositories/fuelRepo", methodName: "getAllFuelEntries", count: fuelEntries.length });
    return fuelEntries;
  } catch (error) {
    logError("Error fetching fuel entries", { filePath: "repositories/fuelRepo", methodName: "getAllFuelEntries", error: error.message });
    throw new Error("Error retrieving fuel entries: " + error.message);
  }
};
const getFuelById = async (fuelId) => {
  try {
    logInfo("Fetching fuel entry by ID", { filePath: "repositories/fuelRepo", methodName: "getFuelEntryById" });
    const fuelEntry = await Fuel.findByPk(fuelId, {
      include: [Car],
    });
    if (!fuelEntry) {
      logError("Fuel entry not found", { filePath: "repositories/fuelRepo", methodName: "getFuelEntryById", fuelId });
      throw new Error("Fuel entry not found");
    }
    logInfo("Fuel entry fetched successfully", { filePath: "repositories/fuelRepo", methodName: "getFuelEntryById", fuelEntry });
    return fuelEntry;
  } catch (error) {
    logError("Error fetching fuel entry by ID", { filePath: "repositories/fuelRepo", methodName: "getFuelEntryById", error: error.message });
    throw new Error("Error retrieving fuel entry by ID: " + error.message);
  }
};
const updateFuel = async (fuelId, fuelData) => {
  try {
    logInfo("Updating fuel entry", { filePath: "repositories/fuelRepo", methodName: "updateFuelEntry", fuelId });
    const fuelEntry = await Fuel.findByPk(fuelId);
    if (!fuelEntry) {
      logError("Fuel entry not found", { filePath: "repositories/fuelRepo", methodName: "updateFuelEntry", fuelId });
      throw new Error("Fuel entry not found");
    }
    await fuelEntry.update(fuelData);
    logInfo("Fuel entry updated successfully", { filePath: "repositories/fuelRepo", methodName: "updateFuelEntry", fuelEntry });
    return fuelEntry;
  } catch (error) {
    logError("Error updating fuel entry", { filePath: "repositories/fuelRepo", methodName: "updateFuelEntry", error: error.message });
    throw new Error("Error updating fuel entry: " + error.message);
  }
};
const deleteFuel = async (fuelId) => {
  try {
    logInfo("Deleting fuel entry", { filePath: "repositories/fuelRepo", methodName: "deleteFuelEntry" });
    const fuelEntry = await Fuel.findByPk(fuelId);
    if (!fuelEntry) {
      logError("Fuel entry not found", { filePath: "repositories/fuelRepo", methodName: "deleteFuelEntry", fuelId });
      throw new Error("Fuel entry not found");
    }
    await fuelEntry.destroy();
    logInfo("Fuel entry deleted successfully", { filePath: "repositories/fuelRepo", methodName: "deleteFuelEntry", fuelId });
    return { message: "Fuel entry deleted successfully" };
  } catch (error) {
    logError("Error deleting fuel entry", { filePath: "repositories/fuelRepo", methodName: "deleteFuelEntry", error: error.message });
    throw new Error("Error deleting fuel entry: " + error.message);
  }
};

module.exports = {
  createFuel,
  getAllFuel,
  getFuelById,
  updateFuel,
  deleteFuel,
};
