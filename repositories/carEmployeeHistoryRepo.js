const CarEmployeeHistory = require("../models/carEmployeeHistory");
const { logInfo, logError } = require ('../config/logger')
const Car = require('../models/Car'); 
const Employee = require('../models/Employee');

const createHistory = async (historyData) => {
  try {
    const history = await CarEmployeeHistory.create(historyData);
    logInfo("CarEmployeeHistory created successfully", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "createHistory", history });
    return history;
  } catch (error) {
    logError("Error creating CarEmployeeHistory", { filePath: "repositories/carEmployeeHistoryRepo", methodName: "createHistory", error: error.message });
    throw new Error("Error creating CarEmployeeHistory: " + error.message);
  }
};
const getAllHistories = async () => {
  try {
    const histories = await CarEmployeeHistory.findAll({
      include: [ Car, Employee]
  });
    logInfo("CarEmployeeHistories retrieved successfully", { filePath: "repositories/carEmployeeHistoryRepo", methodName: "getAllHistories", histories });
    return histories;
  } catch (error) {
    logError("Error retrieving CarEmployeeHistories", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "getAllHistories", error: error.message });
    throw new Error("Error retrieving CarEmployeeHistories: " + error.message);
  }
};
const getHistoryById = async (carEmployeeHistoryId) => {
  try {
    const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId, {
      include: [ Car, Employee]
  });
    if (history) {
      logInfo("CarEmployeeHistory retrieved by ID successfully", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "getHistoryById", history });
      return history;
    } else {
      logError("CarEmployeeHistory not found", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "getHistoryById", carEmployeeHistoryId });
      throw new Error("CarEmployeeHistory not found");
    }
  } catch (error) {
    logError("Error retrieving CarEmployeeHistory by ID", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "getHistoryById", carEmployeeHistoryId, error: error.message });
    throw new Error("Error retrieving CarEmployeeHistory by ID: " + error.message);
  }
};
const updateHistory = async (carEmployeeHistoryId, historyData) => {
  try {
    const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId);
    if (history) {
      await history.update(historyData);
      logInfo("CarEmployeeHistory updated successfully", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "updateHistory", history });
      return history;
    } else {
      logError("CarEmployeeHistory not found", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "updateHistory", carEmployeeHistoryId });
      throw new Error("CarEmployeeHistory not found");
    }
  } catch (error) {
    logError("Error updating CarEmployeeHistory", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "updateHistory", carEmployeeHistoryId, error: error.message });
    throw new Error("Error updating CarEmployeeHistory: " + error.message);
  }
};
const deleteHistory = async (carEmployeeHistoryId) => {
  try {
    const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId);
    if (history) {
      await history.destroy();
      logInfo("CarEmployeeHistory deleted successfully", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "deleteHistory", carEmployeeHistoryId });
      return true;
    } else {
      logError("CarEmployeeHistory not found", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "deleteHistory", carEmployeeHistoryId });
      throw new Error("CarEmployeeHistory not found");
    }
  } catch (error) {
    logError("Error deleting CarEmployeeHistory", {filePath: "repositories/carEmployeeHistoryRepo", methodName: "deleteHistory", carEmployeeHistoryId, error: error.message });
    throw new Error("Error deleting CarEmployeeHistory: " + error.message);
  }
};

module.exports = {
  createHistory,
  getAllHistories,
  getHistoryById,
  updateHistory,
  deleteHistory,
};