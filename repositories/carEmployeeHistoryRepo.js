const CarEmployeeHistory = require("../models/carEmployeeHistory");
const Car = require("../models/Car");
const Employee = require("../models/Employee");
const { logInfo, logError } = require ('../config/logger')

const createHistory = async (historyData) => {
  try {
    const history = await CarEmployeeHistory.create(historyData);
    logInfo("CarEmployeeHistory created successfully", { history });
    return history;
  } catch (error) {
    logError("Error creating CarEmployeeHistory", { error: error.message });
    throw new Error("Error creating CarEmployeeHistory: " + error.message);
  }
};
const getAllHistories = async (filters = {}) => {
  try {
    const histories = await CarEmployeeHistory.findAll({
      where: filters,
      include: [
        { model: Car, attributes: ["name", "model"] },
        { model: Employee, attributes: ["name", "email"] },
      ],
    });
    logInfo("CarEmployeeHistories retrieved successfully", { histories });
    return histories;
  } catch (error) {
    logError("Error retrieving CarEmployeeHistories", { error: error.message });
    throw new Error("Error retrieving CarEmployeeHistories: " + error.message);
  }
};
const getHistoryById = async (carEmployeeHistoryId) => {
  try {
    const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId, {
      include: [
        { model: Car, attributes: ["name", "model"] },
        { model: Employee, attributes: ["name", "email"] },
      ],
    });
    if (history) {
      logInfo("CarEmployeeHistory retrieved by ID successfully", { history });
      return history;
    } else {
      logError("CarEmployeeHistory not found", { carEmployeeHistoryId });
      throw new Error("CarEmployeeHistory not found");
    }
  } catch (error) {
    logError("Error retrieving CarEmployeeHistory by ID", { carEmployeeHistoryId, error: error.message });
    throw new Error("Error retrieving CarEmployeeHistory by ID: " + error.message);
  }
};
const updateHistory = async (carEmployeeHistoryId, historyData) => {
  try {
    const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId);
    if (history) {
      await history.update(historyData);
      logInfo("CarEmployeeHistory updated successfully", { history });
      return history;
    } else {
      logError("CarEmployeeHistory not found", { carEmployeeHistoryId });
      throw new Error("CarEmployeeHistory not found");
    }
  } catch (error) {
    logError("Error updating CarEmployeeHistory", { carEmployeeHistoryId, error: error.message });
    throw new Error("Error updating CarEmployeeHistory: " + error.message);
  }
};
const deleteHistory = async (carEmployeeHistoryId) => {
  try {
    const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId);
    if (history) {
      await history.destroy();
      logInfo("CarEmployeeHistory deleted successfully", { carEmployeeHistoryId });
      return true;
    } else {
      logError("CarEmployeeHistory not found", { carEmployeeHistoryId });
      throw new Error("CarEmployeeHistory not found");
    }
  } catch (error) {
    logError("Error deleting CarEmployeeHistory", { carEmployeeHistoryId, error: error.message });
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