const CarDriverReservation = require("../models/carDriverReservation");
const Car = require("../models/Car");
const Driver = require("../models/Driver");

const createCarDriverReservation = async (reservationData) => {
  try {
    const reservation = await CarDriverReservation.create(reservationData);
    console.log("Reservation created successfully:", JSON.stringify(reservation, null, 2));
    return reservation;
  } catch (error) {
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
    console.log("Reservations retrieved:", JSON.stringify(reservations, null, 2));
    return reservations;
  } catch (error) {
    throw new Error("Error retrieving reservations: " + error.message);
  }
};
const updateCarDriverReservation = async (reservationId, reservationData) => {
  try {
    const reservation = await CarDriverReservation.findByPk(reservationId);
    if (reservation) {
      await reservation.update(reservationData);
      console.log("Reservation updated successfully:", JSON.stringify(reservation, null, 2));
      return reservation;
    } else {
      throw new Error("Reservation not found");
    }
  } catch (error) {
    throw new Error("Error updating reservation: " + error.message);
  }
};
const deleteCarDriverReservation = async (reservationId) => {
  try {
    const reservation = await CarDriverReservation.findByPk(reservationId);
    if (reservation) {
      await reservation.destroy();
      console.log("Reservation deleted successfully");
      return true;
    } else {
      throw new Error("Reservation not found");
    }
  } catch (error) {
    throw new Error("Error deleting reservation: " + error.message);
  }
};

module.exports = {
  createCarDriverReservation,
  getCarDriverReservations,
  updateCarDriverReservation,
  deleteCarDriverReservation,
};
