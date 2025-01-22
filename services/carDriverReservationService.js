const CarDriverReservationRepository = require('../repositories/CarDriverReservationRepository'); // Adjust the path if necessary

const createCarDriverReservation = async (reservationData) => {
  try {
    const reservation = await CarDriverReservationRepository.createCarDriverReservation(reservationData);
    return reservation;
  } catch (error) {
    throw new Error("Service - Error creating reservation: " + error.message);
  }
};
const getCarDriverReservations = async () => {
  try {
    const reservations = await CarDriverReservationRepository.getCarDriverReservations();
    return reservations;
  } catch (error) {
    throw new Error("Service - Error retrieving reservations: " + error.message);
  }
};
const updateCarDriverReservation = async (reservationId, reservationData) => {
  try {
    const updatedReservation = await CarDriverReservationRepository.updateCarDriverReservation(reservationId, reservationData);
    return updatedReservation;
  } catch (error) {
    throw new Error("Service - Error updating reservation: " + error.message);
  }
};
const deleteCarDriverReservation = async (reservationId) => {
  try {
    const result = await CarDriverReservationRepository.deleteCarDriverReservation(reservationId);
    return result;
  } catch (error) {
    throw new Error("Service - Error deleting reservation: " + error.message);
  }
};

module.exports = {
  createCarDriverReservation,
  getCarDriverReservations,
  updateCarDriverReservation,
  deleteCarDriverReservation,
};
