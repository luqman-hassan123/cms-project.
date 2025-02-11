const carEmployeeHistoryRepo = require("../repositories/carEmployeeHistoryRepo");
const { logInfo, logError } = require("../config/logger");

const createHistory = async (req, res) => {
  try {
    const historyData = req.body;
    logInfo("Creating CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "createHistory", body: historyData });
    const history = await carEmployeeHistoryRepo.createHistory(historyData);
    logInfo("CarEmployeeHistory created successfully", { filePath: 'controllers/carEmployeeHistoryController', methodName: "createHistory", history });
    return res.status(201).json({
      message: "CarEmployeeHistory created successfully",
      data: history,
    });
  } catch (error) {
    logError("Error creating CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "createHistory", error: error.message });
    return res.status(500).json({
      message: "Error creating CarEmployeeHistory",
      error: error.message,
    });
  }
};
const getAllHistories = async (req, res) => {
  try {
    logInfo("Fetching all CarEmployeeHistory records", { filePath: 'controllers/carEmployeeHistoryController', methodName: "getAllHistories" });
    const filters = req.query;
    const histories = await carEmployeeHistoryRepo.getAllHistories(filters);
    logInfo("CarEmployeeHistory records fetched successfully", { filePath: 'controllers/carEmployeeHistoryController', methodName: "getAllHistories", filters });
    return res.status(200).json({
      message: "CarEmployeeHistory records fetched successfully",
      data: histories,
    });
  } catch (error) {
    logError("Error fetching CarEmployeeHistory records", { filePath: 'controllers/carEmployeeHistoryController', methodName: "getAllHistories", error: error.message });
    return res.status(500).json({
      message: "Error fetching CarEmployeeHistory records",
      error: error.message,
    });
  }
};
const getHistoryById = async (req, res) => {
  try {
    const { carEmployeeHistoryId } = req.params;
    logInfo("Fetching CarEmployeeHistory by ID", { filePath: 'controllers/carEmployeeHistoryController', methodName: "getHistoryById", carEmployeeHistoryId });
    const history = await carEmployeeHistoryRepo.getHistoryById(carEmployeeHistoryId);
    if (!history) {
      logInfo("CarEmployeeHistory not found", { filePath: 'controllers/carEmployeeHistoryController', methodName: "getHistoryById", carEmployeeHistoryId });
      return res.status(404).json({ message: "CarEmployeeHistory not found" });
    }
    return res.status(200).json({
      message: "CarEmployeeHistory fetched successfully",
      data: history,
    });
  } catch (error) {
    logError("Error fetching CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "getHistoryById", error: error.message });
    return res.status(500).json({
      message: "Error fetching CarEmployeeHistory",
      error: error.message,
    });
  }
};
const updateHistory = async (req, res) => {
  try {
    const { carEmployeeHistoryId } = req.params;
    const data = req.body;
    logInfo("Updating CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "updateHistory", carEmployeeHistoryId, body: data });
    const updatedHistory = await carEmployeeHistoryRepo.updateHistory(carEmployeeHistoryId, data);
    if (!updatedHistory) {
      logInfo("CarEmployeeHistory not found", { filePath: 'controllers/carEmployeeHistoryController', methodName: "updateHistory", carEmployeeHistoryId });
      return res.status(404).json({ message: "CarEmployeeHistory not found" });
    }
    logInfo("CarEmployeeHistory updated successfully", { filePath: 'controllers/carEmployeeHistoryController', methodName: "updateHistory", updatedHistory });
    return res.status(200).json({
      message: "CarEmployeeHistory updated successfully",
      data: updatedHistory,
    });
  } catch (error) {
    logError("Error updating CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "updateHistory", error: error.message });
    return res.status(500).json({
      message: "Error updating CarEmployeeHistory",
      error: error.message,
    });
  }
};
const deleteHistory = async (req, res) => {
  try {
    const { carEmployeeHistoryId } = req.params;
    logInfo("Deleting CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "deleteHistory", carEmployeeHistoryId });
    const deleted = await carEmployeeHistoryRepo.deleteHistory(carEmployeeHistoryId);
    if (!deleted) {
      logInfo("CarEmployeeHistory not found", { filePath: 'controllers/carEmployeeHistoryController', methodName: "deleteHistory", carEmployeeHistoryId });
      return res.status(404).json({ message: "CarEmployeeHistory not found" });
    }
    logInfo("CarEmployeeHistory deleted successfully", { filePath: 'controllers/carEmployeeHistoryController', methodName: "deleteHistory", carEmployeeHistoryId });
    return res.status(200).json({
      message: "CarEmployeeHistory deleted successfully",
    });
  } catch (error) {
    logError("Error deleting CarEmployeeHistory", { filePath: 'controllers/carEmployeeHistoryController', methodName: "deleteHistory", error: error.message });
    return res.status(500).json({
      message: "Error deleting CarEmployeeHistory",
      error: error.message,
    });
  }
};

module.exports = {
  createHistory,
  getAllHistories,
  getHistoryById,
  updateHistory,
  deleteHistory,
};
