const driverCarHistoryService = require("../services/driverCarHistoryService");
const { logInfo, logError } = require('../config/logger') 

const createDriverCarHistory = async (req, res) => {
  try {
    logInfo("Calling createDriverCarHistory controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'createDriverCarHistory' });
    const history = await driverCarHistoryService.createDriverCarHistory(req.body);
    res.status(201).json(history);
  } catch (error) {
    logError("Error in createDriverCarHistory controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'createDriverCarHistory', error: error.message });
    res.status(500).json({ message: error.message });
  }
};
const getAllDriverCarHistories = async (req, res) => {
  try {
    logInfo("Calling getAllDriverCarHistories controller", { filepath: "driverCarHistoryController", methodName: 'getAllDriverCarHistories' });
    const histories = await driverCarHistoryService.getAllDriverCarHistories(req.query);
    res.status(200).json(histories);
  } catch (error) {
    logError("Error in getAllDriverCarHistories controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'getAllDriverCarHistories', error: error.message });
    res.status(404).json({ message: error.message });
  }
};
const getDriverCarHistoryById = async (req, res) => {
  try {
    logInfo("Calling getDriverCarHistoryById controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'getDriverCarHistoryById' });
    const history = await driverCarHistoryService.getDriverCarHistoryById(req.params.driverCarHistoryId);
    res.status(200).json(history);
  } catch (error) {
    logError("Error in getDriverCarHistoryById controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'getDriverCarHistoryById', error: error.message });
    res.status(500).json({ message: error.message });
  }
};
const updateDriverCarHistory = async (req, res) => {
  try {
    logInfo("Calling updateDriverCarHistory controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'updateDriverCarHistory' });
    const history = await driverCarHistoryService.updateDriverCarHistory(req.params.driverCarHistoryId, req.body);
    res.status(200).json(history);
  } catch (error) {
    logError("Error in updateDriverCarHistory controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'updateDriverCarHistory', error: error.message });
    res.status(500).json({ message: error.message });
  }
};
const deleteDriverCarHistory = async (req, res) => {
  try {
    logInfo("Calling deleteDriverCarHistory controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'deleteDriverCarHistory' });
    await driverCarHistoryService.deleteDriverCarHistory(req.params.driverCarHistoryId);
    res.status(200).json({ message: "DriverCarHistory deleted successfully" });
  } catch (error) {
    logError("Error in deleteDriverCarHistory controller", { filepath: 'controllers/driverCarHistoryController', methodName: 'deleteDriverCarHistory', error: error.message });
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDriverCarHistory,
  getAllDriverCarHistories,
  getDriverCarHistoryById,
  updateDriverCarHistory,
  deleteDriverCarHistory,
};
