const CarEmployeeHistory = require("../models/carEmployeeHistory");
const Car = require("../models/Car");
const Employee = require("../models/Employee");

const carEmployeeHistoryRepo = {
  createHistory: async (data) => {
    try {
      const history = await CarEmployeeHistory.create(data);
      return history;
    } catch (error) {
      console.error("Error creating CarEmployeeHistory:", error);
      throw error;
    }
  },
  getAllHistories: async (filters = {}) => {
    try {
      const histories = await CarEmployeeHistory.findAll({
        where: filters,
        include: [
          { model: Car, attributes: ["name", "model"] },
          { model: Employee, attributes: ["name", "email"] },
        ],
      });
      return histories;
    } catch (error) {
      console.error("Error fetching CarEmployeeHistory records:", error);
      throw error;
    }
  },
  getHistoryById: async (carEmployeeHistoryId) => {
    try {
      const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId, {
        include: [
          { model: Car, attributes: ["name", "model"] },
          { model: Employee, attributes: ["name", "email"] },
        ],
      });
      return history;
    } catch (error) {
      console.error("Error fetching CarEmployeeHistory by ID:", error);
      throw error;
    }
  },
  updateHistory: async (carEmployeeHistoryId, data) => {
    try {
      const history = await CarEmployeeHistory.findByPk(carEmployeeHistoryId);
      if (!history) {
        throw new Error("CarEmployeeHistory record not found");
      }
      await history.update(data);
      return history;
    } catch (error) {
      console.error("Error updating CarEmployeeHistory:", error);
      throw error;
    }
  },

  deleteHistory: async (carEmployeeHistoryId) => {
    try {
      const result = await CarEmployeeHistory.destroy({ where: { carEmployeeHistoryId: carEmployeeHistoryId } });
      return result > 0;
    } catch (error) {
      console.error("Error deleting CarEmployeeHistory:", error);
      throw error;
    }
  },
};

module.exports = carEmployeeHistoryRepo;
