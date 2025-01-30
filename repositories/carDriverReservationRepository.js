const CarDriverReservation = require("../models/carDriverReservation");
const Car = require("../models/Car");
const Driver = require("../models/Driver");
const { logInfo, logError } = require ('../config/logger')

const createCarDriverReservation = async (reservationData) => {
  try {
    const reservation = await CarDriverReservation.create(reservationData);
    logInfo("Car driver Reservation created successfully", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "createCarDriverReservation",
    });
    return reservation;
  } catch (error) {
    logError("Error creating reservation", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "createCarDriverReservation",
      error: error.message,
    });
    throw new Error("Error creating reservation: " + error.message);
  }
};
const getCarDriverReservations = async () => {
  try {
    const reservations = await CarDriverReservation.findAll({
      include: [
        { model: Car, attributes: ["carId", "carName", "carModel"] },
        { model: Driver, attributes: ["driverId", "driverName", "driverLicenseNumber"] },
      ],
    });
    logInfo("Reservations retrieved successfully", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "getCarDriverReservations",
      data: reservations,
    });
    return reservations;
  } catch (error) {
    logError("Error retrieving reservations", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "getCarDriverReservations",
      error: error.message,
    });
    throw new Error("Error retrieving reservations: " + error.message);
  }
};
const getCarDriverReservationById = async (reservationId) => {
  try {
    logInfo("Accessing car driver reservation by Id", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "getCarDriverReservationById",
      data: reservation,
    });
    const reservation = await CarDriverReservation.findByPk(reservationId, {
      include: [
        { model: Car, attributes: ["carId", "carName", "carModel"] },
        { model: Driver, attributes: ["driverId", "driverName", "driverLicenseNumber"] },
      ],
    });
    if (!reservation) {
      throw new Error("Reservation not found");
    }
    logInfo("Reservation retrieved successfully by Id", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "getCarDriverReservationById",
      data: reservation,
    });
    return reservation;
  } catch (error) {
    logError("Error retrieving reservation", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "getCarDriverReservationById",
      error: error.message,
    });
    throw new Error("Error retrieving reservation: " + error.message);
  }
};
const updateCarDriverReservation = async (reservationId, reservationData) => {
  try {
    const reservation = await CarDriverReservation.findByPk(reservationId);
    if (reservation) {
      await reservation.update(reservationData);
      logInfo("Reservation updated successfully", {
        filePath: "repositories/carDriverReservationRepository",
        methodName: "updateCarDriverReservation",
        data: reservation,
      });
      return reservation;
    } else {
      throw new Error("Reservation not found");
    }
  } catch (error) {
    logError("Error updating reservation", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "updateCarDriverReservation",
      error: error.message,
    });
    throw new Error("Error updating reservation: " + error.message);
  }
};
const deleteCarDriverReservation = async (reservationId) => {
  try {
    const reservation = await CarDriverReservation.findByPk(reservationId);
    if (reservation) {
      await reservation.destroy();

      logInfo("Reservation deleted successfully", {
        filePath: "repositories/carDriverReservationRepository",
        methodName: "deleteCarDriverReservation",
        reservationId: reservationId,
      });
      return true;
    } else {
      throw new Error("Reservation not found");
    }
  } catch (error) {
    logError("Error deleting reservation", {
      filePath: "repositories/carDriverReservationRepository",
      methodName: "deleteCarDriverReservation",
      error: error.message,
    });
    throw new Error("Error deleting reservation: " + error.message);
  }
};

module.exports = {
  createCarDriverReservation,
  getCarDriverReservations,
  getCarDriverReservationById,
  updateCarDriverReservation,
  deleteCarDriverReservation,
};
