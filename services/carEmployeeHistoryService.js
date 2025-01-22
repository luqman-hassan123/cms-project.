const carEmployeeHistoryRepo = require("../repositories/carEmployeeHistoryRepo");

const carEmployeeHistoryService = {
  createHistory: async (data) => {
    try {
      const history = await carEmployeeHistoryRepo.createHistory(data);
      return history;
    } catch (error) {
      console.error("Error in service while creating history:", error);
      throw error;
    }
  },
  getAllHistories: async (filters = {}) => {
    try {
      const histories = await carEmployeeHistoryRepo.getAllHistories(filters);
      return histories;
    } catch (error) {
      console.error("Error in service while fetching all histories:", error);
      throw error;
    }
  },
  getHistoryById: async (carEmployeeHistoryId) => {
    try {
      const history = await carEmployeeHistoryRepo.getHistoryById(carEmployeeHistoryId);
      return history;
    } catch (error) {
      console.error("Error in service while fetching history by ID:", error);
      throw error;
    }
  },
  updateHistory: async (carEmployeeHistoryId, data) => {
    try {
      const updatedHistory = await carEmployeeHistoryRepo.updateHistory(carEmployeeHistoryId, data);
      return updatedHistory;
    } catch (error) {
      console.error("Error in service while updating history:", error);
      throw error;
    }
  },
  deleteHistory: async (carEmployeeHistoryId) => {
    try {
      const result = await carEmployeeHistoryRepo.deleteHistory(carEmployeeHistoryId);
      return result;
    } catch (error) {
      console.error("Error in service while deleting history:", error);
      throw error;
    }
  },
};

module.exports = carEmployeeHistoryService;
