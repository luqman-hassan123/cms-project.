const DriverCarHistory = require ("../models/DriverCarHistory")
const Driver = require ('../models/Driver')
const Car = require ('../models/Car')
const { logInfo, logError } = require('../config/logger') 


const createDriverCarHistory = async (historyData) => {
  try {
    logInfo("Creating DriverCarHistory form repo", { filepath:'repositories/driverCarHistoryRepo', methodName: 'createDriverCarHistory' });
    const history = await DriverCarHistory.create(historyData);
    logInfo("DriverCarHistory created successfully", { filepath:'repositories/driverCarHistoryRepo', methodName: 'createDriverCarHistory' });
    return history;
  } catch (error) {
    logError("Error creating DriverCarHistory in repo", { filepath:'repositories/driverCarHistoryRepo', methodName: 'createDriverCarHistory', error: error.message });
    throw new Error("Error creating DriverCarHistory: " + error.message);
  }
};
const getAllDriverCarHistories = async () => {
  try {
    logInfo("getting DriverCarHistory from repo", { filepath:"repositories/driverCarHistoryRepo", methodName: 'getAllDriverCarHistories' });
    const histories = await DriverCarHistory.findAll();
    logInfo("DriverCarHistories retrieved successfully", {  filepath:'repositories/driverCarHistoryRepo', methodName: 'getAllDriverCarHistories', histories });
    return histories;
  } catch (error) {
    logError("Error retrieving DriverCarHistories in repo", {  filepath:'repositories/driverCarHistoryRepo', methodName: 'getAllDriverCarHistories', error: error.message });
    throw new Error("Error retrieving DriverCarHistories: " + error.message);
  }
};
const getDriverCarHistoryById = async (driverCarHistoryId) => {
    try {
      logInfo("Getting DriverCarHistory by ID from repo", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'getDriverCarHistoryById' });
      const history = await DriverCarHistory.findByPk(driverCarHistoryId,
    //      {
    //     include: [
    //       { model: Driver, attributes: ["name", "licenseNumber"] },
    //       { model: Car, attributes: ["model", "year"] },
    //     ],
    //   }
    );
      if (history) {
        logInfo("DriverCarHistory retrieved by ID successfully from repo ", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'getDriverCarHistoryById', history });
        return history;
      } else {
        logError("DriverCarHistory not found", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'getDriverCarHistoryById', driverCarHistoryId });
        throw new Error("DriverCarHistory not found");
      }
    } catch (error) {
      logError("Error retrieving DriverCarHistory by ID", {
        filepath: 'repositories/driverCarHistoryRepo',
        methodName: 'getDriverCarHistoryById',
        driverCarHistoryId,
        error: error.message,
      });
      throw new Error("Error retrieving DriverCarHistory by ID: " + error.message);
    }
  };
  const updateDriverCarHistory = async (driverCarHistoryId, historyData) => {
    try {
      logInfo("Updating DriverCarHistory in repo", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'updateDriverCarHistory' });
      const history = await DriverCarHistory.findByPk(driverCarHistoryId);
      if (history) {
        await history.update(historyData);
        logInfo("DriverCarHistory updated successfully", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'updateDriverCarHistory', history });
        return history;
      } else {
        logError("DriverCarHistory not found in repo", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'updateDriverCarHistory', driverCarHistoryId });
        throw new Error("DriverCarHistory not found");
      }
    } catch (error) {
      logError("Error updating DriverCarHistory in repo", {
        filepath: 'repositories/driverCarHistoryRepo',
        methodName: 'updateDriverCarHistory',
        driverCarHistoryId,
        error: error.message,
      });
      throw new Error("Error updating DriverCarHistory: " + error.message);
    }
  };
  const deleteDriverCarHistory = async (driverCarHistoryId) => {
    try {
      logInfo("Deleting DriverCarHistory from repo", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'deleteDriverCarHistory' });
      const history = await DriverCarHistory.findByPk(driverCarHistoryId);
      if (history) {
        await history.destroy();
        logInfo("DriverCarHistory deleted successfully", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'deleteDriverCarHistory', history });
        return true;
      } else {
        logError("DriverCarHistory not found in repo", { filepath: 'repositories/driverCarHistoryRepo', methodName: 'deleteDriverCarHistory', driverCarHistoryId });
        throw new Error("DriverCarHistory not found");
      }
    } catch (error) {
      logError("Error deleting DriverCarHistory", {
        filepath: 'repositories/driverCarHistoryRepo',
        methodName: 'deleteDriverCarHistory',
        driverCarHistoryId,
        error: error.message,
      });
      throw new Error("Error deleting DriverCarHistory: " + error.message);
    }
  };

module.exports = {
  createDriverCarHistory,
  getAllDriverCarHistories,
  getDriverCarHistoryById,
  updateDriverCarHistory,
  deleteDriverCarHistory,
};