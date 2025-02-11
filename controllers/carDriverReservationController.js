const CarDriverReservationRepository = require("../repositories/carDriverReservationRepository");
const { logInfo, logError } = require('../config/logger');

const createCarDriverReservation = async (req, res) => {
  try {
    const reservationData = req.body;
    logInfo("Creating a new car driver reservation", { filePath: 'controllers/carDriverReservationController', methodName: "createCarDriverReservation", body: reservationData });
    const reservation = await CarDriverReservationRepository.createCarDriverReservation(reservationData);
    logInfo("Car driver reservation created successfully", { filePath: 'controllers/carDriverReservationController', methodName: "createCarDriverReservation", reservation });
    return res.status(201).json({
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    logError("Error creating reservation", { filePath: 'controllers/carDriverReservationController', methodName: "createCarDriverReservation", error: error.message });
    return res.status(500).json({
      message: "Error creating reservation",
      error: error.message,
    });
  }
};
const getCarDriverReservations = async (req, res) => {
  try {
    logInfo("Fetching all car driver reservations", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservations" });
    const reservations = await CarDriverReservationRepository.getCarDriverReservations();
    logInfo("Car driver reservations retrieved successfully", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservations" });
    return res.status(200).json({
      message: "Reservations retrieved successfully",
      data: reservations,
    });
  } catch (error) {
    logError("Error retrieving reservations", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservations", error: error.message });
    return res.status(500).json({
      message: "Error retrieving reservations",
      error: error.message,
    });
  }
};
const getCarDriverReservationById = async (req, res) => {
  try {
    const { carDriverReservationId } = req.params;
    logInfo("Fetching car driver reservation by ID", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservationById", carDriverReservationId });
    const reservation = await CarDriverReservationRepository.getCarDriverReservationById(carDriverReservationId);
    if (!reservation) {
      logInfo("Car driver reservation not found", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservationById", carDriverReservationId });
      return res.status(404).json({
        message: "Reservation not found",
      });
    }
    logInfo("Car driver reservation retrieved successfully", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservationById", reservation });
    return res.status(200).json({
      message: "Reservation retrieved successfully",
      data: reservation,
    });
  } catch (error) {
    logError("Error retrieving reservation", { filePath: 'controllers/carDriverReservationController', methodName: "getCarDriverReservationById", error: error.message });
    return res.status(500).json({
      message: "Error retrieving reservation",
      error: error.message,
    });
  }
};
const updateCarDriverReservation = async (req, res) => {
  try {
    const { carDriverReservationId } = req.params;
    const reservationData = req.body;
    logInfo("Updating car driver reservation", { filePath: 'controllers/carDriverReservationController', methodName: "updateCarDriverReservation", carDriverReservationId, body: reservationData });
    const updatedReservation = await CarDriverReservationRepository.updateCarDriverReservation(carDriverReservationId, reservationData);
    if (!updatedReservation) {
      logInfo("Car driver reservation not found", { filePath: 'controllers/carDriverReservationController', methodName: "updateCarDriverReservation", carDriverReservationId });
      return res.status(404).json({
        message: "Reservation not found",
      });
    }
    logInfo("Car driver reservation updated successfully", { filePath: 'controllers/carDriverReservationController', methodName: "updateCarDriverReservation", updatedReservation });
    return res.status(200).json({
      message: "Reservation updated successfully",
      data: updatedReservation,
    });
  } catch (error) {
    logError("Error updating reservation", { filePath: 'controllers/carDriverReservationController', methodName: "updateCarDriverReservation", error: error.message });
    return res.status(500).json({
      message: "Error updating reservation",
      error: error.message,
    });
  }
};
const deleteCarDriverReservation = async (req, res) => {
  try {
    const { carDriverReservationId } = req.params;
    logInfo("Deleting car driver reservation", { filePath: 'controllers/carDriverReservationController', methodName: "deleteCarDriverReservation", carDriverReservationId });
    const result = await CarDriverReservationRepository.deleteCarDriverReservation(carDriverReservationId);
    if (!result) {
      logInfo("Car driver reservation not found", { filePath: 'controllers/carDriverReservationController', methodName: "deleteCarDriverReservation", carDriverReservationId });
      return res.status(404).json({
        message: "Reservation not found",
      });
    }
    logInfo("Car driver reservation deleted successfully", { filePath: 'controllers/carDriverReservationController', methodName: "deleteCarDriverReservation", carDriverReservationId });
    return res.status(200).json({
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    logError("Error deleting reservation", { filePath: 'controllers/carDriverReservationController', methodName: "deleteCarDriverReservation", error: error.message });
    return res.status(500).json({
      message: "Error deleting reservation",
      error: error.message,
    });
  }
};

module.exports = {
  createCarDriverReservation,
  getCarDriverReservations,
  getCarDriverReservationById,
  updateCarDriverReservation,
  deleteCarDriverReservation,
};
