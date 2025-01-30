const carEmployeeHistoryRepo = require("../repositories/carEmployeeHistoryRepo");
const { logInfo, logError} = require ('../config/logger')

const createHistory = async (data) => {
  try {
    logInfo("Creating new car employee history", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "createHistory",
    });
    const newHistory = await carEmployeeHistoryRepo.createHistory(data);
    logInfo("Car employee history created successfully", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "createHistory",
    });
    return newHistory;
  } catch (error) {
    logError("Error creating car employee history", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "createHistory",
      error,
    });
    throw new Error("Service Error - Creating carEmployeeHistory: " + error.message);
  }
};
const getAllHistories = async (filters = {}) => {
  try {
    logInfo("Retrieving all car employee histories", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "getAllHistories",
    });
    const histories = await carEmployeeHistoryRepo.getAllHistories(filters);
    logInfo("Car employee histories retrieved successfully", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "getAllHistories",
    });
    return histories;
  } catch (error) {
    logError("Error retrieving car employee histories", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "getAllHistories",
      error,
    });
    throw new Error("Service Error - Retrieving carEmployeeHistories: " + error.message);
  }
};
const getHistoryById = async (carEmployeeHistoryId) => {
  try {
    logInfo("Retrieving car employee history by ID", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "getHistoryById",
      carEmployeeHistoryId,
    });
    const history = await carEmployeeHistoryRepo.getHistoryById(carEmployeeHistoryId);
    if (!history) {
      logError("Car employee history not found", {
        filePath: "services/carEmployeeHistoryService",
        methodName: "getHistoryById",
        carEmployeeHistoryId,
      });
      throw new Error("CarEmployeeHistory not found");
    }
    logInfo("Car employee history retrieved successfully", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "getHistoryById",
    });
    return history;
  } catch (error) {
    logError("Error retrieving car employee history by ID", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "getHistoryById",
      carEmployeeHistoryId,
      error,
    });
    throw new Error("Service Error - Retrieving carEmployeeHistory by ID: " + error.message);
  }
};

const updateHistory = async (carEmployeeHistoryId, data) => {
  try {
    logInfo("Updating car employee history", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "updateHistory",
      carEmployeeHistoryId,
    });
    const updatedHistory = await carEmployeeHistoryRepo.updateHistory(carEmployeeHistoryId, data);
    if (!updatedHistory) {
      logError("Car employee history not found for update", {
        filePath: "services/carEmployeeHistoryService",
        methodName: "updateHistory",
        carEmployeeHistoryId,
      });
      throw new Error("CarEmployeeHistory not found");
    }
    logInfo("Car employee history updated successfully", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "updateHistory",
    });
    return updatedHistory;
  } catch (error) {
    logError("Error updating car employee history", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "updateHistory",
      carEmployeeHistoryId,
      error,
    });
    throw new Error("Service Error - Updating carEmployeeHistory: " + error.message);
  }
};
const deleteHistory = async (carEmployeeHistoryId) => {
  try {
    logInfo("Deleting car employee history", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "deleteHistory",
      carEmployeeHistoryId,
    });
    const deleted = await carEmployeeHistoryRepo.deleteHistory(carEmployeeHistoryId);
    if (!deleted) {
      logError("Car employee history not found for deletion", {
        filePath: "services/carEmployeeHistoryService",
        methodName: "deleteHistory",
        carEmployeeHistoryId,
      });
      throw new Error("CarEmployeeHistory not found");
    }
    logInfo("Car employee history deleted successfully", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "deleteHistory",
    });
    return { message: "CarEmployeeHistory deleted successfully" };
  } catch (error) {
    logError("Error deleting car employee history", {
      filePath: "services/carEmployeeHistoryService",
      methodName: "deleteHistory",
      carEmployeeHistoryId,
      error,
    });
    throw new Error("Service Error - Deleting carEmployeeHistory: " + error.message);
  }
};

module.exports = {
  createHistory,
  getAllHistories,
  getHistoryById,
  updateHistory,
  deleteHistory,
};