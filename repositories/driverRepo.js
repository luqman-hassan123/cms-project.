//const Driver = require("../models/Driver");
const { logInfo, logError } = require("../config/logger");
const Driver  = require("../models/Driver");
const Department = require ('../models/Department')

const createDriver = async (driverData) => {
    try {
        logInfo("Creating a new driver", { filePath: "driverRepo.js", methodName: "createDriver", driverData });
        const driver = await Driver.create(driverData);
        logInfo("Driver created successfully", { filePath: "driverRepo.js", methodName: "createDriver", driver });
        return driver;
    } catch (error) {
        logError("Error creating driver", { filePath: "driverRepo.js", methodName: "createDriver", error: error.message });
        throw new Error("Error creating driver: " + error.message);
    }
};
const getDrivers = async () => {
    try {
        logInfo("Fetching all drivers", { filePath: "driverRepo.js", methodName: "getDrivers" });
        const drivers = await Driver.findAll({
            include: [
             Department
            ],
          });
        logInfo("Fetched all drivers successfully", { filePath: "driverRepo.js", methodName: "getDrivers", count: drivers.length });
        return drivers;
    } catch (error) {
        logError("Error retrieving drivers", { filePath: "driverRepo.js", methodName: "getDrivers", error: error.message });
        throw new Error("Error retrieving drivers: " + error.message);
    }
};
const getDriverById = async (driverId) => {
    try {
        logInfo("Fetching driver by ID", { filePath: "driverRepo.js", methodName: "getDriverById", driverId });
        const driver = await Driver.findByPk(driverId,{
            include: [
             Department
            ],
          });
        logInfo("Fetched driver successfully", { filePath: "driverRepo.js", methodName: "getDriverById", driver });
        return driver;
    } catch (error) {
        logError("Error retrieving driver by ID", { filePath: "driverRepo.js", methodName: "getDriverById", error: error.message });
        throw new Error("Error retrieving driver by ID: " + error.message);
    }
};
const updateDriver = async (driverId, driverData) => {
    try {
        logInfo("Updating driver", { filePath: "driverRepo.js", methodName: "updateDriver", driverId, driverData });
        const driver = await Driver.findByPk(driverId);
        if (driver) {
            await driver.update(driverData);
            logInfo("Driver updated successfully", { filePath: "driverRepo.js", methodName: "updateDriver", driver });
            return driver;
        } else {
            throw new Error("Driver not found");
        }
    } catch (error) {
        logError("Error updating driver", { filePath: "driverRepo.js", methodName: "updateDriver", error: error.message });
        throw new Error("Error updating driver: " + error.message);
    }
};
const deleteDriver = async (driverId) => {
    try {
        logInfo("Deleting driver", { filePath: "driverRepo.js", methodName: "deleteDriver", driverId });
        const driver = await Driver.findByPk(driverId);
        if (driver) {
            await driver.destroy();
            logInfo("Driver deleted successfully", { filePath: "driverRepo.js", methodName: "deleteDriver", driverId });
            return { message: "Driver deleted successfully" };
        } else {
            throw new Error("Driver not found");
        }
    } catch (error) {
        logError("Error deleting driver", { filePath: "driverRepo.js", methodName: "deleteDriver", error: error.message });
        throw new Error("Error deleting driver: " + error.message);
    }
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
};
