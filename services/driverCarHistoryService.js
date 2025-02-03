const driverCarHistoryRepo = require("../repositories/driverCarHistoryRepo");
const { logInfo, logError } = require('../config/logger') 

const createDriverCarHistory = async (historyData) => {
  try {
    logInfo("Calling createDriverCarHistory service", { filepath: 'services/driverCarHistoryService', methodName: 'createDriverCarHistory' });
    return await driverCarHistoryRepo.createDriverCarHistory(historyData);
  } catch (error) {
    logError("Error in createDriverCarHistory service", { filepath: 'services/driverCarHistoryService', methodName: 'createDriverCarHistory', error: error.message });
    throw error;
  }
};
const getAllDriverCarHistories = async () => {
  try {
    logInfo("Calling getAllDriverCarHistories service", { filepath: 'services/driverCarHistoryService', methodName: 'getAllDriverCarHistories' });
    return await driverCarHistoryRepo.getAllDriverCarHistories();
  } catch (error) {
    logError("Error in getAllDriverCarHistories service", { filepath: 'services/driverCarHistoryService', methodName: 'getAllDriverCarHistories', error: error.message });
    throw error;
  }
};
const getDriverCarHistoryById = async (driverCarHistoryId) => {
  try {
    logInfo("Calling getDriverCarHistoryById service", { filepath: 'services/driverCarHistoryService', methodName: 'getDriverCarHistoryById' });
    return await driverCarHistoryRepo.getDriverCarHistoryById(driverCarHistoryId);
  } catch (error) {
    logError("Error in getDriverCarHistoryById service", { filepath: 'services/driverCarHistoryService', methodName: 'getDriverCarHistoryById', error: error.message });
    throw error;
  }
};
const updateDriverCarHistory = async (driverCarHistoryId, historyData) => {
  try {
    logInfo("Calling updateDriverCarHistory service", { filepath: 'services/driverCarHistoryService', methodName: 'updateDriverCarHistory' });
    return await driverCarHistoryRepo.updateDriverCarHistory(driverCarHistoryId, historyData);
  } catch (error) {
    logError("Error in updateDriverCarHistory service", { filepath: 'services/driverCarHistoryService', methodName: 'updateDriverCarHistory', error: error.message });
    throw error;
  }
};
const deleteDriverCarHistory = async (driverCarHistoryId) => {
  try {
    logInfo("Calling deleteDriverCarHistory service", { filepath: 'services/driverCarHistoryService', methodName: 'deleteDriverCarHistory' });
    return await driverCarHistoryRepo.deleteDriverCarHistory(driverCarHistoryId);
  } catch (error) {
    logError("Error in deleteDriverCarHistory service", { filepath: 'services/driverCarHistoryService', methodName: 'deleteDriverCarHistory', error: error.message });
    throw error;
  }
};

module.exports = {
  createDriverCarHistory,
  getAllDriverCarHistories,
  getDriverCarHistoryById,
  updateDriverCarHistory,
  deleteDriverCarHistory,
};
