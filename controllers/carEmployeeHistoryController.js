const carEmployeeHistoryRepo = require("../repositories/carEmployeeHistoryRepo");

const createHistory = async (req, res) => {
  try {
    const historyData = req.body;
    const history = await carEmployeeHistoryRepo.createHistory(historyData);
    return res.status(201).json({
      message: "CarEmployeeHistory created successfully",
      data: history,
    });
  } catch (error) {
    console.error("Error creating CarEmployeeHistory:", error.message);
    return res.status(500).json({
      message: "Error creating CarEmployeeHistory",
      error: error.message,
    });
  }
};
const getAllHistories = async (req, res) => {
  try {
    const filters = req.query;
    const histories = await carEmployeeHistoryRepo.getAllHistories(filters);
    return res.status(200).json({
      message: "CarEmployeeHistory records fetched successfully",
      data: histories,
    });
  } catch (error) {
    console.error("Error fetching CarEmployeeHistory records:", error.message);
    return res.status(500).json({
      message: "Error fetching CarEmployeeHistory records",
      error: error.message,
    });
  }
};
const getHistoryById = async (req, res) => {
  try {
    const { carEmployeeHistoryId } = req.params;
    const history = await carEmployeeHistoryRepo.getHistoryById(carEmployeeHistoryId);
    if (!history) {
      return res.status(404).json({
        message: "CarEmployeeHistory not found",
      });
    }
    return res.status(200).json({
      message: "CarEmployeeHistory fetched successfully",
      data: history,
    });
  } catch (error) {
    console.error("Error fetching CarEmployeeHistory:", error.message);
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

    const updatedHistory = await carEmployeeHistoryRepo.updateHistory(carEmployeeHistoryId, data);
    if (!updatedHistory) {
      return res.status(404).json({
        message: "CarEmployeeHistory not found",
      });
    }

    return res.status(200).json({
      message: "CarEmployeeHistory updated successfully",
      data: updatedHistory,
    });
  } catch (error) {
    console.error("Error updating CarEmployeeHistory:", error.message);
    return res.status(500).json({
      message: "Error updating CarEmployeeHistory",
      error: error.message,
    });
  }
};
const deleteHistory = async (req, res) => {
  try {
    const { carEmployeeHistoryId } = req.params;
    const deleted = await carEmployeeHistoryRepo.deleteHistory(carEmployeeHistoryId);
    if (!deleted) {
      return res.status(404).json({
        message: "CarEmployeeHistory not found",
      });
    }
    return res.status(200).json({
      message: "CarEmployeeHistory deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting CarEmployeeHistory:", error.message);
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
