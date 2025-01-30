const CarDriverReservationRepository = require('../repositories/carDriverReservationRepository');
const { logInfo, logError } = require ('../config/logger')

const createCarDriverReservation = async (reservationData) => {
  try {
    logInfo('Creating car driver reservation', {
      filePath: 'services/carDriverReservationService',
      methodName: 'createCarDriverReservation',
    });
    const reservation = await CarDriverReservationRepository.createCarDriverReservation(reservationData);
    logInfo('Car driver reservation created successfullyyyy', {
      filePath: 'services/carDriverReservationService',
      methodName: 'createCarDriverReservation',
    });
    return reservation;
  } catch (error) {
    logError('Error occurred while creating car driver reservation', {
      filePath: 'services/carDriverReservationService',
      methodName: 'createCarDriverReservation',
      error,
    });
    throw new Error('Service - Error creating reservation: ' + error.message);
  }
};
const getCarDriverReservations = async () => {
  try {
    logInfo('Fetching car driver reservations', {
      filePath: 'services/carDriverReservationService',
      methodName: 'getCarDriverReservations',
    });
    const reservations = await CarDriverReservationRepository.getCarDriverReservations();
    logInfo('Car driver reservations fetched successfully', {
      filePath: 'services/carDriverReservationService',
      methodName: 'getCarDriverReservations',
    });
    return reservations;
  } catch (error) {
    logError('Error occurred while fetching car driver reservations', {
      filePath: 'services/carDriverReservationService',
      methodName: 'getCarDriverReservations',
      error,
    });
    throw new Error('Service - Error retrieving reservations: ' + error.message);
  }
};
const getCarDriverReservationById = async (reservationId) => {
  try {
    logInfo("Fetching reservation by ID", { reservationId });
    const reservation = await CarDriverReservationRepository.getCarDriverReservationById(reservationId);
    if (!reservation) {
      throw new Error(`Reservation with ID ${reservationId} not found`);
    }
    logInfo("Reservation fetched successfully", { reservationId });
    return reservation;
  } catch (error) {
    logError("Error fetching reservation by ID", { reservationId, error: error.message });
    throw new Error("Service - Error retrieving reservation: " + error.message);
  }
};
const updateCarDriverReservation = async (reservationId, reservationData) => {
  try {
    logInfo('Updating car driver reservation', {
      filePath: 'service/carDriverReservationService',
      methodName: 'updateCarDriverReservation',
      reservationId,
    });
    const updatedReservation = await CarDriverReservationRepository.updateCarDriverReservation(reservationId, reservationData);
    logInfo('Car driver reservation updated successfully', {
      filePath: 'services/carDriverReservationService',
      methodName: 'updateCarDriverReservation',
      reservationId,
    });
    return updatedReservation;
  } catch (error) {
    logError('Error occurred while updating car driver reservation', {
      filePath: 'services/carDriverReservationService',
      methodName: 'updateCarDriverReservation',
      reservationId,
      error,
    });
    throw new Error("Service - Error updating reservation: " + error.message);
  }
};
const deleteCarDriverReservation = async (reservationId) => {
  try {
    logInfo('Deleting car driver reservation', {
      filePath: 'services/carDriverReservationService',
      methodName: 'deleteCarDriverReservation',
      reservationId,
    });
    const result = await CarDriverReservationRepository.deleteCarDriverReservation(reservationId);
    logInfo('Car driver reservation deleted successfully', {
      filePath: 'services/carDriverReservationService',
      methodName: 'deleteCarDriverReservation',
      reservationId,
    });
    return result;
  } catch (error) {
    logError('Error occurred while deleting car driver reservation', {
      filePath: 'services/carDriverReservationService',
      methodName: 'deleteCarDriverReservation',
      reservationId,
      error,
    });
    throw new Error("Service - Error deleting reservation: " + error.message);
  }
};

module.exports = {
  createCarDriverReservation,
  getCarDriverReservations,
  getCarDriverReservationById,
  updateCarDriverReservation,
  deleteCarDriverReservation,
};
