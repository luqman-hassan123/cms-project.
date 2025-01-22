const express = require('express');
const router = express.Router();
const {
  createCarDriverReservation,
  deleteCarDriverReservation,
  getCarDriverReservations,
  getCarDriverReservationById,
  updateCarDriverReservation,
} = require('../controllers/carDriverReservationController');
const {
  validateCarDriverReservation,
  validateCarDriverReservationUpdate,
  validateCarDriverReservationId,
} = require('../validation/validateCarDriverReservation');

router.post('/', validateCarDriverReservation, createCarDriverReservation);
router.delete('/:carDriverReservationId', validateCarDriverReservationId, deleteCarDriverReservation);
router.put('/:carDriverReservationId', validateCarDriverReservationUpdate, updateCarDriverReservation);
router.get('/:carDriverReservationId', validateCarDriverReservationId, getCarDriverReservationById);
router.get('/', getCarDriverReservations);

module.exports = router;
