const CarDriverReservationRepository = require("../repositories/CarDriverReservationRepository");

const createCarDriverReservation = async (req, res) => {
  try {
    const reservationData = req.body;
    const reservation = await CarDriverReservationRepository.createCarDriverReservation(reservationData);
    return res.status(201).json({
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    console.error("Error creating reservation:", error.message);
    return res.status(500).json({
      message: "Error creating reservation",
      error: error.message,
    });
  }
};
const getCarDriverReservations = async (req, res) => {
  try {
    const reservations = await CarDriverReservationRepository.getCarDriverReservations();
    return res.status(200).json({
      message: "Reservations retrieved successfully",
      data: reservations,
    });
  } catch (error) {
    console.error("Error retrieving reservations:", error.message);
    return res.status(500).json({
      message: "Error retrieving reservations",
      error: error.message,
    });
  }
};
const getCarDriverReservationById = async (req, res) => {
  try {
    const { carDriverReservationId } = req.params;
    const reservation = await CarDriverReservationRepository.getCarDriverReservationById(carDriverReservationId);
    if (!reservation) {
      return res.status(404).json({
        message: "Reservation not found",
      });
    }
    return res.status(200).json({
      message: "Reservation retrieved successfully",
      data: reservation,
    });
  } catch (error) {
    console.error("Error retrieving reservation:", error.message);
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
    const updatedReservation = await CarDriverReservationRepository.updateCarDriverReservation(carDriverReservationId, reservationData);
    if (!updatedReservation) {
      return res.status(404).json({
        message: "Reservation not found",
      });
    }
    return res.status(200).json({
      message: "Reservation updated successfully",
      data: updatedReservation,
    });
  } catch (error) {
    console.error("Error updating reservation:", error.message);
    return res.status(500).json({
      message: "Error updating reservation",
      error: error.message,
    });
  }
};
const deleteCarDriverReservation = async (req, res) => {
  try {
    const { carDriverReservationId } = req.params;
    const result = await CarDriverReservationRepository.deleteCarDriverReservation(carDriverReservationId);
    if (!result) {
      return res.status(404).json({
        message: "Reservation not found",
      });
    }
    return res.status(200).json({
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting reservation:", error.message);
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
